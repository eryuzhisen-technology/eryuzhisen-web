<?php
if (!defined('BASEPATH'))
	exit('No direct script access allowed');

//接口控制
//require_once APPPATH . 'libraries/platform/web_stub_cntl.php';

class MY_Controller extends CI_Controller {
	public function __construct() {
		parent::__construct();
		$this->load->helper('url');
		$this->load->helper('cookie');
		$this->load->helper('common');
	}

	public function __destruct() {
        //todo
	}

	// 组合输出
	protected function view($type = 'html') {
		// 可选 $type = html | json
		if ($type == 'html') {
			$this->parser->parse($this->content, $this->data);
		} else if ($type == 'json') {
			$template = $this->parser->parse($this->content, $this->data, TRUE);
			//这是为了兼容json的输出
			$template = str_replace(array(',]', ',}'), array(']', '}'));
			$this->output->append_output($template);
		}
	}

	//将页面以json格式输出
	protected function showJson($data) {
		$charset = "utf-8";
		if ($this->getPostXSS("charset") == "gbk") {
			$charset = "GBK";
		}
		$this->output->set_header("Content-Type:application/json; charset={$charset}");

		$res = $this->getOutputStr($data);

		$this->output->append_output($res);
	}

	//将页面以json格式输出
	protected function showJsonByOri($data) {
		$this->output->set_header("Content-Type:text/html; charset=UTF-8");
		$r = preg_replace('/\\\n/i', '', json_encode($data));
		$cb = $this->input->get("callback");
		if ($cb && $this->checkFucName($cb)) {
			$this->output->append_output($cb . "(" . $r . ")");
		} else {
			$this->output->append_output($r);
		}

	}

	//将页面以jsonp的格式输出
	protected function showJsonp($data, $callback = "callback") {
		$callback = $this->checkFucName($callback);
		$callback = $callback ? $callback : "callback";
		$this->output->append_output($callback . "(" . json_encode($data) . ")");
	}

	//将页面以jsonp的格式输出
	protected function showData($data) {
		$cb = $this->input->get("callback");
		if ($cb && $this->checkFucName($cb)) {
			$this->output->append_output($cb . "(" . $data . ")");
		} else {
			$this->output->append_output($data);
		}
	}

	//函数命名检测
	protected function checkFucName($name) {
		if (preg_match('/^[a-zA-Z_\.0-9]*$/', $name)) {
			return $name;
		} else {
			return FALSE;
		}
	}

	//输出错误信息
	protected function showErrorPage($errorId, $errorInfo, $targetPage, $goback = 0) {
		$this ->data["errorId"] = $errorId;
		$this ->data["errorInfo"] = $errorInfo;
		$this ->data["targetPage"] = $targetPage;
		$this ->data["goback"] = $goback;
		if ($this->input->get_post("g_rt") == "json") {
			echo('{"dwVersion":"","dwErrCode":"' . $errorId . '","strErrMsg":"' . $errorInfo . '"}');
		} else {
			echo($this->load->view('boss/error.php', $this ->data, TRUE));
		}
		exit;
	}

	//alert提示并跳转
	protected function alertGo($info, $url) {
		echo('<script language="javascript">alert("' . $info . '");location.href="' . $url . '"</script>');
		exit;
	}

	//alert提示并返回
	protected function alertGoback($info, $step = -1) {
		echo('<script language="javascript">alert("' . $info . '");history.go(' . $step . ')</script>');
		exit;
	}

	//time33加密算法
	protected function times33($string) {
		$code = 5381;
		for ($i = 0, $len = strlen($string); $i < $len; $i++) {
			$code = (int)(($code << 5) + $code + ord($string{$i})) & 0x7fffffff;
			//与0x7fffffff做与运算是为了防止内存溢出
		}

		return $code;
	}

	/**
	 * 未登录
	 * @return [type] [description]
	 */
	protected function showNotLogin($msg = "") {
		$this->showJson(array("errCode" => 1900, 'loginCode' => $this->loginCode, 'msg' => $msg));
	}

	/**
	 * 未登录
	 * @return [type] [description]
	 */
	protected function showSystemBusy() {
		$this->showJson(array("errCode" => 3900));
	}

	/**
	 * 未注册
	 * @return [type] [description]
	 */
	protected function showNotRegister() {
		$this->showJson(array("errCode" => 1901));
	}

	protected function showError($code, $msg, $data = false) {
		$data = isset($data) ? $data : array();
		$this->showJson(array("errCode" => $code, 'retcode' => $code,'retCode' => $code, "msg" => $msg, "data" => $data));//retCode是后面加的用驼峰法
	}

	/**
	 * 接口成功回调
	 * @param  [type] $arr [description]
	 * @return [type]      [description]
	 * @title 接口成功回调
	 */
	protected function showSuccess($arr, $use = 1, $ismer = 0) {
		$r = array(
			"errCode" => 0,
			'retcode' => 0,
			'msg' => ""
		);
		if ($ismer) {
			$r = array_merge($r, $arr);
		} else {
			$r['data'] = $arr;
		}
		if ($use == 1) {
			$this->showJson($r);
		} else if ($use == 2) {
			$this->showJsonByOri($r);
		}
	}

	/**
	 * 格式化输出
	 * @param  [type] $resp        [description]
	 * @param  [type] $filterArray [可选，若指定，指定的filed被过滤，不输出]
	 * @param  [type] $outputArray [可选，若指定，则指定的filed才输出]
	 * @return [type]              [description]
	 */
	protected function getResp($resp, $filterArray = array(), $outputArray = array()) {
		$r = array();
		foreach ($resp as $k => $v) {
			if ($k == "dwVersion")
				continue;
			if (preg_match('/_u$/', $k)) {
				continue;
			}
			$kNoPrefix = lcfirst((preg_replace('/(dw|ddw|str)/', '', $k)));
			if (isset($outputArray) && is_array($outputArray) && count($outputArray) > 0) {
				if (!in_array($kNoPrefix, $outputArray)) {
					continue;
				}
			}

			if (isset($filterArray) && is_array($filterArray) && count($filterArray) > 0) {
				if (in_array($kNoPrefix, $filterArray)) {
					continue;
				}
			}

			if (substr($k, 0, 2) == "dw") {
				$r[lcfirst(substr($k, 2))] = intval(trim($v));
			} elseif (substr($k, 0, 3) == "ddw") {
				$r[lcfirst(substr($k, 3))] = intval(trim($v));
			} elseif (substr($k, 0, 3) == "str") {
				$r[lcfirst(substr($k, 3))] = trim($v);
			} else {
				$r[$k] = $v;
			}
		}

		return $r;
	}

	/**
	 * 判断是否移动设备
	 * @return [type] [description]
	 * @title 判断是否移动设备
	 */
	protected function isMobile() {
		$this->load->library('user_agent');
		$isMobile = FALSE;
		if ($this->agent->is_mobile()) {
			$isMobile = TRUE;
		}

		return $isMobile;
	}

	/**
	 * 从GET POST中取值
	 * @return [type] [description]
	 */
	protected function getPostXSS($k, $default = "") {
		$this ->load ->helper('common');

		return $this->input->get_post($k) ? (removeXSS($this->input->get_post($k))) : $default;
	}

	/**
	 * 从server中取值
	 * @param  [type] $str [description]
	 * @return [type]      [description]
	 */
	protected function getServerXSS($str){
        return $this->input->server($str) ? (removeXSS($this->input->server($str))) : '';
    }

	/**
	 * 检查referer是否有效
	 * @param  boolean $allowEmptyRefer 是否允许空的Refer
	 * @return [type]             [description]
	 */
    function checkReferer($allowEmptyRefer = TRUE) {
        if ($allowEmptyRefer) {
            return TRUE;
        } else if (isset($_SERVER['HTTP_REFERER'])) {
            $referer = parse_url($_SERVER['HTTP_REFERER']);
            if (isset($referer['host']) && preg_match("/(itisxiong)\.com$/", $referer['host']) == TRUE) {
                return TRUE;
            }
            //大部分场景下，没有Refer是可以放行的，某些场景下需要很严格的 refer 检查，比如 userInfo 接口，检查不到 refer 就不给放行
        }
         $this->showError(-1038, "invaliad referer!");

        return FALSE;
    }

	/**
	 * @param $data
	 * @return string
	 */
	protected function getOutputStr($data) {
		$data['serverTime'] = time();
		$content = unicode_json_encode($data);
		$res = '';

		//如果有callback参数，那么支持callback调用。
		$cb = $this->getPostXSS("callback");
		$jsonp = $this->getPostXSS("jsonp");

		if ($cb && $this->checkFucName($cb)) {
			$domain = $this->getPostXSS('domain');
			if (!empty($domain)) {
				$res = 'document.domain="' . $domain . '";';
			}

			$res = $res . $cb . "(" . $content . ")";
		} elseif ($jsonp && $this->checkFucName($jsonp)) {
			//支持jsonp的回调方式
			$res = "var {$jsonp}={$content}";
		} else {
			$res = $content;
		}

		if ($this->getPostXSS('scriptTag') == '1') {
			$res = '<script type="text/javascript">' . $res . '</script>';
		}

		return $res;
	}

	/**
	 * gbk格式Json转换成utf8格式Json
	 * @param $v
	 * @return array|string
	 */
	protected function gbk2utfJson($v) {
		if (is_array($v)) {
			foreach ($v as $key => $value) {
				$v[$key] = $this->gbk2utfJson($value);
			}

			return $v;
		} else {
			return iconv("gbk", "utf-8", $v);
		}
	}

	/**
	 * gbk格式字符串转换成utf8格式Json函数
	 * @param $arr
	 * @return string
	 */
	protected function gbk_json_decode($arr) {
		$arr = $this->gbk2utfJson($arr);
		$str = json_decode($arr, TRUE);

		return $str;
	}

	/**
	 * 检查是否在某个时间范围内
	 * @param $begin 开始时间
	 * @param $end 结束时间
	 * @return bool
	 */
	public function checkValidTime($begin, $end) {
		$now = time();
		if($begin){
			$showDate = strtotime($begin);
			if($showDate!=false && $showDate > $now){  //还没到上架时间
				return false;
			}
		}
		if($end){
			$hideDate = strtotime($end);
			if($hideDate!=false && $hideDate < $now){  //已经过了下架时间
				return false;
			}
		}
		return true;
	}
}

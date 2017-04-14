<?php

/**
 * 获取远程IP
 */
if ( ! function_exists('getRemoteIp')){

	function getRemoteIp(){
		$ip = getenv('HTTP_X_CLIENT_IP') ? getenv('HTTP_X_CLIENT_IP') : getenv('HTTP_X_FORWARDED_FOR');
        preg_match("/[\d\.]{7,15}/", $ip, $match);
        if (isset($match[0]))
            return $realIP = $match[0];

        //非代理时
        $ip = !empty($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : '0.0.0.0';
        preg_match("/[\d\.]{7,15}/", $ip, $match);

        return $realIP = isset($match[0]) ? $match[0] : '0.0.0.0';
	}

}


/**
 * xss过滤函数
 *
 * @param string $str 待过滤的文本
 * @return string
 */
if ( ! function_exists('removeXSS')){
	function removeXSS($val,$type='text'){
	    switch ($type) {
	    	case 'url':
	    		return preg_replace('/([^a-zA-Z0-9_\.?=&#|\/]+)/i','',$val);
	    		break;
	    	case 'text':
	    		$val = preg_replace('/([\x00-\x08]|[\x0b-\x0c]|[\x0e-\x19])/', '', $val);
	    		$val = str_replace(array('(',')','u003c','u003e'),array('(',')','',''), $val);
	    		return htmlspecialchars($val);
	    		break;
	    	case 'num':
	    		return preg_replace('/([^0-9Ee+\.]+)/i','',$val);
	    		break;
	    	case 'email':
	    		return preg_replace('/([^a-zA-Z0-9_\.@]+)/i','',$val);
	    		break;
	    	case 'phone':
	    		return preg_replace('/([^0-9\-]+)/i','',$val);
	    		break;
            case 'betContent':
                return preg_replace('/([^a-zA-Z0-9_\.,:^?=&#|\/]+)/i','',$val);
                break;
	    	default:
	    		break;
	    }
	}
}
if( ! function_exists('qzap_hash_time33')){
     /**
     * Time33 哈希算法
     *
     * @param string $str 待加密的文本，暂不支持中文
     * @return int
     */
    function qzap_hash_time33($str) {
        $hash = 5381;
        $len = strlen($str);
        for ($i = 0; $i < $len; ++$i) {
            $hash = (int)(($hash<<5&0x7fffffff) + ord($str{$i}) + $hash);
        }
        return $hash & 0x7fffffff;
    }
}
if( ! function_exists('csrfCheck')){
     /**
     * csrf校验
     *
     * @param string $g_tk 传来的token
     * @return bool
     */
    function csrfCheck($g_tk) {
        $skey = $_COOKIE["skey"];
        if(qzap_hash_time33($skey)!=$g_tk){
           return false;
        }
        return true;
    }
}
if( ! function_exists('setVisitCookie')){
    function setVisitCookie() {
        $visitkey = get_cookie("visitkey");
        if ($visitkey == NULL || $visitkey == 0) {
            // itilReport('620653');//Report to ITIL when create visitKey
            $ip=getRemoteIp();
            $ipArr = str_split($ip);
            $ipStr = "";
            $ipFlag = TRUE;
            for ($i = count($ipArr); $i-- > 0; ) {
                if ($ipFlag == TRUE) {
                    $ipStr = $ipArr[$i] . $ipStr;
                    $ipFlag = FALSE;
                } else if ($ipArr[$i] == '.') {
                    $ipFlag = TRUE;
                }
            }
            $port = $_SERVER['REMOTE_PORT'];
            $ipNum = $ipStr + 0;
            $portNum = $port + 0;
            $time = time();
            $visitkey = ((($ipNum<<16) | $portNum)<<32) | ($time & 0xffffffff);
            setcookie("visitkey", "$visitkey", mktime(0, 0, 0, 1, 1, 2100), "/");
            return $visitkey;
        }else{
            return $visitkey;
        }
    }
}

if( ! function_exists('unicode_json_encode')){
	/**
	 * json_encode并转换成unicode编码
	 * @param array $arr
	 * @return string
	 */
	function unicode_json_encode($arr) {
		require_once APPPATH . 'libraries/Json.php';
		$arr = zhjson($arr);
		$str = json_encode($arr);
		return $str;
	}

	function zhjson($v){
		if (is_array($v)) {
			foreach ($v as $key => $value) {
				$v[$key] = zhjson($value);
			}
			return $v;
		} elseif (is_string($v)) {
			return unicode($v);
		} else {
			return $v;
		}
	}

	/**
	 * @param $str
	 * @return string
	 */
	function unicode($str)
	{
		return encodeCharset($str, "utf-8");
	}

	/**
	 * @param $str
	 * @param $charset
	 * @return string
	 */
	function encodeCharset($str, $charset)
	{
		return @iconv(mb_detect_encoding($str, array("ASCII", 'UTF-8', "GB2312", "GBK", "BIG5")), $charset, $str);
	}
}

if (!function_exists('extractProps')) {
	/**
	 * 提取参数
	 * @param {array} $arrOri 被提取的map
	 * @param {array} $propKeys array or map
	 * @return array|null 返回提取后的参数数组
	 */
	function extractProps($arrOri, $propKeys)
	{
		$hasTarget = false;

		$res = array();
		foreach ($propKeys as $key => $val) {
			if (is_callable($val)) {
				$arrRes = $val($arrOri[$key], $arrOri);
				if ($arrRes && !empty($arrRes)) {
					$res = array_merge($res, $arrRes);
				}
			} else {
				$keyOriRel = is_numeric($key) ? $val : $key;

				$valOri = $arrOri[$keyOriRel];

				if (isset($valOri) && $valOri !== 'NULL' && $valOri !== '') {
					$hasTarget = true;
					$res[$val] = $valOri;
				}
			}
		}

		if ($hasTarget) {
			return $res;
		} else {
			return false;
		}
	}
}

?>
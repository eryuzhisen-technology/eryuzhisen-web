<?php
/*
[2015-08-19 14:12:34] 15434 #PER# TimeStat---SubCall:func=[CreateDeal] sub_func=[CheckBaseInput] time_cost=[0]

[2015-08-19 14:12:34] 15434 #PER# TimeStat---SubCall:func=[CreateDeal] sub_func=[CheckDealInfo] time_cost=[2]

[2015-08-19 14:12:34] 15434 #PER# TimeStat---SubCall:func=[CreateDeal] sub_func=[GetFunds] time_cost=[9]

[2015-08-19 14:12:34] 15434 #PER# TimeStat---SubCall:func=[CreateDeal] sub_func=[GenDealNo] time_cost=[0]

[2015-08-19 14:12:34] 15434 #PER# TimeStat---SubCall:func=[CreateDeal] sub_func=[CheckRisk] time_cost=[7]

[2015-08-19 14:12:34] 15434 #PER# TimeStat---SubCall:func=[CreateDeal] sub_func=[GenDealContent] time_cost=[0]

[2015-08-19 14:12:34] 15434 #PER# TimeStat---SubCall:func=[CreateDeal] sub_func=[InsertDeal] time_cost=[1]

[2015-08-19 14:12:34] 15434 #PER# TimeStat---SubCall:func=[CreateDeal] sub_func=[CutFunds] time_cost=[20]

[2015-08-19 14:12:34] 15434 #PER# TimeStat---SubCall:func=[CreateDeal] sub_func=[UpdateDeal] time_cost=[1]

[2015-08-19 14:12:34] 15434 #PER# TimeStat---SubCall:func=[CreateDeal] sub_func=[InsertDeal] time_cost=[1]

[2015-08-19 14:12:34] 15434 #PER# TimeStat---TOTAL:func=[CreateDeal] time_cost=[47]

 */
class timeStat{
	private $mod;
	private $dif;
	private $msg = array();
	private $start;
	public function __construct($mod){
		$this->dif = $this->microtime_float();
		$this->mod = $mod;
		$this->start = $this->dif;
		require_once APPPATH ."models/dcagent_model.php";
	}

	private function microtime_float(){
        list($usec, $sec) = explode(" ", microtime());
        return ((float)$usec + (float)$sec);
    }

    public function process($fun){
    	$time = date("Y-m-d H:i:s");
    	$dif = $this->getDif();
    	array_push($this->msg,"[{$time}] 15434 #PER# TimeStat---SubCall:func=[{$this->mod}] sub_func=[{$fun}] time_cost=[{$dif}]");
    }

    private function getDif($isEnd = false){
    	$now = $this->microtime_float();
    	$pos = $isEnd?$this->start:$this->dif;
    	$dif = intval(($now - $pos)*1000);
    	$this->dif = $now;
    	return $dif;
    }

	public function end(){
		$time = date("Y-m-d H:i:s");
    	$dif = $this->getDif(true);
    	$this->msg[] = "[{$time}] 15434 #PER# TimeStat---TOTAL:func=[{$this->mod}] time_cost=[{$dif}]";

    	$dc = new Dcagent_model();
    	$msg = serialize($this->msg);

    	$uins = array("wcp_qluin",'luin','uin');
    	$uin = "";
    	foreach ($uins as $value) {
    		$tmp = $this->getCookie($value);
    		if($tmp){
    			$uin = $tmp;
    			break;
    		}
    	}

    	$dc->report("PHP_CGI",$msg,$dif,$uin,$this->mod);
	}

	private function getCookie($name){
		return isset($_COOKIE[$name])?$_COOKIE[$name]:"";
	}
}
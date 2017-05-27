<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

class UnitList extends MY_Controller{
	public function __construct(){
		parent::__construct();
		$this->load->helper('file');
		$this->load->helper('html');
	}

	public function index(){
		// 读取unit文件
		$unit = get_filenames('../static/cmp/seeker/unit/');

		foreach ($unit as $key => $value) {
			if (preg_match('/.html$/', $value)) {
				preg_match('/^unit\.(.+)\.html/', $value, $arr);
				$data['file'][] = $arr[1];
			}
		}
		$this->load->view('seeker/unitList.html', $data);
	}
}




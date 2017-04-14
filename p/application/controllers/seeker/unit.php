<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

class Unit extends MY_Controller{
	public function __construct(){
		parent::__construct();
	}

	public function index(){
		$file_name = $this->getPostXSS('f') ? $this->getPostXSS('f') : '';

		$cmp = file_get_contents('../static/cmp/seeker/unit/unit.'.$file_name.'.html');
		$cmp = str_replace('//<script', '<script', $cmp);
		$cmp = str_replace('//</script', '</script', $cmp);

		$data['file'] = $file_name;
		$data['cmp_data'] = $cmp;
		$data['cmp_name'] = ucfirst($file_name);

		$this->load->view('seeker/unit.html', $data);
	}
}




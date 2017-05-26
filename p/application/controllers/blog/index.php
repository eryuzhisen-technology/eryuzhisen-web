<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

class Festival extends MY_Controller{
	public function __construct(){
		parent::__construct();
	}

	public function index(){
		$file_name = $this->getPostXSS('f') ? $this->getPostXSS('f') : 'index.html';

		$data['vision'] = 7.4;
		$data['userfile'] = '/Userfile/festival/';
		$data['path'] = '/view/festival/'.$file_name.'/';
		$data['path_image'] = '/view/festival/'.$file_name.'/images/';
		$data['path_media'] = '/view/festival/'.$file_name.'/media/';
		$this->load->view('festival/'.$file_name.'/index.html', $data);
	}
}




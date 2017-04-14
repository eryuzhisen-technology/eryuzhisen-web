<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

class Page extends MY_Controller{
	public function __construct(){
		parent::__construct();
	}

	public function index(){
		$path = '../src/view/';
		$data = array();
		$data['files'] = array();

		foreach (scandir($path) as $file) {
			if ($file == '.' || $file == '..' || $file == '.svn' || $file == 'tmp' || strpos($file, '-base') !== false) continue; 
			if (is_dir($path.'/'.$file)) { 
				foreach (scandir($path.'/'.$file) as $_file) {
					if ($_file == '.' || $_file == '..' || $_file == '.svn' || $_file == 'tmp' || strpos($_file, '-base') !== false) continue; 
					if (strpos($_file, 'html') && strpos($_file, 'page') === false) {
						$_name = str_replace('.html', '', $_file);
						$data['files'][$_name] = $_file;
					}
				}
			} else { 
				if (strpos($file, 'html') && strpos($file, 'page') === false) {
					$name = str_replace('.html', '', $file);
					$data['files'][$name] = $file;
				}
			}
		}

		$this->load->view('../page.html', $data);
	}
}




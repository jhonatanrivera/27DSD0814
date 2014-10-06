<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Usuario extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -  
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in 
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see http://codeigniter.com/user_guide/general/urls.html
	 */

	public function index()
	{
		
		$this->load->library('form_validation');
		$this->load->helper('form');
		$data['className'] = $this->router->fetch_class();
		$data['main_content'] = 'app/v_usuario';



		$this->form_validation->set_rules('DNI', 'DNI', 'required');
		$this->form_validation->set_rules('NOMBRES', 'Nombres', 'required');
		$this->form_validation->set_rules('AP_PATERNO', 'Ap. PAterno', 'required');
		$this->form_validation->set_rules('AP_MATERNO', 'Ap. Materno', 'required');
		$this->form_validation->set_rules('EMAIL', 'EMAIL', 'required');


		if ($this->form_validation->run() == FALSE)
		{
			$this->load->view('_template/main',$data);
		}
		else
		{
			if (!$this->checkDNI($this->input->post('DNI'))) {
				if($this->guardar()){
					$data['msg'] = array('title'=>'EXITOSO','msg'=>'Se insertó satisfacoriamente','type'=>'success');
				}else{
					$data['msg'] = array('title'=>'ERROR','msg'=>'No se pudo registrar, vuelva a intentarlo','type'=>'warning');
				}				
			}else
				$data['msg'] = array('title'=>'ERROR','msg'=>'Existe usuario registrado  con DNI:'.$this->input->post('DNI'),'type'=>'warning');

			$this->load->view('_template/main',$data);
		}
	}


	private function guardar()
	{
			$this->load->model('app/tienda_model');
			$this->load->model('app/usuario_model');
			$data['main_content'] = 'app/v_message';
			$fieldsName = $this->tienda_model->getFieldsName('usuario');
			$dataModel = array();
			foreach ($fieldsName as $key => $value) {
				if(!in_array($value, array('COD_USUARIO','FE_REGISTRO'))){
					$dataModel[$value] = ($this->input->post($value) != "") ? ($this->input->post($value)) : NULL;
				}
			}
			$result = $this->usuario_model->guardar($dataModel);
			if ($result) 
				return true;
			else
				return false;
	}

	private function checkDNI($dni)
	{
		$this->load->model('app/usuario_model');
		return $this->usuario_model->checkExistRow('usuario',array('DNI'=> $dni));
	}
}

/* End of file welcome.php */
/* Location: ./application/controllers/app/arma.php */
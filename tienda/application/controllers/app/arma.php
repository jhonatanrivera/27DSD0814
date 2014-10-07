<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Arma extends CI_Controller {

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
	function __construct()
	{
		parent::__construct();

		$this->load->helper(array('form', 'url'));
		$this->load->model('app/arma_model');
	}

	public function index()
	{

		$this->load->model('app/usuario_model');
		$data['className'] = $this->router->fetch_class();

		$data['armas'] = $this->arma_model->getArmas();
		$data['usuarios'] = $this->usuario_model->get();
		$data['main_content'] = 'app/v_arma';
		$this->load->view('_template/main',$data);
	}
	public function venta()
	{
		if ($this->input->is_ajax_request()) { 
			if ($this->checkArma($this->input->post('MODELO'))) {
				$serie = $this->arma_model->getSerie($this->input->post('MODELO'));
				if ($serie != FALSE) {
					$dataModel = array();
					$dataModel['COD_REGISTRO'] = '100'.$serie;
					$dataModel['SERIE_ARMA'] = $serie;
					$dataModel['COD_USUARIO'] = $this->input->post('COD_USUARIO');
					$dataModel['TIPO_PAGO'] = $this->input->post('TIPO_PAGO');
					if ($this->arma_model->guardarVenta($dataModel)) {
						echo json_encode(array('msg' => 'Exitoso'));
					}else{
					 	echo json_encode(array('msg' => 'No se guardo')); 
					 }
				}else{
					echo json_encode(array('msg' => 'No existe arma en stock'));
				}
			}else{
				echo json_encode(array('msg' => 'No existe arma con el modelo'));
			}
		}else
			echo 'nada';
	}

	private function checkArma($modelo)
	{
			return $this->arma_model->checkExistRow(array('MODELO'=>$modelo));
	}

	function entrega()
	{
		$data['className'] = $this->router->fetch_method();
		$data['main_content'] = 'app/v_arma_entrega';
		$TYPE = $this->input->post('TYPE');
		$FIND = $this->input->post('FIND');
		$data['ventas'] = NULL;
		if( $TYPE || $TYPE != 'none'){
			$data['FIND'] = $FIND;
			if ($TYPE == 'CODIGO') {
				$data['ventas'] = $this->arma_model->getVenta(array('COD_REGISTRO' => $FIND));
			}else if($TYPE == 'DNI'){
				$data['ventas'] = $this->arma_model->getVenta(array('DNI' => $FIND));
			}else if($TYPE == 'PENDIENTES'){
				$data['ventas'] = $this->arma_model->getVenta(array('venta.ESTADO' => 1));
			}else if($TYPE == 'ENTREGADOS'){
				$data['ventas'] = $this->arma_model->getVenta(array('venta.ESTADO' => 3));
			}else if($TYPE == 'RECHAZADOS'){
				$data['ventas'] = $this->arma_model->getVenta(array('venta.ESTADO' => 2));
			}else if($TYPE == 'TODOS'){
				$data['ventas'] = $this->arma_model->getVenta();
			}else{
				$data['FIND'] = '';
			}
			if (is_array($data['ventas']) && count($data['ventas']) == 0) {
				$data['FIND'] = 'No existe registros';
			}
		}


		$this->load->view('_template/main',$data);		
	}
}

/* End of file welcome.php */
/* Location: ./application/controllers/app/arma.php */
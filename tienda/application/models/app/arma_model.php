<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');
/**
* 
*/
class Arma_model extends CI_Model
{
	
	private $table = 'arma';


	function checkExistRow($where)
	{
		if (is_array($where)) {
			foreach ($where as $key => $value) {
				$this->db->where($key,$value);
			}
			$q = $this->db->get($this->table);
			if ($q->num_rows() >= 1) {
				return TRUE;
			}else{
				return FALSE;
			}
		}
	}
	function updateRow($table,$data,$where)
	{
		foreach ($where as $key => $value) {
			$this->db->where($key,$value);
		}
		$q = $this->db->update($table,$data);
		return $this->db->affected_rows();
	}

	function guardar($data)
	{
		$this->db->insert($this->table,$data);
		return $this->db->affected_rows();
	}

	function getArmas()
	{
		$sql = 'SELECT MARCA, CARACTERISTICAS, PRECIO, MODELO, COUNT(MODELO) STOCK, URL_IMAGEN FROM arma WHERE ESTADO = 1 GROUP BY MODELO';
		$r = $this->db->query($sql);
		if ($r->num_rows()>=1) {
			return $r->result();
		}
		return array();
	}
	function getSerie($modelo)
	{
		$this->db->select('SERIE_ARMA');
		$this->db->where('MODELO',$modelo);
		$this->db->where('ESTADO',1);
		$this->db->limit(1);
		$q = $this->db->get($this->table);
		if ($q->num_rows() == 1) {
			return $q->row('SERIE_ARMA');
		}else
			return FALSE;
	}
	function guardarVenta($data)
	{
		$this->db->insert('venta',$data);
		if($this->db->affected_rows()){
			$this->db->set('ESTADO',2);//vendido
			$this->db->where('SERIE_ARMA',$data['SERIE_ARMA']);
			$this->db->update($this->table);
			if ($this->db->affected_rows() ==1){
				return TRUE;
			}else{
				return FALSE;
			}
		}else
			return FALSE;
	}

	function getVenta($data = NULL, $join = NULL)
	{
		if (is_array($data)) {
			foreach ($data as $key => $value) {
				$this->db->where($key,$value);
			}
		}
		if (!is_null($join)) {
			if ($join == 'DNI') {
				$this->db->from('venta');
				$this->db->join('USUARIO','USUARIO.COD_USUARIO = venta.COD_USUARIO');
				$q = $this->db->get();
			}
		}else{
			$q = $this->db->get('venta');
		}
		if ($q->num_rows() >= 1) {
			return $q->result();
		}else{
			return array();
		}
	}
}





?>
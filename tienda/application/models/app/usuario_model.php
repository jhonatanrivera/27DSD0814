<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');
/**
* 
*/
class Usuario_model extends CI_Model
{
	
	private $table = 'usuario';


	function checkExistRow($table,$where)
	{
		if (is_array($where)) {
			foreach ($where as $key => $value) {
				$this->db->where($key,$value);
			}
			$q = $this->db->get($table);
			if ($q->num_rows() >= 1) {
				return TRUE;
			}else{
				return FALSE;
			}
		}
	}
	function get()
	{
		
		$this->db->select('COD_USUARIO,DNI,NOMBRES,AP_PATERNO,AP_MATERNO');
		$q = $this->db->get($this->table);
		$qq = array();
		if ($q->num_rows()>=1) {
			foreach ($q->result() as $value) {
				$qq[$value->COD_USUARIO] = $value->DNI.' | '. $value->NOMBRES.' '.$value->AP_PATERNO.' '.$value->AP_MATERNO;
			}
			return $qq;
		}else
			return array();
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

	function selectRows($table,$fields = NULL,$where = NULL)
	{
		if (is_array($fields)) {
			$cadenaField = implode(',', $fields);
			$this->db->select($cadenaField);
		}		
		if (is_array($where)) {
			foreach ($where as $key => $value) {
				$this->db->where($key,$value);
			}			
		}
		$q = $this->db->get($table);
		if ($q->num_rows()==1) {
			$qq = $q->result();
			return $qq[0];
		}else if ($q->num_rows()>1) {
			return $q->result();
		}else{
			return array();
		}
	}
}





?>
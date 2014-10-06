<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');
/**
* 
*/
class Tienda_model extends CI_Model
{
	
	 function getFieldsName($table)
	{
		$q = $this->db->list_fields($table);
		return $q;
	}
	function existeCodigo($dataFind)
	{
		if (is_array($dataFind)){
			foreach ($dataFind as $key => $value) {
				$this->db->where($key,$value);
			}			
		}else{
			$this->db->where('Cod_Vivienda',$dataFind);
		}

		$q = $this->db->get('PadVivienda');
		if ($q->num_rows() == 1) {
			return $q->result();
		}else{
			return NULL;
		}
		
	}



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
	function updateRow($table,$data,$where)
	{
		foreach ($where as $key => $value) {
			$this->db->where($key,$value);
		}
		$q = $this->db->update($table,$data);
		return $this->db->affected_rows();
	}

	function insertRow($table,$data)
	{
		$this->db->insert($table,$data);
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
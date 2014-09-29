<?php
if (!defined( 'BASEPATH')) exit('No direct script access allowed'); 
class Check_login
{
    private $ci;
    public function __construct()
    {
        $this->ci =& get_instance();
        !$this->ci->load->library('session') ? $this->ci->load->library('session') : false;
        !$this->ci->load->helper('url') ? $this->ci->load->helper('url') : false;
    }    
 
    public function check_login()
    {
        if($this->ci->session->userdata('tienda_user_id') == FALSE && $this->ci->router->fetch_method() != 'login')
        {
            redirect('login');
        }
    }
}
/*
/end hooks/home.php
*/
<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Account extends CI_Controller {
    
    public function __construct() {
        parent::__construct();
    }
    
    public function login() {
        $error = false;
        
        $username = $this->input->post('username');
        $password = $this->input->post('password');
        
        if(empty($username) || empty($password)) {
            $error = true;
        }
        
        if($error) {
            $this->load->view('error/missing_data');
            return;
        }
        
        if($this->Users->login($username, $password)) {
            // success; return JSON
        } else {
            // error; return JSON
        }
    }
    
    public function register() {
        $error = false;
        
        $username = $this->input->post('username');
        $password = $this->input->post('password');
        $email = $this->input->post('email');
        
        if(empty($username) || empty($password) || empty($email)) {
            $error = true;
        }
        
        if($error) {
            $this->load->view('error/missing_data');
            return;
        }
        
        $userArray = array(
        'username'  => $username,
        'password'  => $password,
        'email'     => $email
        );
        
        if($this->Users->register($userArray)) {
            // success; return JSON
        } else {
            // error registering user; return JSON
        }
        
        $this->load->view('account/register', $data);
    }
}
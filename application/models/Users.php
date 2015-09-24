<?php

class Users extends CI_Model {
    
    public __construct() {
        parent::__construct();
    }
    
    public function register(array $user) {
        
        for($i = 0; $i < count($user); $i++) {
            if(empty($user[$i])) {
                return false;
            }
        }
        
        $username = $user['username'];
        $password = $user['password'];
        $email = $user['email'];
        
        $this->db->where('')
    }
    
    public function login($username, $password) {
        if(empty($username)) return false;
        if(empty($password)) return false;
        
    }
    
    public function __generate() {
        
    }
}
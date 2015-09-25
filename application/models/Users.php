<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Users extends CI_Model {
    
    public function __construct() {
        parent::__construct();
    }
    
    public function register(array $user) {
        
        for($i = 0; $i < count($user); $i++) {
            if(empty($user[$i])) {
                return false; //cancel regisration
            }
        }
        
        $username = $user['username'];
        $password = $user['password'];
        $email = $user['email'];
        
        $this->db->where('username', $username);
        $this->db->where('email', $email);
        
        $possibleRecords = $this->db->get('users');
        
        if($possibleRecords->num_rows() > 0) {
            // Username or email exists.. cancel registration
            return false;
        } else {
            // create the user
            $userArray = array(
            'username'  => $user['username'],
            'password'  => hash('sha256', $user['password']),
            'email'     => $user['email']
            );
            
            if($this->db->insert('users', $userArray)) {
                // user was added to database successfully
                return true;
            } else {
                return false;
            }
        }
    }
    
    public function login($username, $password) {
        if(empty($username)) return false; // cancel login.. username not supplied
        if(empty($password)) return false; // cancel login.. password not supplied 
        
        $passwordHashed = hash('sha256', $password);
        
        $this->db->where('password', $passwordHashed);
        $this->db->where('username', $username);
        $this->db->_or_where('email', $username);
        
        $possibleRecords = $this->db->get('users');
        
        if($possibleRecords->num_rows() > 0) {
            // username/email and password exist.. proceed
            return true;
        } else {
            return false;
        }
    }
    
    public function __generate() {
        
    }
}
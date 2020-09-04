<?php
 
  require_once 'DB.php'  ; 

class UserDB extends DB  
{
     public function __construct()
    {
       parent:: __construct();  
    }

 public function add(User $user)
    {
        
		$sql="INSERT INTO `user`(`id`, `nom`, `prenom`, `email`, `password` ) 
		VALUES (NUll,'". $user->getNom()."','". $user->getPrenom()."','". $user->getEmail()."','". $user->getPassword()."')";
      
       return  $this->db->exec($sql);
    }
	 public function update(User $user)
    {
       $sql="UPDATE user SET nom ='". $user->getNom()."',prenom='". $user->getPrenom()."',email='". $user->getEmail()."',password='". $user->getPassword()."',status='". $user->getStatus()."')
	   where id='". $user->getId()."'
	   ";
       return  $this->db->exec($sql);
    }
 public function get($id)
    {
		$sql="SELECT `id`, `nom`, `prenom`, `email`, `password`, `status` FROM `user` WHERE  `id`='". $id."'";
        return  $this->db->prepare($sql)->fetch();
    }
 public function getall()
    {
      $sql="SELECT `id`, `nom`, `prenom`, `email`, `password` FROM `user` ";
      return  $this->db->query($sql)->fetchAll();
    }
}

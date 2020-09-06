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
       $sql="UPDATE user SET nom ='". $user->getNom()."',prenom='". $user->getPrenom()."',email='". $user->getEmail()."',password='". $user->getPassword()."'
	   where id='". $user->getId()."'
	   ";
       return  $this->db->exec($sql);
    }
 public function get($id)
    {
      $sql="SELECT * FROM `user` WHERE  `id`='". $id."'";
 
        return  $this->db->query($sql)->fetch();
    }
 public function getall()
    {
      $sql="SELECT * FROM `user` ";
      return  $this->db->query($sql)->fetchAll();
    }
    public function delete($id)
    {
      $sql="delete  FROM `user` WHERE  `id`='". $id."'";
 
      return  $this->db->exec($sql);
    }
}

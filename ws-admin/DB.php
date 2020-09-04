<?php

class DB
{
	protected $db;
	public function __construct()
    {
       $this->getConnection();
    }
    //Méthode de connexion à notre base de données
    public function getConnection()
    {
      
       $usermysql=   "root";
       $passwordmysql   = "";
       $dbnamemysql   = "wsadmindb";
       $hostmysql="localhost"; 
	   $dns='mysql:host=localhost;dbname=wsadmindb;';
        //Tentative de connexion à la base de données
        try{
        $this->db = new PDO($dns,$usermysql,$passwordmysql);
        }
        //On lève une erreur si la connexion échoue
         catch(PDOException  $e)
        {
            die ('Erreur de connection :'.$e->getMessage());
        }

    }
}

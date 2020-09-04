<?php
 header("Access-Control-Allow-Origin: *");
 header("Access-Control-Allow-Headers: Origin,Content-type");
  header("Content-type: Application/json");
  require_once 'DB.php'; 
  require_once 'user.php'; 
  require_once 'userDB.php';


 $method=$_SERVER['REQUEST_METHOD'];

 switch($method)
 {
	 case "GET":
		$action=$_GET['action'];
			switch($action)
			{
				case "get":
				$id=$_GET['id'];
				$userdb=new UserDB();
				$user=$userdb->get($id);
				 
				$userArray =array(
					'id'=>$user[0],
					'nom'=>$user[1],
					'prenom'=>$user[2],
					'email'=>$user[3],
					'password'=>$user[4],
					'status'=>$user[5] 
					);
				echo json_encode($userArray); 
				break; 
				
				case "delete":
				$id=$_GET['id'];
				$user->setNom($_GET['nom']);
				$user->setPrenom($_GET['prenom']);
				$user->setEmail($_GET['email']);
				$user->setPassword($_GET['password']);
				$user->setStatus($_GET['status']);
				$resultat=$userdb->add($user);
				$resultat=$userdb->delete($id);
				echo json_encode(array('result'=> $resultat));
				break;
				
				case "update":
				$id=$_GET['id'];
				$userdb=new UserDB();
				$user=new User();
				$user->setId($_GET['id']);
				$user->setNom($_GET['nom']);
				$user->setPrenom($_GET['prenom']);
				$user->setEmail($_GET['email']);
				$user->setPassword($_GET['password']);
				$user->setStatus($_GET['status']);
				$resultat=$userdb->update($user);
				break;

				case "getall":
				$userdb=new UserDB();
				$users=$userdb->getall();
				$userArray=array();
				foreach($users as $user){
					$userArray[]=array(
					'id'=>$user[0] ,
					'nom'=>$user[1],
					'prenom'=>$user[2]  ,
					'email'=>$user[3],
					'password'=>$user[4],
					 
					);
				}
				
				echo json_encode($userArray);
				break;
				
		}
	break;
		 
		  case "POST":
			
		  $userdb=new UserDB();
		
		  $user=new User();
  
		  $user->setNom($_GET['nom']);
		  $user->setPrenom($_GET['prenom']);
		  $user->setEmail($_GET['email']);
		  $user->setPassword($_GET['password']);
		 /* $user->setStatus($_GET['status']);*/
		  $resultat= $userdb->add($user) ;
            echo json_encode(array('result'=>$resultat));
		 break;

 }	 

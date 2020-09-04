<?php

 
class User  
{

    private $id;

    private $nom;
	
	  private $prenom;
 
    private $email;

    private $password;
  
    private $status;
    
   public function getId(): string
    {
        return (string) $this->id;
    }
    public function getNom(): string
    {
        return (string) $this->nom;
    }

    public function setNom(string $nom): self
    {
        $this->nom = $nom;

        return $this;
    }
	  public function getPrenom(): string
    {
        return (string) $this->prenom;
    }

    public function setPrenom(string $prenom): self
    {
        $this->prenom = $prenom;

        return $this;
    }
    public function getStatus(): string
    {
        return (string) $this->status;
    }

    public function setStatus(string $status): self
    {
        $this->status = $status;

        return $this;
    }
	
    function getEmail() {
        return $this->email;
    } 

    function setEmail($email) {
        $this->email = $email;
    }

    /**
     * @see UserInterface
     */
    public function getPassword(): string
    {
        return (string) $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

     




}


import React from 'react';

export default class ListeUser extends React.Component
{
  
  constructor(props) {
    super(props);
    this.state = { 
       listeUsers:[]
    };
  }
    componentDidMount(){
      fetch("http://localhost/React/ws-admin/wsUser.php?action=getall") 
      .then(result=>result.json())
      .then(result=>{
            this.setState({
              listeUsers: result  
      }); 
     // console.log(result);
    });
  }
  render(){
    return(
   
      <table className="table table-bordered table-striped">  
      <thead>
          <tr>
              <th>Nom </th>
              <th>Prenom</th>
              <th>Email</th>
              <th>Actions</th>
              <th>Actions</th>
          </tr>
      </thead>
      <tbody>
      { 
      this.state.listeUsers.map(function(user){
        return(
          <tr>
              <td>{user.nom}</td>
              <td>{ user.prenom}</td>
              <td>{ user.email}</td>
              <td>
                  <a  href={"/user/get"+user.id}>Modifier</a>
              </td>
              <td> <a  href={"/user/delete"+user.id}>Supprimer</a></td>
          </tr>
        )
      })
    }
      </tbody>
  </table>

    )
  }
   
}


import React from 'react';

export default class EditUser extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = { 
            id: '' ,
            nom: '' ,
            prenom: '' ,
            email: '' ,
            password: '' ,
            /*status: '' ,*/
            resultat : 0 ,
        };
        this.handleChangeNom = this.handleChangeNom.bind(this);
        this.handleChangePrenom = this.handleChangePrenom.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        /*this.handleChangeStatus = this.handleChangeStatus.bind(this);*/
        this.handleUpdate = this.handleUpdate.bind(this);

       } 
       handleChangeNom(event) {
           this.setState({
              nom:  event.target.value
           });
       }
       handleChangePrenom(event) {
        this.setState({
           prenom:  event.target.value
        });
    }
    handleChangeStatus(event) {
        this.setState({
           status:  event.target.value
        });
    }

    handleChangeEmail(event) {
        this.setState({
           email:  event.target.value
        });
    }
    handleChangePassword(event) {
        this.setState({
           password:  event.target.value
        });
    }
    componentDidMount() {
        fetch("http://localhost/React/ws-admin/wsUser.php?action=get&id="+this.props.match.params.id) 
        .then(result=>result.json())
        .then(result=>{
              this.setState({
                  id:result.id ,
                nom: result.prenom , 
                prenom: result.nom ,
                email: result.email ,
                password: result.password ,  
               
        }); 
        console.log(result);
      });
    }
    handleUpdate(event) {
          event.preventDefault();
          fetch("http://localhost/React/ws-admin/wsUser.php?action=update&id="+this.state.id+"&nom="+this.state.nom+"&prenom="+this.state.prenom+"&email="+this.state.email+"&password="+this.state.password) 
          .then(result=>result.json())
          .then(result=>{
                this.setState({
                    id:'',
                    nom: '' , 
                    prenom: '' , 
                    email: '' , 
                    password: '' , 

                resultat: result ,  
               
          });
          //console.log(result);
        });    
    }
    

       render(){
        return(
         <form onSubmit={this.handleUpdate}>
               
        <div className="form-group">
        <label htmlFor="exampleInputEmail1">nom </label>
         <input type="text" name="nom" onChange={this.handleChangeNom} value={this.state.nom} className="form-control" id="nom" aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>
        <div className="form-group">
        <label htmlFor="exampleInputEmail1">prenom</label>
         <input type="text" name="prenom" onChange={this.handleChangePrenom} value={this.state.prenom} className="form-control" id="prenom" aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>    
        <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
         <input type="text" name="email" onChange={this.handleChangeEmail} value={this.state.email} className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>
        <div className="form-group">
             <label htmlFor="exampleInputPassword1">Password</label>
             <input type="password" name="password" onChange={this.handleChangePassword} value={this.state.password} className="form-control" id="password" placeholder="Password"/>
        </div>
       
         <button type="submit" className="btn btn-primary">Submit</button>
       
         </form>
 
        )
      }

}
 
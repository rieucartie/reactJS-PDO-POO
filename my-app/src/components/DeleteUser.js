 
import React from 'react';
export default class DeleteUser extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            listeUsers:[]
        }
    }  
    componentDidMount() {
        fetch("http://localhost/React/ws-admin/wsUser.php?action=delete&id="+this.props.match.params.id) 
        .then(result=>result.json())
        .then(result=>{
              this.setState({
                listeUser: result 
               
        }); 
      });
    }
   

       render(){
        return(
            null
        )
      }
}

 
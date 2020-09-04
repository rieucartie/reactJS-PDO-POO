 

import React from 'react';

export default class ListeUser extends React.Component{

    render() {
        return (
          <form>
            <input placeholder="name" type="name" />
            <input placeholder="email" type="email" />
            <button onClick={this.onSubmit}>Submit</button>
          </form>
        )
      }
 
}

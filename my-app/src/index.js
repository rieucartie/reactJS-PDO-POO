import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import DeleteUser from './components/DeleteUser';
import ListeUser from './components/ListeUser';

const routing = (
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route path="/edit/:id" component={EditUser} />
      <Route path="/add" component={AddUser} />
      <Route path="/delete/:id" component={DeleteUser} />
      <Route path="/users" component={ListeUser} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'));
 
serviceWorker.unregister();

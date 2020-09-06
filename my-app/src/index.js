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
      <Route path="/user/get/:id" component={EditUser} />
      <Route path="/user/ajout" component={AddUser} />
      <Route path="/user/delete/:id" component={DeleteUser} />
      <Route path="/user/liste" component={ListeUser} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'));
 
serviceWorker.unregister();

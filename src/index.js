import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavBar from './components/Navbar/navbar';
import About from './components/About/about_me';
import App from './components/App/app'
import reducers from './reducers';



const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <NavBar />
        <Switch>
          <Route path="/portfolio" component={App} />
          <Route path="/" component={About} />
        </Switch>
      </div>  
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
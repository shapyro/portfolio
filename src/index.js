import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavBar from './components/Navbar/navbar';
import About from './components/About/about_me';
import App from './components/App/app'
import reducers from './reducers';

// import backImg from './data/images/bananas.png'

// const backStyle = {
//   backgroundImage: `url(${backImg})`
// }


const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    {/* <div>
      <NavBar />
    </div> */}

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
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar/navbar'
// import About from './components/About/about_me'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {/* <About /> */}
      </div>
    )
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));
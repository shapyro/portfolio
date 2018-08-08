import React, { Component } from 'react';
// import Navbar from '../../components/Navbar/navbar'
import ProjectList from '../../containers/ProjectList/project_list';
import ProjectDetail from '../../containers/ProjectDetail/project_detail';
// import About from '../../components/About/about_me'
import './app.css'
// import backImg from '../../data/images/bananas.png'

// const backStyle = {
//   backgroundImage: `url(${backImg})`
// }

export default class App extends Component {
  render() {
    return (
      <div className="project-container">
        <ProjectList />
        <ProjectDetail />
      </div>
    )
  }
}

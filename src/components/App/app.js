import React, { Component } from 'react';
import ProjectList from '../../containers/ProjectList/project_list';
import ProjectDetail from '../../containers/ProjectDetail/project_detail';
import './app.css'

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

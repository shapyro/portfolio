import React, { Component } from 'react';
import { connect } from 'react-redux';

import './project_detail.css'

class ProjectDetail extends Component {
  handleClick = (e) => {
    e.preventDefault();
    if (e.target.id === 'projectLink') {
      window.open(e.target.alt,'_blank')
    } 
  }


  render() {
    if (!this.props.project) {
      return <div>Select a Project</div>
    }

    return (
      <div className="project-details">
        <h3>{this.props.project.name}</h3>
        <div>{this.props.project.description}</div>
        <div className="image">
          <img 
            className="project-image"
            id='projectLink'
            src={this.props.project.image}
            alt={this.props.project.site}
            onClick={this.handleClick}
          />
        </div>
        <div>Tech Used: {this.props.project.techUsed}</div>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    project: state.activeProject
  }
}

export default connect(mapStateToProps)(ProjectDetail);
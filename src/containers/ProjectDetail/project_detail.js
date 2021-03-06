import React, { Component } from 'react';
import { connect } from 'react-redux';

import './project_detail.css';

class ProjectDetail extends Component {
  renderTechUsed() {
    return this.props.project.techUsed.map(tech => {
      return (
        <li key={tech} className="techName">
          {tech}
        </li>
      );
    });
  }

  render() {
    if (!this.props.project) {
      return <div className="select-project">Select a Project</div>;
    }

    return (
      <div className="project-details">
        <h3>{this.props.project.name}</h3>
        <div className="description">{this.props.project.description}</div>
        <div className="image-holder">
          <img
            className="project-image"
            id="projectLink"
            src={this.props.project.image}
            alt={this.props.project.site}
            onClick={this.handleClick}
          />
        </div>
        <ul className="tech-list">{this.renderTechUsed()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    project: state.activeProject
  };
}

export default connect(mapStateToProps)(ProjectDetail);

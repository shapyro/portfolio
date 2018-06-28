import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProjectDetail extends Component {
  render() {
    if (!this.props.project) {
      return <div>Select a Project</div>
    }

    return (
      <div>
        <h3>Project Details:</h3>
        <div>Name: {this.props.project.name}</div>
        <div>Description: {this.props.project.description}</div>
        <div>Site: {this.props.project.site}</div>
        <div>Img: {this.props.project.image}</div>
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
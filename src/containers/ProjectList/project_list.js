import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectProject } from '../../actions/index';
import { bindActionCreators } from 'redux';

class ProjectList extends Component {
  renderList() {
    return this.props.projects.map((project) => {
      return (
        <li
          key={project.name}
          onClick={() => this.props.selectProject(project)}
          className="list-group-item">
          {project.name}
        </li>
      )
    })
  }

  render() {
    return (
      <ul className="list-group">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    projects: state.projects
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectProject: selectProject}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
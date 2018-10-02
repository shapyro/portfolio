import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProjectImage from '../ProjectImage/project_image';

import './project_detail.css';

// function imageLoaded(parentNode) {
//   // console.log(parentNode);
//   const img = parentNode.querySelector('img');
//   // console.log('img: ' + img.src);
//   // console.log('img: ' + img.complete);
//   if (!img.complete) {
//     console.log('not done yet');
//     return false;
//   }

//   console.log('imageLoaded');
//   return true;
// }

class ProjectDetail extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     loading: true
  //   };
  // }

  // componentDidUpdate() {
  //   console.log('component updated');
  // }

  // handleImageChange = e => {
  //   e.preventDefault();
  //   // console.log(e);
  //   // console.log(this.imageElement);
  //   this.setState({
  //     loading: !imageLoaded(this.imageElement)
  //   });
  // };

  // renderSpinner() {
  //   if (!this.state.loading) {
  //     return null;
  //   }
  //   return <span className="spinner">spinner</span>;
  // }

  // renderImage(image) {
  //   // console.log('rendering image');
  //   return (
  //     <div>
  //       <img
  //         className="project-image"
  //         id="projectLink"
  //         src={image}
  //         alt={this.props.project.site}
  //         onLoad={this.handleImageChange}
  //         onError={this.handleImageChange}
  //         onClick={this.handleClick}
  //       />
  //     </div>
  //   );
  // }

  handleImageStatus(parentNode) {
    console.log(parentNode);
    // const image = imageElement.querySelector('img');
    // console.log(image);
    // if (image.complete) {
    //   console.log('complete');
    // }
  }

  handleClick = e => {
    e.preventDefault();
    console.log(e);
    if (e.target.id === 'projectLink') {
      window.open(e.target.alt, '_blank');
    }
  };

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
        <div
          className="image-holder"
          ref={element => {
            this.imageElement = element;
          }}
        >
          {/* {this.renderSpinner()}
          <div className="image">
            {this.renderImage(this.props.project.image)} */}
          <ProjectImage
            image={this.props.project.image}
            onClick={this.handleClick}
            id="projectLink"
            alt={this.props.project.site}
          />
          {/* <img
            className="project-image"
            id="projectLink"
            src={this.props.project.image}
            alt={this.props.project.site}
            onClick={this.handleClick}
            onLoad={this.handleImageStatus(this.imageElement)}
          /> */}
          {/* </div> */}
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

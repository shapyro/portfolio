import React from 'react';
import './project_image.css';

const handleClick = e => {
  e.preventDefault();
  console.log(e);
  if (e.target.id === 'projectLink') {
    window.open(e.target.alt, '_blank');
  }
};

const checkLoad = Element;

const ProjectImage = ({ image, alt, id }) => {
  if (!image) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="dis-image"
      ref={element => {
        this.imageElement = element;
      }}
    >
      {console.log(image)}
      <img src={image} alt={alt} id={id} onClick={handleClick} />
    </div>
  );
};

export default ProjectImage;

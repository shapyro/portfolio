import React, { Component } from 'react';
import './about_me.css';

class About extends Component {
  render() {
    return (
      // some stuff about me
      <div className="about">
        <h3 className="hello">
          Hello, my name is Brandon Shap<span className="long-i">i</span>ro.
        </h3>
        <div className="about-content">
          <div className="line">
            I’m a full stack web developer based in{' '}
            <span className="highlight">Austin, TX.</span>
          </div>

          <div className="line">
            I design and build single-page web applications that can run across
            multiple devices.
          </div>

          <div className="line">
            Whether it’s building an app to manage data, improve a process,
            build your online presence, or just have some fun,{' '}
            <span className="highlight">I can help.</span>
          </div>

          <div className="line">
            CSS, Express, Flexbox, HTML, JavaScript, Mongo, MySQL, Node, React,
            and Redux are some of my specialties.
          </div>

          <div className="line">
            Feel free to reach out if you’d like to talk about a project or get
            in touch:
            <a
              href="mailto:shapiro.brandonf@gmail.com"
              className="highlight email"
            >
              shapiro.brandonf@gmail.com
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default About;

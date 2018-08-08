import React, { Component } from 'react';
import './about_me.css'

class About extends Component {
  render() {
    return (
      <div className="about">
        <h3>Hello, my name is Brandon Shapiro.</h3>
        <div className="about-content">
          <div className="line">I’m a full stack web developer based in <span className="highlight">Austin, TX.</span></div>

          <div className="line">I design and build single-page web applications that can run across multiple devices.</div> 

          <div className="line">
            Whether it’s building an app to manage data, improve a process, build online presence, or just have some fun, I can help.
          </div>

          <div className="line">
            CSS, Express, Flexbox, HTML, JavaScript, Mongo, MySQL, Node, React, and Redux are some of my specialties.
          </div>
            
          <div className="line">
            Feel free to reach out if you’d like to talk about a project or get in touch: 

            <a className="highlight email"> shapiro.brandonf@gmail.com</a>
          </div>

          <div className="line">I am currently available for freelance work.</div>
        </div>
      </div>

    )
  }
}

export default About;
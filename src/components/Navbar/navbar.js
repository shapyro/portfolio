import React, { Component } from 'react';
import GitHub from '../../data/images/GitHub-Mark-64px.png'
import Twitter from '../../data/images/Twitter_Social_Icon_Rounded_Square_Color.png'
import LinkedIn from '../../data/images/In-2C-41px-R.png'
import './navbar.css'

class Navbar extends Component {
  handleClick = (e) => {
    e.preventDefault();
    if (e.target.id) {
      window.open(e.target.alt,'_blank')
    }
  }

  render() {
    return (
      <nav>
        <div className='social'>
          <span id='socials'>
            <img id='github' alt='https://github.com/shapyro' src={GitHub} onClick={this.handleClick}/>
            <img id='twitter' alt='https://twitter.com/shapyro' src={Twitter} onClick={this.handleClick}/>
            <img id='linkedin' alt='https://www.linkedin.com/in/brandonshapiro/' src={LinkedIn} onClick={this.handleClick}/>
          </span>
        </div>
        <div className='brand'>
          shapyro
        </div>
      </nav>
    )
  }
}

export default Navbar;
import React, { Component } from 'react';
import Brand from '../Brand/brand'
import GitHub from '../../data/images/GitHub-Mark-Light-64px.png'
import Twitter from '../../data/images/Twitter_Social_Icon_Rounded_Square_Color.png'
import LinkedIn from '../../data/images/In-2C-41px-R.png'
import './navbar.css'

import backImg from '../../data/images/px_by_Gre3g.png'

const backStyle = {
  backgroundImage: `url(${backImg})`
}

class Navbar extends Component {
  handleClick = (e) => {
    e.preventDefault();
    if (e.target.id === 'sosh') {
      window.open(e.target.alt,'_blank')
    } 
  }

  render() {
    return (
      <nav style={backStyle}>
        <div className='social'>
          <span id='socials'>
            <img id='sosh' alt='https://github.com/shapyro' src={GitHub} onClick={this.handleClick}/>
            <img id='sosh' alt='https://twitter.com/shapyro' src={Twitter} onClick={this.handleClick}/>
            <img id='sosh' alt='https://www.linkedin.com/in/brandonshapiro/' src={LinkedIn} onClick={this.handleClick}/>
          </span>
        </div>
        <Brand />
      </nav>
    )
  }
}

export default Navbar;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './brand.css'

import backImg from '../../data/images/px_by_Gre3g.png'

const backStyle = {
  backgroundImage: `url(${backImg})`
}

class Brand extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false
    }
  }

  handleClick = (e) => {
    this.setState({ expanded: !this.state.expanded })
  }

  render() {
    if (this.state.expanded === false) {
      return (
        <div className='brand' onClick={this.handleClick}>
          <div>shapyro</div>
        </div>
      )
    } else {
      return (
        <div className='brand' onClick={this.handleClick}>
          <div>shapyro</div>
          <div className='dropdown' style={backStyle}>
            <div className='dropdown-item'>
              <Link 
                className='portfolio-dropdown dropit' 
                style={{ textDecoration: 'none' }}
                to="/portfolio"
                >
                  portfolio
              </Link>   
            </div>
            <div className='dropdown-item'>
              <Link 
                className='about-dropdown dropit' 
                style={{ textDecoration: 'none' }}
                to="/"
                >
                  about
              </Link>
            </div>
          </div>
        </div>
      )
    }



    
  }
}

export default Brand;
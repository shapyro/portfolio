import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './brand.css'

class Brand extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false
    }
  }

  handleClick = (e) => {
    console.log(e.target)
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
          <div className='dropdown'>
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
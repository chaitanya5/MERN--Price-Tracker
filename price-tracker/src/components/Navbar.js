import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
        <Link to='/' className='navbar-brand'>PriceTracker</Link>

        <div className='collapse navbar-collapse'>
            <ul className='navbar-nav mr-auto'>
                <li className='nav-item'><Link to='/' className='nav-link'>Create Product</Link></li>
                <li className='nav-item'><Link to='/list' className='nav-link'>Products Log</Link></li>
            </ul>
        </div>
        
      </nav>
    )
  }
}

export default Navbar

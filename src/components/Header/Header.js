import React from 'react'
import './Header.scss';
import logo from '../../images/reactjs-icon.png';


function Header() {
    return (
        <nav>
            <div className="nav-content">
                <div className="left-nav">
                    <a href='/'>
                        <img className= 'logo' src={logo} alt= 'logo'/>
                    </a>
                    <h1 className="logo-txt">
                        React Facts
                    </h1>
                </div>
                <h1 className='right-nav'>
                    React Course - Project 1
                </h1>
            </div>

        </nav>
    );
  }
  
  export default Header;
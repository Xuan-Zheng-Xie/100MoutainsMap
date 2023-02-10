import React,{ Component } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import CustomNavLink from '../Navlink';
import './index.navbar.css'

export default class Navbar extends Component{
    navRef = React.createRef();

    showNavBar = ()=>{
        this.navRef.current.classList.toggle('responsive_nav')
    }
    render(){
        return (
            <header>
                <span className='logo'>
                    台灣山岳
                </span>
                <nav ref={this.navRef}>
                    <CustomNavLink to='/'>百岳地圖</CustomNavLink>
                    <CustomNavLink to='/gallery'>相簿</CustomNavLink>
                    <CustomNavLink to='/about'>關於</CustomNavLink>
                    
                    <button className='nav-btn nav-close-btn' onClick={this.showNavBar}>
                        <FaTimes/>
                    </button>
                </nav>
                <button  className='nav-btn' onClick={this.showNavBar}>
                    <FaBars/>
                </button>
            </header>
        )
    }
}
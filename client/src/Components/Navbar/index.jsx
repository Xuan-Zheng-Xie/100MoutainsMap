import React,{ Component } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './index.navbar.css'

export default class Navbar extends Component{
    navRef = React.createRef();

    showNavBar = ()=>{
        this.navRef.current.classList.toggle('responsive_nav')
    }


    render(){
        return (
            <header>
                <h3>Logo</h3>
                <nav ref={this.navRef}>
                    <a href="/#">Home</a>
                    <a href="/#">Map</a>
                    <a href="/#">Records</a>
                    <a href="/#">About</a>
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
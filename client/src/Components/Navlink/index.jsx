import React,{ Component } from 'react';
import { NavLink } from 'react-router-dom'
import './index.navlink.css'

export default class CustomNavLink extends Component{
    render(){
        return (
            <NavLink className='link' {...this.props}/>
        )
    }
}
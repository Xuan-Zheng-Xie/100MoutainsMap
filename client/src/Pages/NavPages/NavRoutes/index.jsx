import React,{ Component } from "react";
import { Routes, Route } from 'react-router-dom'
import Taiwainmap from '../Map/index'
import Gallery from '../Gallery/index'
import About from "../About";

export default class Navroutes extends Component {
    render(){
        return (
            <Routes>
                <Route path='/' element={<Taiwainmap/>}/>
                <Route path='/gallery' element={<Gallery/>}/>
                <Route path='/about' element={<About/>}/>
            </Routes>
        )
    }
}
// 建立外殼App
import React,{Component} from 'react'
import Navbar from './Components/Navbar/index'
import  Taiwainmap from './Components/Map/index'

export default class App extends Component{
  render(){
      return (
          <React.Fragment>
            <Navbar/>
            <Taiwainmap/>
          </React.Fragment>
      )
      
  }
}
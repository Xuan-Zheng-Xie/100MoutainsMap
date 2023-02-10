// 建立外殼App
import React,{Component} from 'react'

import Navbar from './Components/Navbar/index'
import Navroutes from './Pages/NavPages/NavRoutes'

export default class App extends Component{
  render(){
      return (
          <React.Fragment>
              <Navbar/>
                <div className='wrap-app-content'>
                 
                  <Navroutes/>
                </div>
          </React.Fragment>
      )
  }
}
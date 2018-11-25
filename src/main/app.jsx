import React from 'react'

import Header from '../common/template/header'
import SideBar from '../common/template/sideBar'
import Footer from '../common/template/footer'
import Messages from '../common/msg/messages'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../css/style.css';
export default props => (
    
    <div className='App'>
        <div>
          {props.children}
        </div>
    </div>
   
)
import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../css/style.css';
export default props => (
    
    <div className='App'>
        <div>
          {props.children}
        </div>
    </div>
   
)
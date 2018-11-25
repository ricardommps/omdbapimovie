import '../common/template/dependencies'
import React, { Component } from 'react'
import App from './app'

class AuthOrApp extends Component {

    render() {
        return <App>{this.props.children}</App>
    }
}

export default AuthOrApp
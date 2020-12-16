import React, { Component } from 'react';
import Style from "./header.module.css"

class Header extends Component {
    render() { 
        return ( 
            <h1 className={Style.appName}>Chat App</h1>
         );
    }
}
 
export default Header;
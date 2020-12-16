import React, { Component } from 'react';
import Header from "./main_component/header"
import Massages from "./main_component/massages"
import Users from "./main_component/users"
import "./main.css"

class ChatApp extends Component {
    render() { 
        return ( 
            <div className="container">
                <div className="header"><Header /></div>
                <div className="msg-container">
                    <div className="users"><Users /></div>
                    <div className="massages"><Massages /></div>
                </div>
            </div>
        );
    }
}
 
export default ChatApp;
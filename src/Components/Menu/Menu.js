import React, { Component } from "react";
import Messenger from "./ModelMsg/Messenger";
import "./Menu.css"

class Menu extends Component{
    render(){
        return (
            <body>
                <div className="Text1">
                    <Messenger msg={this.props.welcome}/>
                </div>
                <div className="Text2">
                    <Messenger msg={this.props.msg2}/>
                </div>
            </body>

        );
    }
}

export default Menu;
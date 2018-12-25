import React, { Component } from "react";
import "./Menu.css"

class Menu extends Component{
    render(){
        return (
            <body>
                <div className="Text1"> {this.props.welcome} </div>
                <div className="Text2"> {this.props.msg2}  </div>
                <table className="Menu-Border">
                    <tr>
                        <th className="text3">SITE TEST <variante> UPPLIFY </variante> </th>
                    </tr>
                </table>
            </body>

        );
    }
}

export default Menu;
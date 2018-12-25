import React, { Component } from 'react';
import './Messenger.css';


class Messenger extends Component{
    render(){
        return (
            <p className="Messenger-format"> {this.props.msg} </p>
        );
    }

}
export default Messenger;
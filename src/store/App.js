import React, { Component} from 'react';
import Logo from '../Components/Logo/LogoText';
import './App.css'
import Menu from "../Components/Menu/Menu";


class App extends Component {
  render() {
    return (
        <div  className="App">
            <Logo/>
            <div>
                <Menu welcome="Welcome To Test" msg2="marketing, development, design."/>
            </div>
        </div>
    );
  }
}

export default App;

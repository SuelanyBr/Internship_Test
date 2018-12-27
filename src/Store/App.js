import React, { Component} from 'react';
//import Logo from '../Components/Logo/LogoText';
import Rascunho from "../Components/RASCUNHO/rascunho";
//import Button from '../Components/Buttons/Button_Home'
//import Button from '../Components/Buttons/Button_Home'
import Inicio from '../Components/Menu/Menu';
import './App.css'
import Footer from "../Components/Footer/Footer";

class App extends Component {
  render() {
    return (

        <body >
            <div className="container-fluid p-0">

                <Inicio/>
                <Footer/>


            </div>
        </body>

    );
  }
}

export default App;
/**<footer className="container pt-3 footer text-black bg-transparent">
 <i className="fab fa-facebook-f"></i>
 <i className="fab fa-twitter"></i>
 <i className="fab fa-instagram"></i>
 <i className="fab fa-linkedin-in"></i>
 </footer>

 <RASCUNHO welcome="Welcome To Test" msg2="marketing, development, design." />**/
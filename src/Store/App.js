import React, { Component} from 'react';
import Header from '../Components/Header/Header';
import Footer from "../Components/Footer/Footer";
import './App.css'

class App extends Component {
  render() {
    return (

        <body>
            <div className="container-fluid p-0">

                <Header/>

                <Footer/>
            </div>
        </body>

    );
  }
}

export default App;
/**<RASCUNHO welcome="Welcome To Test" msg2="marketing, development, design." />**/
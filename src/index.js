import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import Page3 from './Components/Page3/Page3';
import Resume from './Components/Resume/Resume';
import Main from "./Store/Main";
import './index.css';

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={Main}/>
            <Route path="/Resume" component={Resume}/>
            <Route path="/Page3" component={Page3}/>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'))

serviceWorker.unregister();

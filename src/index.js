import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import './index.css';
import Countdown from './components/Countdown';
import Home from './components/Home';
import Notes from './components/Notes';
import About from './components/About';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import noteStore from './stores/note/';

let store=noteStore();
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Switch>
                    <Route path="/countdown" component={Countdown}/>
                    <Route path="/" component={Home}/>
                </Switch>
                <Route path="/notes" component={Notes}/>
                <Route path="/about" component={About}/>
            </div>
        </Router>
    </Provider>
    , document.getElementById('root'));

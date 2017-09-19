import React, { Component } from 'react';
import './App.css';

import {
    Route,
    BrowserRouter as Router
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './views/Home';
import Login from './views/Login';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Navbar />
                    <Route exact path="/" component={Login} />
                    <Route path="/home" component={Home} />
                </div>
            </Router>
        );
    }
}

export default App;

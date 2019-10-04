import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavBar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Post from './Components/Post';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <NavBar />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/home' component={Home} />
                        <Route exact path='/about' component={About} />
                        <Route exact path='/contact' component={Contact} />

                        <Route path='/post/:id' component={Post} />
                    </Switch>
                    
                </div>
            </BrowserRouter>
        )
    }
}

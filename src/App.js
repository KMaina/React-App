import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../src/pages/Home';
import Info from '../src/pages/Info';

class App extends Component {
    render() { 
        return (
            <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/info' component={Info} />
            </Switch>
            </BrowserRouter>
        );
    }
}
 
export default App;

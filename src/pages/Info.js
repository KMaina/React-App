import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import './pages.css';

class Info extends Component {
    render() { 
        return ( 
        <div className='center'>
            <h1>The info page.</h1>
            <p>Click the button to go back to the home page</p>
            <Link to="/">
                <Button type='submit' text='Click Me' />
            </Link>
        </div> );
    }
}
 
export default Info;

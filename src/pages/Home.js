import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import './pages.css';

class Home extends Component {

    render() { 
        return ( 
            <div className='center'>
                <h1>Welcome Home</h1>
                <p>Click to move to the next page.</p>
                <Link to="/info">
                    <Button type='submit' text='Click Me' />
                </Link>
            </div> 
            );
    }
}
 
export default Home;

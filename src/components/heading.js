import React from 'react';
import logo from '../logo.svg';

class Heading extends React.Component {
    render() {
        return (
            <header>
                <img className='cover-art' src={logo} alt='poster'/>
                <h1>Avengers</h1>
            </header>
        );
    }
}

export default Heading;
import React from 'react';
import logo from '../logo.svg';
import Person from '../ui-elements/person.js';
import Ratings from '../ui-elements/ratings.js';
import UserData from '../ui-elements/user-data.js';

class Movie extends React.Component {
    render() {
        let score = {
            imdb: 5,
            rt: 4,
            me: 4
        };
        let userData = {
            saw: true,
            own: false,
            watchList: true
        }
        let media = 'movie'
        
        return (
            <div className='movie'>                
                <img className='cover-art' src={logo} alt='poster'/>
                <h1>Avengers</h1>
                <Person mediaRole='Director' name='Joe Russo' />
                <Person mediaRole='Actor' name='Chris Hemsworth' />
                <Ratings media={media} score={score} />
                <UserData media={media} data={userData} />
            </div>
        );
    }
}

export default Movie;
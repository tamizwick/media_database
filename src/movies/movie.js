import React from 'react';
import CoverArt from '../components/cover-art.js';
import Heading from '../components/heading.js';
import People from '../components/person.js';
import Ratings from '../components/ratings.js';
import UserData from '../components/user-data.js';

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
        };
        let media = 'movie';
        
        return (
            <div className='movie'>                
                <CoverArt />
                <Heading />
                <People />
                <Ratings media={media} score={score} />
                <UserData media={media} data={userData} />
            </div>
        );
    }
}

export default Movie;
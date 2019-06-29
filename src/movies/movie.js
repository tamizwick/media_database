import React from 'react';
import CoverArt from '../components/cover-art.js';
import Heading from '../components/heading.js';
import People from '../components/person.js';
import Summary from '../components/summary.js';
import Ratings from '../components/ratings.js';
import UserData from '../components/user-data.js';
import tmdbKey from '../movies/tmdb-api.js';

class Movie extends React.Component {
/* Props passed from App:
    *id (string)
*/
    constructor(props) {
        super(props);
        
        this.state = {
            movie: {}
        }
        
        this.handleMovieSelection = this.handleMovieSelection.bind(this);
    }
    
    handleMovieSelection(id) {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${tmdbKey}`)
        .then(response => response.json())
        .then(json => this.setState({
            movie: json
        }));
    }
    
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
        this.handleMovieSelection(this.props.id);
        return (
            <div className='movie'>                
                <CoverArt poster={this.state.movie.poster_path} alt={this.state.movie.title} />
                <Heading title={this.state.movie.title} />
                <Summary summary={this.state.movie.overview} />
                <People />
                <Ratings media={media} score={score} />
                <UserData media={media} data={userData} />
            </div>
        );
    }
}

export default Movie;
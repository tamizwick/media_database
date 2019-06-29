import React from 'react';
import './App.scss';
import Search from './ui-elements/search.js';
import Movie from './movies/movie.js';
import tmdbKey from './movies/tmdb-api.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            tmdbResults: [], //First three results from TMDB search
            movieSelected: false,
            movieId: ''
        }
        
        this.handleSearch = this.handleSearch.bind(this);
        this.searchResultClicked = this.searchResultClicked.bind(this);
    }
    
    //Searches TMDB and returns the top 3 results
    handleSearch() {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${tmdbKey}&query=${document.querySelector('#search-field').value}`)
        .then(response => response.json())
        .then(json => {
            json.results = json.results.slice(0, 3);
            this.setState({
                tmdbResults: json.results
            })
        });
    }
    
    //When a search result is clicked, sets the state to display Movie with ID of selected result
    searchResultClicked(id) {
        this.setState({
            movieSelected: true,
            movieId: id
        })
    }

    render() {
        return (
            <div>
                <Search 
                handleSearch={this.handleSearch}
                searchResultClicked={this.searchResultClicked}
                tmdbResults={this.state.tmdbResults} 
                />
                {this.state.movieSelected === true ? <Movie id={this.state.movieId} /> : null }
            </div>
        );
    }
}

export default App;
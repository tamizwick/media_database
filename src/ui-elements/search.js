import React from 'react';

class Search extends React.Component {
    
    render() {
        let searchResultClicked = this.props.searchResultClicked;
        return (
            <div id='search'>
                <input type='search' id='search-field'/>
                <button type='submit' onClick={this.props.handleSearch}>Submit</button>
                <div id='search-results'>
                    {this.props.tmdbResults.map(function(x, index) {
                        return (
                            <ResultButton 
                            key={x.id} 
                            object={x} 
                            searchResultClicked={searchResultClicked}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}

class ResultButton extends React.Component {
    
    render() {
        let posterSrc = `https://image.tmdb.org/t/p/w300_and_h450_bestv2${this.props.object.poster_path}`;
        return (
            <button onClick={this.props.searchResultClicked.bind(this, this.props.object.id)}>
                <img src={posterSrc} alt={this.props.object.title} className='search-poster' />
                {this.props.object.title}
            </button>
        );
    }
}

export default Search;
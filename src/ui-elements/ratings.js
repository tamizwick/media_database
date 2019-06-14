import React from 'react';

class Ratings extends React.Component {
    render() {
        if (this.props.media === 'movie') {
            return (
                    <div>
                       <h2>Ratings</h2>
                        <p><b>IMDB:</b> {this.props.score.imdb}</p>
                        <p><b>Rotten Tomatoes:</b> {this.props.score.rt}</p>
                        <p><b>My Rating:</b> {this.props.score.me}</p>
                    </div>
            );
        }
    }
}

export default Ratings;
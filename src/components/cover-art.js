import React from 'react';

class CoverArt extends React.Component {
    render() {
        let posterSrc = `https://image.tmdb.org/t/p/w300_and_h450_bestv2${this.props.poster}`;
        return (
            <img className='cover-art' alt={this.props.alt} src={posterSrc} />
        );
    }
}

export default CoverArt;
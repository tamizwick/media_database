import React from 'react';

class Summary extends React.Component {
    render() {
        return (
            <p id='summary'>{this.props.summary}</p>
        );
    }
}


export default Summary;
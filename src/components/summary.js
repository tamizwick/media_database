import React from 'react';

class Summary extends React.Component {
/* Props passed from Movie:
    *summary (string)
*/
    
    render() {
        return (
            <p id='summary'>{this.props.summary}</p>
        );
    }
}


export default Summary;
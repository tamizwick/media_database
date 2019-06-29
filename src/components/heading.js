import React from 'react';

class Heading extends React.Component {
/* Props passed from Movie:
    *title (string)
*/
    render() {
        return (
            <header>
                <h1>{this.props.title}</h1>
            </header>
        );
    }
}

export default Heading;
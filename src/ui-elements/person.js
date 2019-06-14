import React from 'react';

class Person extends React.Component {
    render() {
        return (
            <p className='person'><b>{this.props.mediaRole}:</b> {this.props.name}</p>
        );
    }
}

export default Person;
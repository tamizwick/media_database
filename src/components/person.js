import React from 'react';

class Person extends React.Component {
/*Props passed from People:
    *mediaRole (string)
    *name (string)
*/
    
    render() {
        return (
            <p className='person'><b>{this.props.mediaRole}:</b> {this.props.name}</p>
        );
    }
}

class People extends React.Component {
    render() {
        return (
            <div id="people">
                <Person mediaRole='Director' name='Joe Russo' />
                <Person mediaRole='Actor' name='Chris Hemsworth' />
            </div>
        );
    }
}

export default People;
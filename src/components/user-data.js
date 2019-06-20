import React from 'react';
import Toggle from '../ui-elements/toggle.js';

class UserData extends React.Component {
    render() {
        if (this.props.media === 'movie') {
            return (
                    <div id="user-data">
                        <h2>My Data</h2>
                        <p><b>Saw it: </b> <Toggle /></p>
                        <p><b>Own it: </b> <Toggle /></p>
                        <p><b>Watch list: </b> <Toggle /></p>
                        
                    </div>
            );
        }
    }
}

export default UserData;
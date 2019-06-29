import React from 'react';
import Toggle from '../ui-elements/toggle.js';

class UserData extends React.Component {
    render() {
        if (this.props.media === 'movie') {
            return (
                    <div id="user-data">
                        <h2>My Data</h2>
                        <div className='data-container'>
                            <p><b>Saw it: </b></p>
                            <Toggle toggledOn={this.props.data.saw} />
                        </div>
                        <div className='data-container'>
                            <p><b>Own it: </b></p>
                            <Toggle toggledOn={this.props.data.own} />
                        </div>
                        <div className='data-container'>
                            <p><b>Watch list: </b></p>
                            <Toggle toggledOn={this.props.data.watchList} />
                        </div>
                    </div>
            );
        }
    }
}

export default UserData;
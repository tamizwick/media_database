import React from 'react';

class UserData extends React.Component {
    render() {
        if (this.props.media === 'movie') {
            return (
                    <div>
                        <h2>My Data</h2>
                        <p><b>Saw it: </b> {this.props.data.saw ? 'YES!' : 'No'}</p>
                        <p><b>Own it: </b> {this.props.data.own ? 'YES!' : 'No'}</p>
                        <p><b>Watch list: </b> {this.props.data.watchList ? 'YES!' : 'No'}</p>
                    </div>
            );
        }
    }
}

export default UserData;
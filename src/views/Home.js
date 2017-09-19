import React from 'react';
import Reflux from 'reflux';
import AppStore from '../stores/AppStore';
import Actions from '../actions/Actions';

class Home extends Reflux.Component {
	constructor() {
        super();

        this.state = {};
        this.store = AppStore;
        this.storeKeys = ['data'];
        this.showUsers = this.showUsers.bind(this);
    }

    showUsers(e) {
        Actions.getUsers();
    }

    render() {
        return (
            <div>
                <div className="jumbotron">
                    <h1 className="display-3">Welcome!</h1>
                    <p className="lead">This is my proyect for learning React.js. Follow me <a href="https://twitter.com/bacabange" target="_blank">@bacabange</a></p>
                </div>

                <div className="text-center">
                    <button
                        onClick={ this.showUsers }
                        className="btn btn-primary">Show Users</button>
                </div>
            </div>
        );
    }
}

export default Home;

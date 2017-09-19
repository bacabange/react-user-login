import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            isLogged: false
        }

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();

        if (this.state.username == 'admin' && this.state.password == 'admin') {
            this.setState({ username: '', password: '', isLogged: true });
        } else {
            alert('Inválido!');
            this.setState({ username: '', password: '', isLogged: false });
        }
    }

    render() {
        return (
            <div className="Login">
                { this.state.isLogged ?
                    <Redirect to="/home" />
                    :
                    <div className="d-flex justify-content-center">
                        <form onSubmit={ this.onSubmit }>
                            <div className="form-group">
                                <label>Username</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={ this.state.username}
                                    onChange={ (e) => { this.setState({username: e.target.value})} }
                                    />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    value={ this.state.password}
                                    onChange={ (e) => { this.setState({password: e.target.value})} }
                                    />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                }
            </div>
        );
    }
}

export default Login;

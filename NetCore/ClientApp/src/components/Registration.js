import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../store/RegistrationStore'


class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: "1",
            password: "2",
            FirstName: "FirstName",
            LastName: "LastName"
        };
        this.onSubmit = this.handleClick.bind(this);
        this.onChange = this.handleChange.bind(this);
    }

    handleClick(event) {
        let authData = {
            Login: this.state.login,
            Password: this.state.password,
            FirstName: "FirstName",
            LastName: "LastName"
        };
        this.props.sendRequest(authData);
    }

    handleChange(e) {
        const target = e.target;
        const name = target.id;
        console.log(name)
        this.setState({
            [name]: target.value
        });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="Login" className="form-control" id="login" value={this.state.Login} onChange={this.onChange} />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="Password" className="form-control" id="password" placeholder="Password" value={this.state.Login} onChange={this.onChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            );
    }
}

export default connect(
    state => state.registrationReducer,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Registration);
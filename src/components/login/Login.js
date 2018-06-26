import React, {Component} from 'react';
import {connect} from 'react-redux';

class Login extends Component {

    state = {
        formData: {
            username: '',
            password: ''
        }

    };

    onChangeHandler = (event) => {
        const formData = {...this.state.formData};
        formData[event.target.name] = event.target.value;
        this.setState({formData: formData});
    };

    componentDidUpdate() {
        console.log(this.props);
        if(this.props.loggedUser && this.props.loggedUser.username) {
            this.props.history.push('/cinemas');
        }
    }

    render() {
        return (
            <div>
                <form onChange={(event) => this.onChangeHandler(event)}>
                    <input type="text" name="username" placeholder="Username"/>
                    <input type="password" name="password" placeholder="Username"/>
                </form>
                <button onClick={() => this.props.submitHandler(this.state.formData, this.props)}>Login</button>
            </div>
        );
    }
}

const matchStateToProps = (state) => {
    return {
        loggedUser: state.loggedUser
    }
};
const matchDispatchToProps = (dispatch) => {
    return {
        submitHandler: (formData, props) => {
            dispatch({type: 'LOGIN_USER', payload: {user: formData}});

        }
    }
};


export default connect(matchStateToProps, matchDispatchToProps)(Login)



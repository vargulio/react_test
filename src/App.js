import React, {Component} from 'react';
import classes from './App.scss';
import {connect} from 'react-redux';

class App extends Component {
    render() {
        return (
            <div className={classes.App}>
                <div>{this.props.counter}</div>
                <button onClick={this.props.incrementHandler}>Maikati</button>
            </div>
        );
    }
}

const matchStateToProps = (state) => {
    return {
        counter: state.counter
    }
};

const matchDispatchToProps = (dispatch) => {
    return {
        incrementHandler: () => {
            dispatch({type: 'INCREMENT_COUNTER'})
        }
    }
};

export default connect(matchStateToProps, matchDispatchToProps)(App);

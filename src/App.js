import React, {Component} from 'react';
import classes from './App.scss';
import {connect} from 'react-redux';
import Login from './components/login/Login';
import {BrowserRouter , Route, Switch} from 'react-router-dom'
import CinemaList from './components/cinemaList/cinemaList';
import Program from './components/program/program';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className={classes.App}>
                    <Switch>
                        <Route path="/" exact render={()=> (<div>HOME PAGE MADARFAKAR</div>)}></Route>
                        <Route path="/login" exact component={Login}></Route>
                        <Route path="/cinemas" exact component={CinemaList}></Route>
                        <Route path="/program/:id" exact component={Program}></Route>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}


export default App;

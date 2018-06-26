import React, {Component} from 'react';
import { connect} from 'react-redux';

class Program extends Component {


    render() {
        const movies = this.props.movies.map((movie,index )=> <div>
            <p>{movie.title}</p>
            <p>{movie.availablePlaces}</p>
            <div><button onClick={()=>this.props.reserveHandler(index)}>Reserve</button></div>
        </div>);
        return (
            <div>
                {movies}
            </div>
        );
    }
}

const matchStateToProps = (state) => {
    return {
        movies: state.movies
    }
};

const matchDispatchToProps = (dispatch) => {
    return {
        reserveHandler: (index)=> {dispatch({type: 'RESERVE_PLACE', payload: {movieIndex: index}})}
    }
};

export default connect(matchStateToProps, null)(Program);
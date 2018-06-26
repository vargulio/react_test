import React, {Component} from 'react';
import CinemaItem from '../cinemaItem/cinemaItem';
import  { connect} from 'react-redux';

class CinemaItemList extends Component {



    render() {
        const cinemas = this.props.cinemas.map(cinema => <CinemaItem picture={cinema.picture} addres={cinema.addres}
                                                                     workingTime={cinema.workingTime} key={cinema.key}/>);
        return (
            <div>
                {cinemas}
            </div>
        );
    }

}

const matchStateToProps = (state) => {
    return {
        cinemas: state.cinemas
    }
};

export default connect(matchStateToProps,null)(CinemaItemList);
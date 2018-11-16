import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../store/TournamentReducer';
import './TournamentList.css'

class TournamentList extends Component {
    componentWillMount() {
        this.props.requestTournaments();
    }


    render() {
        return (
            <div>
                {this.props.isLoading ? <span>Loading...</span> : []}
                {renderTournamentsBloks(this.props)}
            </div>
        );
    }
}

function renderTournamentsBloks(props) {
    return (
    <div>
            {props.tournaments.map(tournament =>
                <div key={tournament.id} className="row">
                        <div className="col-xl-1">
                        <div id="tourInfo" className="row">
                            <div id="leftTourInfo" className="col-lg-6">
                                <h1 className="text-center">{tournament.caption}</h1>
                                <p className="text-center">{tournament.info}</p>
                                </div>
                            <div id="rightTourInfo" className="col-lg-6">
                                <p className="text-center">Тур</p>
                                <h1 className="text-center">{tournament.rounds.length === 0 ? 0 : findMax(tournament.rounds).number}/{tournament.rounds.length}</h1>
                                <input type="hidden" value={tournament.rounds.length === 0 ? '' : findMax(tournament.rounds).id} />
                                <Link className="btn btn-primary btn-lg btn-block" to={`/round/${tournament.rounds.length === 0 ? '' : findMax(tournament.rounds).id    }/1`}>Участвовать</Link>
                                </div>
                            </div>
                        </div>
                    </div>
            )}
        </div>
    );
}

function findMax(data) {
    var max;
    if (data.length != 0) {
        max = data.reduce(function (prev, current) {
            return (prev.number > current.number && prev.isStarted) ? prev : (current.isStarted ? current : [])
        }) 
    }
    return max;
}


export default connect(
    state => state.tournamentReducer,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(TournamentList);
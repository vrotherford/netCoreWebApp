import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from './TournamentsActions';
import AuthHelper from '../../utils/AuthHelper';
import { Redirect } from 'react-router-dom';
import '../../components/Style.css';

class TournamentList extends Component {
    componentWillMount() {
        if (AuthHelper.isLogged) {
            this.props.requestTournaments();
        }
        else {
            return <Redirect to='/login' />;
        }
    }


    render() {
        if (AuthHelper.isLogged) {
            if (this.props.length !== 0) {
                return (
                    <div>
                        {this.props.isLoading ? <span>Loading...</span> : []}
                        {renderTournamentsBloks(this.props)}
                    </div>
                );
            }
            else {
                return (
                    <div>
                        {this.props.isLoading ? <span>Loading...</span> : []}
                    </div>
                );
            }
        } else {
            return <Redirect to='/login' />;
        }
    }
}

function renderTournamentsBloks(props) {
    return (
        <div>
            {props.tournaments.map(tournament =>
                
                <div class="tournament" key={tournament.id}>
                    <div class="tournamentLeftBlock">
                        <h2>{tournament.caption}</h2>
                        {tournament.info}
                    </div>
                    <div class="tournamentRightBlock">
                        <h2>Round</h2>
                        <h1>{tournament.rounds.length === 0 ? 0 : findMax(tournament.rounds).number}/{tournament.rounds.length}</h1>
                        <div class="joinButton">
                            <Link to={`/round/${tournament.rounds.length === 0 ? '' : findMax(tournament.rounds).id}/1`}>Join</Link>
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
            return (current.number > prev.number && current.isStarted) ? current : (prev.isStarted ? prev : [])
        })
    }
    return max;
}


export default connect(
    state => state.tournamentReducer,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(TournamentList);
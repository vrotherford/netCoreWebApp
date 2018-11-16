import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/RoundReducer';
import './TournamentList.css'
import { Link } from 'react-router-dom';

class Round extends Component {
    constructor() {
        super();
        this.state = {
            currentPage: 1
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount() {
        const roundID = this.props.match.params.roundID || '';
        const startTaskIndex = parseInt(this.props.match.params.startTaskIndex,10) || 0;
        this.props.requestRoundTasks(roundID, startTaskIndex);
    }

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    render() {
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.props.tasks.length); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li className="page-item"><a className="page-link" href={`/round/${this.props.tasks[0].roundsId}/${number}`}>{number}</a></li>
                            
                       
            );
        });
        return (
            <div>
                { renderRoundTasks(this.props) }
                < div className = "row" >
                    <div className="col-xl-1 text-center">
                        <nav aria-label="Page navigation justify-content-center">
                            <ul className="pagination justify-content-center">
                                {renderPageNumbers}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

function renderRoundTasks(props) {
    const currentPage = props.currentPage;
    const tasks = props.tasks;
    const indexOfLastTask = currentPage;
    const indexOfFirstTask = indexOfLastTask - 1;
    const slicedData = tasks.slice(indexOfFirstTask, indexOfLastTask);
    return (
        <div>
            {slicedData.map(task =>
                <div key={task.id} className="row">
                    <div className="col-xl-1">
                        <div id="tourInfo" className="row">
                            <div id="leftTourInfo" className="col-lg-6">
                                <h1 className="text-center">{task.text}</h1>
                                <p className="text-center">{task.answer}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default connect(
    state => state.roundReducer,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Round);
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from './RoundActions';

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
        const startTaskIndex = parseInt(this.props.match.params.startTaskIndex, 10) || 0;
        this.props.requestRoundTasks(roundID, startTaskIndex);
    }

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    render() {
        if (this.props.tasks) {
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
                    {renderRoundTasks(this.props)}
                    < div className="row" >
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
        else return (
            <div>
                a
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
                <div class="task" key={task.id}>
                    <div class="taskUpperBlock">
                        <div class="taskPhoto">

                        </div>
                    </div>
                    <div class="taskLowerBlock">
                        <div class="taskText">
                            <h3>Task 1</h3>
                            <p>{task.text}</p>
                        </div>
                        <div class="taskAnswer">
                            <form>
                                <h3>Answer</h3>
                                <textarea class="answerInput" ></textarea>
                                <button type="submit" class="nextTask">Next task</button>
                            </form>
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
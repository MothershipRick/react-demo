import React, {Component} from 'react';
import Task from './Task.jsx';
import {connect} from 'react-redux';
import {selectTask} from '../actions/index';
import TaskDetail from '../containers/TaskDetail.js';
import {addTask} from "../actions";

class TaskBoard extends Component {

    addTask = () => {
        this.props.addTask('Click Edit to update');
    };

    sortTask = () => {
        // do nothing
    };

    eachComment = (task, i) => {
        console.log(task);
        return (
            <Task key={i} {...task} />
        );
    };

    render() {
        return (
            <div id="container">
                <div className="board">
                    <button onClick={this.addTask} className="button-add create">Add New Task</button>
                    <button onClick={this.sortTask} className="button-default">Sort</button>
                    <br/>
                    {this.props.tasks.map(this.eachComment)}
                    <br />
                    <TaskDetail/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        tasks: state.tasks
    };
}

const mapDispatchToProps = {
    selectTask,
    addTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskBoard);
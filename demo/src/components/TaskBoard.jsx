import React, {Component} from 'react';
import Task from './Task.jsx';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectTask} from '../actions/index';
import TaskDetail from '../containers/TaskDetail.js';

class TaskBoard extends Component {
    constructor(props) {
        super(props);
        this.state = TaskBoard.getInitialState();
    }

    static getInitialState() {
        return {
            comments: [
                'Walk the dog',
                'Call your mother'
            ]
        }
    }

    createTaskList() {
        return this.props.tasks.map((task) => {
            return <li key={task.id}
                       onClick={() => this.props.selectTask(task)}>{task.taskName}
            </li>;
        });
    }

    addTask = () => {
        const arr = [...this.state.comments];
        arr.push('Click Edit to update');
        this.setState({comments: arr});
    };

    sortTask = () => {
        const arr = [...this.state.comments];
        arr.sort((a,b) => a.dueDate - b.dueDate);
        arr.map((task, i) => (<div key={i}> {task.id}
            {task.dueDate} {task.taskName}</div>))
    };

    removeTask = (i) => {
        const arr = this.state.comments;
        arr.splice(i, 1);
        this.setState({comments: arr})
    };

    updateTask = (newText, i) => {
        const arr = this.state.comments;
        arr[i] = newText;
        this.setState({comments: arr})
    };

    eachComment = (text, i) => {
        return (
            <Task comment={text} key={i} index={i} updateTaskText={this.updateTask} deleteTask={this.removeTask}/>
        );
    };

    render() {
        return (
            <div id="container">
                <div className="board">
                    <button onClick={this.addTask} className="button-add create">Add New Task</button>
                    <button onClick={this.sortTask} className="button-default">Sort</button>
                    <br/>
                    {this.state.comments.map(this.eachComment)}
                    <ul>
                        {this.createTaskList()}
                    </ul>
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

function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectTask: selectTask}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(TaskBoard);
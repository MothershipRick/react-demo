import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectedTaskSelector} from "../selectors";

class TaskDetail extends Component {

    render() {
        if (!this.props.task) {
            return (<div className="taskDetailContainer"><p>Click a task name for more detail.</p></div>);
        }
        return (
            <div className="taskDetailContainer">
                <h1>{this.props.task.taskName}</h1>
                <h3>Description: {this.props.task.taskDescription}</h3>
                <h4>Due Date: {this.props.task.dueDate}</h4>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        task: selectedTaskSelector(state),
    };
}

export default connect(mapStateToProps)(TaskDetail);
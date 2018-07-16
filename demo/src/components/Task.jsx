import React, {Component} from 'react';
import {deleteTask, selectTask, updateTask} from "../actions";
import {connect} from "react-redux";

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState(props);
    }

    getInitialState(props) {
        return {editing: false, ...props}
    }

    edit = () => {
        this.setState({editing: true});
    };

    remove = () => {
        this.props.deleteTask(this.props.id);
    };

    save = () => {
        this.props.updateTask(this.props.id, {...this.state});
        this.setState({editing: false});
    };

    select = () => {
        this.props.selectTask(this.props.id);
    };

    onChange = (e) => {
        const {name, value} = e.target;
        const newState = {};
        newState[name] = value;
        this.setState(newState);
    };

    renderNormal() {
        return (
            <div className="taskContainer">
                <div className="taskText" onClick={this.select}>{this.state.taskName}</div>
                <button onClick={this.edit} className="button-edit">Edit</button>
                <button onClick={this.remove} className="button-delete">Remove</button>
            </div>
        );
    }

    renderForm() {
        console.log(this.state);
        return (
            <div className="taskContainer">
                <label className="taskContainerLabel"> Name:</label>
                <textarea name="taskName" value={this.state.taskName} onChange={this.onChange}/>
                <label className="taskContainerLabel"> Description:</label>
                <textarea name="taskDescription" value={this.state.taskDescription} onChange={this.onChange}/>
                <label className="taskContainerLabel"> Due Date:</label>
                <input name="dueDate" type="date" onChange={this.onChange}/>
                <label className="taskContainerLabel"> Priority:</label>
                <div className="radio">
                    <input name="priority" type="radio" name="priority" value="1" onChange={this.onChange}/> High
                    <input name="priority" type="radio" name="priority" value="2" onChange={this.onChange}/> Norm
                    <input name="priority" type="radio" name="priority" value="3" onChange={this.onChange}/> Low
                </div>
                <button onClick={this.save} className="button-save">Save</button>

            </div>
        );
    }

    render() {
        if (this.state.editing) {
            return this.renderForm();
        } else {
            return this.renderNormal();
        }
    }


}

const mapDispatchToProps = {
    selectTask,
    updateTask,
    deleteTask,
};
export default connect(null, mapDispatchToProps)(Task)
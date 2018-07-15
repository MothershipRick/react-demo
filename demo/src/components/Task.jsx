import React, {Component} from 'react';

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState(props.comment);
    }

    getInitialState(taskText) {
        return {editing: false, taskText}
    }

    edit = () => {
        this.setState({editing: true});
    };

    remove = () => {
        this.props.deleteTask(this.props.index);
    };

    save = () => {
        this.props.updateTaskText(this.state.taskText, this.props.index);
        this.setState({editing: false});
    };

    onChange = (e) => {
        this.setState({taskText: e.target.value});
    };

    onDescriptionChange = (e) => {
        this.setState({taskText: e.target.value});
    };

    renderNormal() {
        return (
            <div className="taskContainer">
                <div className="taskText">{this.state.taskText}</div>
                <button onClick={this.edit} className="button-edit">Edit</button>
                <button onClick={this.remove} className="button-delete">Remove</button>
            </div>
        );
    }

    renderForm() {
        return (
            <div className="taskContainer">
                <form>
                    <label className="taskContainerLabel"> Name:</label>
                    <textarea value={this.state.taskText} onChange={this.onChange} />
                    <label className="taskContainerLabel"> Description:</label>
                    <textarea value={this.state.taskDescription} onChange={this.onDescriptionChange} />
                    <label className="taskContainerLabel"> Due Date:</label>
                    <input type="date"/>
                    <label className="taskContainerLabel"> Priority:</label>
                    <div className="radio">
                        <input type="radio" name="priority" value="1"/> High
                        <input type="radio" name="priority" value="2"/> Norm
                        <input type="radio" name="priority" value="3"/> Low
                    </div>
                    <button onClick={this.save} className="button-save">Save</button>
                </form>
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

export default Task
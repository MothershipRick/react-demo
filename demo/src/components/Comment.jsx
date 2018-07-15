import React, {Component} from 'react';


class Comment extends Component {
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

    renderNormal() {
        return (
            <div className="commentContainer">
                <div className="commentText">{this.state.taskText}</div>
                <button onClick={this.edit} className="button-edit">Edit</button>
                <button onClick={this.remove} className="button-delete">Remove</button>
            </div>
        );
    }

    renderForm() {
        return (
            <div className="commentContainer">
                <textarea value={this.state.taskText} onChange={this.onChange}></textarea>
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

export default Comment
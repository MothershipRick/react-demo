import React, {Component} from 'react';
import Comment from './Comment.jsx';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState() {
        return {
            comments: [
                'Walk the dog',
                'Call your mother'
            ]
        }
    }

    addTask = () => {
        const arr = [...this.state.comments];
        arr.push('Click Edit to update');
        this.setState({comments: arr});
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
            <Comment comment={text} key={i} index={i} updateTaskText={this.updateTask} deleteTask={this.removeTask} />
        );
    };

    render() {
        return (
            <div id="container">
                <div className="board">
                    <button onClick={this.addTask} className="button-add create">Add New Task</button>
                    <br/>
                    {this.state.comments.map(this.eachComment)}
                </div>
            </div>
        );
    }

}

export default Board
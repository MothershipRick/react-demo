import React, {Component} from 'react';
import logo from './vortex.svg';
import './App.css';
import TaskBoard from './components/TaskBoard.jsx';


class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Hello, Rick.</h1>
                    <h2 className="App-intro">Let's get started on your tasks.</h2>
                </header>
                <TaskBoard/>
            </div>
        );
    }
}

export default App;

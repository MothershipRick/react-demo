import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TaskBoard from './components/TaskBoard.jsx';


class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Hello, Rick. Let's get to work.</h1>
                </header>
                <TaskBoard/>
            </div>
        );
    }
}

export default App;

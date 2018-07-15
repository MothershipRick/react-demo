import {combineReducers} from 'redux';
import TaskReducer from './Reducer-Tasks';
import ActiveTaskReducer from './Reducer-Active-Task.js';

const allReducers = combineReducers({
    tasks: TaskReducer,
    activeTask: ActiveTaskReducer
});

export default allReducers;
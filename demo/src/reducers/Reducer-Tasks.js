import {ADD_TASK, DELETE_TASK, UPDATE_TASK} from "../actions";
import {findIndex} from "lodash/array";

const INITIAL_TASK_STATE = [
    {
        id: 1,
        taskName: "Call mom.",
        taskDescription: "She brought you into this world, and she will take you out if you don't call her.",
        priority: 1,
        dueDate: "07/31/2018"
    },
    {
        id: 2,
        taskName: "Walk the dog.",
        taskDescription: "You know Bruce Willis gets bored sitting at the house all day.  Get up and get him active.",
        priority: 1,
        dueDate: "07/22/2018"
    }];

let nextId = 3;

function findTaskIndex(state, id) {
    return findIndex(state, (task) => {
        return id === task.id
    });
}


export default function (state = INITIAL_TASK_STATE, action) {
    switch (action.type) {

        case ADD_TASK: {
            const arr = [...state];
            const newTask = {};
            newTask.taskName = action.payload;
            newTask.id = nextId;
            nextId += 1;
            arr.push(newTask);
            return arr;
        }
        case UPDATE_TASK: {
            const arr = [...state];
            const {taskId, updatedTask} = action.payload;
            const taskIndex = findTaskIndex(state, taskId);
            if (taskIndex === -1) {
                return state;
            }
            arr.splice(taskIndex, 1, updatedTask);
            return arr;
        }
        case DELETE_TASK: {
            const arr = [...state];
            const taskId = action.payload.taskId;
            const taskIndex = findTaskIndex(state, taskId);
            if (taskIndex === -1) {
                return state;
            }
            arr.splice(taskIndex, 1);
            return arr;
        }
    }

    return state;
}

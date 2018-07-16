export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const TASK_SELECTED = 'TASK_SELECTED';
export const UPDATE_TASK = 'UPDATE_TASK';

export const selectTask = (task) => {
    return {
        type: TASK_SELECTED,
        payload: task,
    }
};

export function addTask(task) {
    return {
        type: ADD_TASK,
        payload: task,
    }
}

export function deleteTask(taskId) {
    return {
        type: DELETE_TASK,
        payload: {taskId},
    }
}

export function updateTask(taskId, updatedTask) {
    return {
        type: UPDATE_TASK,
        payload: {
            taskId,
            updatedTask,
        },
    }
}
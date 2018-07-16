import {createSelector} from 'reselect';
import {find} from "lodash/collection";

const tasksSelector = state => state.tasks;
const activeTaskIdSelector = state => state.activeTaskId;

export const selectedTaskSelector = createSelector(
    [tasksSelector, activeTaskIdSelector],
    (tasks, id) => find(tasks, (task) => {
            return id === task.id;
        }
    ));
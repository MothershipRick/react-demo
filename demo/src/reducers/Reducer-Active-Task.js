import {TASK_SELECTED} from "../actions";

export default function (state = null, action) {
    switch (action.type) {
        case TASK_SELECTED:
            return action.payload;
    }
    return state;
}

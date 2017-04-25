import { UPDATE_ALL } from '../Actions/index';

const INITIAL_STATE = { a: null, b: null, c: null };

export default function (state=INITIAL_STATE, action) {
    switch(action.type) {
        case UPDATE_ALL:
            return {...action.payload};
        default:
            return state;
    }
}
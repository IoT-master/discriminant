import { combineReducers } from 'redux';
import quadParameters from './reducer_update_inputs';
const rootReducer = combineReducers({
    variableSet: quadParameters
});

export default rootReducer;
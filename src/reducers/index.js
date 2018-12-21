import {combineReducers} from 'redux';
import values from "../components/reducer";

const rootReducer = combineReducers ({
    values :values
});

export default rootReducer;
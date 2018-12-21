import * as types from './incrementConstants';
import * as typess from './decrementConstants';
const initialState={
    value:0
}
export default function reducer(state= initialState, action) {
    switch (action.type) {
        case types.INCREMENT:
            return (Object.assign({},state, {value:action.value+1}));
          
           case typess.DECREMENT:
            return ( Object.assign({}, state,{value:action.value-1}));
        default:
            return (state);
    }
}
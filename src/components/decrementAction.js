import * as types from './decrementConstants';
export function decrementValue(value){
    return({type:types.DECREMENT, value:value});
}
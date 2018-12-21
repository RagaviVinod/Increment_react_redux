import * as types from './incrementConstants';
export function incrementValue(value){
    return({type:types.INCREMENT, value:value});
}
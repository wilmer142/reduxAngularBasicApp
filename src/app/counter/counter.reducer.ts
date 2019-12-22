import { Action } from "@ngrx/store";
import { INCREMENT, DECREMENT } from './counter.actions';

export function counterReducer( state: number = 0, action: Action ){
    switch (action.type) {
        case INCREMENT:
            return state + 1;            

        case DECREMENT:
            return state - 1;            
    
        default:
            return state;
    }
}
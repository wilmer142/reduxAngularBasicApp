import { Action } from "@ngrx/store";

export function counterReducer( state: number = 10, action: Action ){
    switch (action.type) {
        case 'INCREMENT':
            return state++;            

        case 'DECREMENT':
            return state--;            
    
        default:
            return state;
    }
}
import { Action } from "@ngrx/store";

export function counterReducer( state: number = 10, action: Action ){
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;            

        case 'DECREMENT':
            return state - 1;            
    
        default:
            return state;
    }
}
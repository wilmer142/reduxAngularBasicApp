import { INCREMENT, DECREMENT, MULTIPLY, actions, DIVIDE, RESET } from './counter.actions';

export function counterReducer( state: number = 0, action: actions ){
    switch (action.type) {
        case INCREMENT:
            return state + 1;            

        case DECREMENT:
            return state - 1;            

        case MULTIPLY:
            return state * action.payload;            

        case DIVIDE:
            return state / action.payload;   

        case RESET:
            return 0;            
    
        default:
            return state;
    }
}
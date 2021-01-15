import {ADD_TODO, TOGGLE_TODO, UPDATE_TODO} from '../actions';
let nextID = 1;

const todoListReducer = (state = [], action) => {
    switch(action.type) {
        case ADD_TODO:
            const newTodo = {
                id: nextID++,
                text: action.text,
                done: false,
            }
            return [...state, newTodo];

        case UPDATE_TODO: 
            return state.map(todo => {
                if (todo.id === action.todo.id) {
                    return action.todo
                } else {
                    return todo;
                }
            })
        
        //Use of "map" functions in this case is recommended as it does not change the "state"
        case TOGGLE_TODO:
            return state.map(todo => {
                if (todo.id === action.textID) {
                    return {
                        ...todo,
                        done: !todo.done,
                    }
                } else {
                    return todo;
                }
            })

        //Have to return state to the default so that the function is pure
        default:
            return state;
    }
}

export default todoListReducer;
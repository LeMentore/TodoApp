import { combineReducers } from 'redux';

export const ADD_POST = 'ADD_POST';

//метод. меняющий store
const reddit = (state = [], action) => {
    switch (action.type){
        case ADD_POST:
            return [action.payload, ...state]
        default:
            return state;
    }
};

export const reducer = combineReducers({reddit});
import { combineReducers } from 'redux';

//set state of shelfReducer with the action.payload
const shelfReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_SHELF':

        //action.payload is the shelf items from the database
            return action.payload
        default:
            return state
    }
}

//set state of countReducer with the action.payload
const countReducer = (state = [], action) => {
    switch (action.type){
        case 'SET_COUNT':

        //action.payload is the total count of items and users from the database
            return action.payload
        default:
            return state
    }
}

export default combineReducers({
    shelfReducer,
    countReducer
  });
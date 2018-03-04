import { FETCH_WEATHER } from '../actions/search_bar_actions';


const weatherReducer = (state = [], action) => {
    switch(action.type){
        case FETCH_WEATHER:
            return state.concat([ action.payload.data ]);
            //return [action.payload.data, ...state]; //ES6 create new array
        default:
            return state;
    }
}

export default weatherReducer;
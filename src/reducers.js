import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

// reducers and states
import {
    reducer as placeholderReducer,
    defaultstate as defaultPlaceholderState,
} from './components/placeholder/redux/reducer';

// setup the default state
export const state = {
    placeholder: defaultPlaceholderState,
};

// create he root reducer
const rootReducer = combineReducers({
    placeholder: placeholderReducer,
    routing: routerReducer,
});

export default rootReducer;

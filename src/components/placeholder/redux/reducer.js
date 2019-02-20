import {
    REDUX_TYPE_PLACEHOLDER,
} from './types';

export const defaultState = {};

/**
 * Redux app state reducer
 * @param  {Object} state  The current app state
 * @param  {Object} action The dispatched action
 * @return {Object}
 */
export function reducer(state = {...defaultState}, action) {
    switch (action.type) {
        case REDUX_TYPE_PLACEHOLDER:
            return {...state};
    }

    return state;
}

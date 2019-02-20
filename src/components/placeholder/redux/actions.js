import {
    REDUX_TYPE_PLACEHOLDER,
} from './types';

/**
 * Placeholder redux action creator
 * @return {Object} The action object
 */
export function placeholder() {
    return {
        type: REDUX_TYPE_PLACEHOLDER,
        payload: '',
    };
}

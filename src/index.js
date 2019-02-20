import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import {HashRouter} from 'react-router-dom';
import storage from 'electron-json-storage';
import deepmerge from 'deepmerge';

// components and reducers
import reducers, {state} from './reducers';
import App from './components/app/app';

// load the saved state if it exists
storage.get('state', (error, serializedState) => {
    if (error || !serializedState) {
        serializedState = {};
    }

    const defaultAppState = deepmerge(state, serializedState);
    let store;

    if (process.env.NODE_ENV === 'development') {
        // browser redux development tools enabled (does not work on mobile)
        const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
        store = createStore(
            reducers,
            defaultAppState,
            composeEnhancers(applyMiddleware())
        );
    } else {
        // Production & mobile tests
        const createStoreWithMiddleware = applyMiddleware()(createStore);
        store = createStoreWithMiddleware(reducers, defaultAppState);
    }

    store.subscribe(() => {
        try {
            const state = store.getState();
            storage.set('state', state, (error) => {
                if (error) {
                    console.log(error);
                }
                console.log('state saved');
            });
        } catch (error) {
            // ignore write errors
        }
    });

    ReactDOM.render(
        <Provider store={store}>
            <HashRouter>
                <App/>
            </HashRouter>
        </Provider>,
        document.querySelector('#app')
    );
});

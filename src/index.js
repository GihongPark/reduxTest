import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer, { rootSaga } from './modules';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(
            ReduxThunk,
            sagaMiddleware,
        )
    )
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

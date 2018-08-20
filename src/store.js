import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import promiseMiddleware from 'redux-promise-middleware';
import reducer from './ducks/reducer';

export default createStore(reducer, composeWithDevTools(applyMiddleware(promiseMiddleware())));

import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducer from '../reducer/index';
import thunk from 'redux-thunk';

const store = createStore(
	combineReducers(reducer),
	applyMiddleware(thunk)
	)

export default store;
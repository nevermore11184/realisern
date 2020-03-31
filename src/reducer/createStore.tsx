import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

const rootStore = combineReducers({rootReducer});

const store = createStore(rootStore, compose(applyMiddleware(thunk)));

export default store;

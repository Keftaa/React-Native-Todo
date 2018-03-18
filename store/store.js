import todosReducer from '../reducers/todosReducer';
import globalStateReducer from '../reducers/globalStateReducer';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
const store = createStore(combineReducers({todos: todosReducer, global: globalStateReducer}), applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga)
/*
DISPATCH EXAMPLE:
store.dispatch({ type: "ADD_TASK", task: {id: 1, text: 'hello'}});
*/
export default store;

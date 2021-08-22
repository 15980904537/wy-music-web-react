import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga'
import { rootSage } from './saga'
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSage)
export default store;

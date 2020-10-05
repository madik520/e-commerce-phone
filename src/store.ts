import { createStore,  applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { save } from 'redux-localstorage-simple';
import rootReducer from "./reducers/index";

  
const middleware = applyMiddleware(save({ namespace: 'todo-list' }));
const store =  createStore(
    rootReducer,
    composeWithDevTools(middleware)
);

export default store;
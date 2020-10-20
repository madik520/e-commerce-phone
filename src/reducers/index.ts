import { combineReducers } from 'redux';
import modalReducer  from './modalReducer';
import storeProductReducer from './storeProduct';

const rootReducer = combineReducers({
    storeProductReducer: storeProductReducer,
    modalReducer: modalReducer
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
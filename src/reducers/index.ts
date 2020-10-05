import { combineReducers } from 'redux';
import detailsReducer from './detailsReducer';

const rootReducer = combineReducers({
    detailsReducer: detailsReducer
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
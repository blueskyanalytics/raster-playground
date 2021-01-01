import { combineReducers } from 'redux';
import shapeReducer from './shape-reducer';

const reducers = combineReducers({
  shape: shapeReducer,
});

export default reducers;
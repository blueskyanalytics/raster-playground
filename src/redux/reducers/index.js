import { combineReducers } from 'redux';
import shapeData from './shape-data';

const rootReducer = combineReducers({
  shapeData: shapeData,
});

export default rootReducer;

import {
  UPDATE_SHAPE_DATA,
  RESET_SHAPE_DATA,
  RESET_ALL,
} from 'redux/action-types';

const initState = null;
const spatialData = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_SHAPE_DATA:
      return action.payload;
    case RESET_SHAPE_DATA:
      return initState;
    case RESET_ALL:
      return initState;
    default:
      return state;
  }
};

export default spatialData;

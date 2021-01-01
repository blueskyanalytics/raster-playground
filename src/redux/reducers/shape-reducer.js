import { UPDATE_SHAPE_DATA } from 'redux/types';

const initialShapeState = {
  type: '',
  data: '',
};

export function shapeReducer(currentState = initialShapeState, action) {
  switch (action.type) {
    case UPDATE_SHAPE_DATA:
      return action.payload;

    default:
      return initialShapeState;
  }
}

export default shapeReducer;

import { UPDATE_SHAPE_DATA, RESET_SHAPE_DATA } from 'redux/action-types';

export const updateShapeData = shape => ({
  type: UPDATE_SHAPE_DATA,
  payload: shape,
});

export const resetShapeData = () => ({
  type: RESET_SHAPE_DATA,
});

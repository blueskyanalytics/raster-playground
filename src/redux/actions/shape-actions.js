import { UPDATE_SHAPE_DATA } from 'redux/types';

export const updateShapeData = (payload = {}) => {
  return {
    type: UPDATE_SHAPE_DATA,
    payload: payload
  }
}
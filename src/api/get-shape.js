import { get } from 'axios';

const getShape = async url => {
  const res = await get(url);
  return res;
};
export default getShape;

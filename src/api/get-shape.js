import { get } from 'axios';

export default getShape = async url => {
  const res = await get(url);
  return res;
};

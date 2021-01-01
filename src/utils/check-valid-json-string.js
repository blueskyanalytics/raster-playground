const checkValidJSONString = json => {
  try{
    JSON.parse(json);
  }catch(_){
    return false;
  }
  
  return true;
}

export default checkValidJSONString;
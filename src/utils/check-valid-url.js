const checkValidUrl = url => {
  try {
    new URL(url);
  } catch (_) {
    return false;
  }

  return true;
};

export default checkValidUrl;

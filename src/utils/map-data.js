let baseLayer = {};

export const handleBaseMapChange = source => {
  baseLayer.source = source;
  baseLayer.source.refresh();
};

export const setBaseLayer = bLayer => {
  baseLayer = bLayer;
};

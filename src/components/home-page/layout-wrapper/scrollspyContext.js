import React, { useState, createContext } from 'react';

export const ScrollSpyContext = createContext();

export const ScrollSpyProvider = props => {
  const [isFeaturesVisible, setFeaturesVisible] = useState(false);

  return (
    <ScrollSpyContext.Provider value={[isFeaturesVisible, setFeaturesVisible]}>
      {props.children}
    </ScrollSpyContext.Provider>
  );
};

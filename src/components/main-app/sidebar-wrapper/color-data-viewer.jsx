import React, { useState, useEffect } from 'react';

import GenericContainer, {
  GenericCopyTextContainer,
} from './generic-container';

const ColorDataViewer = ({ data }) => {
  const [text, setText] = useState(JSON.stringify(data));

  useEffect(() => {
    if (data) setText(JSON.stringify(data));
  }, [data]);

  return (
    <GenericContainer heading="Color Data" id="color-data-viewer">
      <GenericCopyTextContainer text={text} setText={setText}>
        <span> {text} </span>
      </GenericCopyTextContainer>
    </GenericContainer>
  );
};

export default ColorDataViewer;

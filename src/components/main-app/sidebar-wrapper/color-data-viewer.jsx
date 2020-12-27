import React, { useState, useEffect } from 'react';
import { ReactComponent as CopyIcon } from 'assets/icons/copy.svg';

const ColorDataViewer = ({ data }) => {
  const [text, setText] = useState(JSON.stringify(data));
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (data) setText(JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    if (copied) {
      setTimeout(
        () => {
          setText(JSON.stringify(data));
          setCopied(false);
        },
        2000,
        setText,
        data
      );
    }
  }, [copied, data]);

  const copyText = e => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setText('Copied!');
  };

  return (
    <section id="color-data-viewer">
      <p>Color Data</p>
      <br />
      <div className="viewer">
        <span>{text}</span>
        <CopyIcon onClick={copyText} />
      </div>
    </section>
  );
};

export default ColorDataViewer;

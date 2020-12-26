import React, { useState } from 'react';
import { URL_COLOR_TYPE, URL_UPDATE_PUSH } from 'config';
import { StringParam, useQueryParam } from 'use-query-params';
import { useCopyToClipboard } from 'react-use';

export default function ColorDetails({ text }) {
  const [colorType, setColorType] = useQueryParam(URL_COLOR_TYPE, StringParam);
  const [clipboard, copyToClipboard] = useCopyToClipboard();
  const [copyText, setCopyText] = useState('Copy');

  const onCopy = () => {
    copyToClipboard(JSON.stringify(text, null, 2));
    setCopyText('Copied!');
    setTimeout(() => {
      setCopyText('Copy');
    }, 3000);
  };

  return (
    <div>
      <div>
        <label>Choose Color Type</label>
        <select
          className="select-box"
          name="color-tpye"
          value={colorType}
          onChange={e => {
            setColorType(e.target.value, URL_UPDATE_PUSH);
          }}
          defaultValue="rgba"
        >
          <option value="hex">Hex</option>
          <option value="rgba">RGBA</option>
          <option value="hsla">HSLA</option>
        </select>
        <button className="copy-button" onClick={onCopy}>
          {clipboard.error ? (
            <p>Unable to copy value: {clipboard.error.message}</p>
          ) : (
            <p>{copyText}</p>
          )}
        </button>
      </div>
      <br />
      <div className="break-overflow-word">{JSON.stringify(text)}</div>
    </div>
  );
}

import React from 'react';
import JSONPretty from 'react-json-pretty';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import * as JSONPrettyMon from 'react-json-pretty/dist/acai';

const OutputBox = ({ handleColorFormatChange, text }) => {
  return (
    <div>
      <select
        id="color-format"
        defaultValue="rgba"
        onChange={event => handleColorFormatChange(event)}
      >
        <option value="hex">HEX</option>
        <option value="rgba">RGBA</option>
        <option value="hsla">HSLA</option>
      </select>
      {/* <CopyToClipboard text={text}>
          <button className="copy-btn">Copy</button>
        </CopyToClipboard> */}
      <JSONPretty
        id="json-pretty"
        data={text}
        theme={JSONPrettyMon}
      ></JSONPretty>
    </div>
  );
};

export default OutputBox;

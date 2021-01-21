import React, { useState } from 'react';
import JSONPretty from 'react-json-pretty';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import * as JSONPrettyMon from 'react-json-pretty/dist/acai';
import { Collapse } from 'utils';

export default function ColorsOutput({ text, setColorFormat }) {
  const [toggleCollapse, setToggleCollapse] = useState(true);

  const handleColorFormatChange = event => {
    setColorFormat(event.target.value);
  };

  return (
    <>
      <Collapse
        title="Colors Output Box"
        toggleCollapse={toggleCollapse}
        setToggleCollapse={setToggleCollapse}
      />
      {toggleCollapse ? (
        true
      ) : (
        <>
          <div className="color-output-btns">
            <select
              id="color-format"
              defaultValue="rgba"
              onChange={event => handleColorFormatChange(event)}
            >
              <option value="hex">HEX</option>
              <option value="rgba">RGBA</option>
              <option value="hsla">HSLA</option>
            </select>
            <CopyToClipboard text={text}>
              <button className="copy-btn">Copy</button>
            </CopyToClipboard>
          </div>
          <JSONPretty
            id="json-pretty"
            data={text}
            theme={JSONPrettyMon}
          ></JSONPretty>
        </>
      )}
    </>
  );
}

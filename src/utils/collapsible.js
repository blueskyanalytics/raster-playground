import React from 'react';

export default function Collapse({ title, toggleCollapse, setToggleCollapse }) {
  return (
    <>
      <p
        className="collapsible-title"
        onClick={() => {
          setToggleCollapse(!toggleCollapse);
          console.log(toggleCollapse);
        }}
      >
        {title}
      </p>
    </>
  );
}

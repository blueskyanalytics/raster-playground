import React, { useState } from 'react';
import { ToggleSidebarData } from '../reusable';

export default function ColorDetails({ text }) {
  const [showData, onShowData] = useState(false);

  const toggleData = () => {
    onShowData(!showData);
  };
  return (
    <>
      <ToggleSidebarData
        heading="Color Details"
        showData={showData}
        toggleData={toggleData}
      />
      {showData ? <div>{JSON.stringify(text)}</div> : null}
    </>
  );
}

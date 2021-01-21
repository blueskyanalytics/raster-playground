import React, { useState } from 'react';
import OlInit from './ol-init';
import Sidebar from './sidebar';

export default function MainApp({ setTheme, theme }) {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <OlInit setShowSidebar={setShowSidebar} />
      {showSidebar ? (
        <Sidebar
          setShowSidebar={setShowSidebar}
          setTheme={setTheme}
          theme={theme}
        />
      ) : (
        false
      )}
    </>
  );
}

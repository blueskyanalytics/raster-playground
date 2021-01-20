import React from 'react';
import OlInit from './ol-init';
import Sidebar from './sidebar';

export default function MainApp({ setTheme, theme }) {
  return (
    <>
      <OlInit />
      <Sidebar setTheme={setTheme} theme={theme} />
    </>
  );
}

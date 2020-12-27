import { URL_COLORS, URL_OPACITY } from 'config';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StringParam, useQueryParam } from 'use-query-params';
import { copyColor, getColorsArray } from 'utils';

import { ReactComponent as AppIcon } from 'assets/icons/app.svg';
import { ReactComponent as CloseIcon } from 'assets/icons/close.svg';

import {
  TilesInput,
  ShapeInput,
  ColorsInput,
  AlphaInput,
  ColorDataViewer,
} from './sidebar-wrapper';

const SidebarOpenButton = props => {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        rotateZ: 20,
        transition: {
          duration: 1,
        },
      }}
      whileTap={{
        scale: 0.8,
        transition: {
          duration: 0.5,
        },
      }}
      animate={{
        scale: 1,
        opacity: 1,
        transition: {
          delay: 2,
          type: 'spring',
          stiffness: 50,
        },
      }}
      exit={{
        opacity: 0,
        scale: 0,
        transition: {
          type: 'spring',
          stiffness: 50,
        },
      }}
      id="sidebar-open-button"
      {...props}
    >
      <AppIcon />
    </motion.div>
  );
};

const SidebarCloseButton = props => {
  return (
    <motion.div
      id="sidebar-close-button"
      {...props}
      whileHover={{
        scale: 0.9,
        rotate: 10,
        transition: {
          duration: 1,
        },
      }}
      whileTap={{
        scale: 0.8,
        rotate: 10,
        transition: {
          duration: 1,
        },
      }}
    >
      <CloseIcon />
    </motion.div>
  );
};

export default function Sidebar() {
  const [colors] = useQueryParam(URL_COLORS, StringParam);
  const [opacity] = useQueryParam(URL_OPACITY, StringParam);
  const [text, setText] = useState('');

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const colorArray = getColorsArray(colors);
    setText(copyColor(colorArray, opacity));
  }, [colors, opacity]);

  return (
    <>
      <AnimatePresence>
        {!open && (
          <SidebarOpenButton
            onClick={() => {
              setOpen(true);
            }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            className="sidebar"
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            exit={{ x: -500 }}
            transition={{
              delay: 0.25,
              type: 'spring',
              stiffness: 40,
              restDelta: 2,
            }}
          >
            <div className="sidebar-wrapper">
              <h1 className="logo">
                Raster<span>Playground</span>
              </h1>
              <SidebarCloseButton onClick={() => setOpen(false)} />
              <ShapeInput />
              <TilesInput />
              <ColorsInput />
              <AlphaInput />
              <ColorDataViewer data={text} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

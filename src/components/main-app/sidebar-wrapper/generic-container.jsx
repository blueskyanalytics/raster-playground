import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ReactComponent as CopyIcon } from 'assets/icons/copy.svg';

const GenericContainer = ({ children, heading, id }) => {
  const [open, setOpen] = useState(false);

  return (
    <section id={id} className="sidebar-section-container">
      <motion.header
        className={open ? 'open' : 'close'}
        onClick={() => setOpen(!open)}
      >
        {heading}
      </motion.header>
      {open && <motion.main> {children} </motion.main>}
    </section>
  );
};

export const GenericCopyTextContainer = ({ children, text, setText }) => {
  const [copied, setCopied] = useState();

  useEffect(() => {
    if (copied) {

      const originalText = text;
      setText('Copied!');

      setTimeout(
        () => {
          setText(originalText);
          setCopied(false);
        },
        200,
        setText,
        originalText
      );
    }
  }, [copied, text, setText]);

  const copyText = e => {
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <>
      {children}
      <CopyIcon onClick={copyText} />
    </>
  );
};

export default GenericContainer;

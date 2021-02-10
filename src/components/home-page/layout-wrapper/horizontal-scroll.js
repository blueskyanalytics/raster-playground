import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const TallOuterContainer = styled.div.attrs(({ dynamicHeight }) => ({
  style: { height: `${dynamicHeight}px` }
}))`
  position: relative;
  width: 100%;
`;

/*contains the horizontal scroll container */
const StickyInnerContainer = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
`;

const HorizontalScrollContainer = styled.div.attrs(({ translateX }) => ({
  style: { transform: `translateX(${translateX}px)` }
}))`
  position: absolute;
  height: 100%;
  will-change: transform;
`;

const calcDynamicHeight = objectWidth => {
  const viewWidth = window.innerWidth;
  const viewHeight = window.innerHeight;
  return objectWidth - viewWidth + viewHeight + 170;
};

const handleDynamicHeight = (ref, setDynamicHeight) => {
  const objectWidth = ref.current.scrollWidth;
  const dynamicHeight = calcDynamicHeight(objectWidth);
  setDynamicHeight(dynamicHeight);
};

const applyScrollListener = (ref, setTranslateX) => {
  window.addEventListener("scroll", () => {
    const offsetTop = -ref.current.offsetTop;
    setTranslateX(offsetTop);
  });
};

export default function HorizontalScroll ({ children }) {
  /*dynamic height is the width of the horizontal scroll container*/
  const [dynamicHeight, setDynamicHeight] = useState(null);
  const [translateX, setTranslateX] = useState(0);

  const container = useRef();
  const object = useRef();

  const resizeHandler = () => {
    handleDynamicHeight(object, setDynamicHeight);
  };

  useEffect(() => {
    handleDynamicHeight(object, setDynamicHeight);
    window.addEventListener("resize", resizeHandler);
    applyScrollListener(container, setTranslateX);
  }, [dynamicHeight, translateX]);

  return (
    <TallOuterContainer dynamicHeight={dynamicHeight}>
      <StickyInnerContainer ref={container}>
        <HorizontalScrollContainer translateX={translateX} ref={object}>
          {children}
        </HorizontalScrollContainer>
      </StickyInnerContainer>
    </TallOuterContainer>
  );
}

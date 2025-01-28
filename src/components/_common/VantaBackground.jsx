import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import CLOUDS from "vanta/dist/vanta.rings.min";
import BIRDS from "vanta/dist/vanta.birds.min";

const VantaBackground = ({ children, styling, opacity = 0.8, type }) => {
  const vantaRef = useRef();
  useEffect(() => {
    let effect;
    if (vantaRef.current) {
      if (type) {
        effect = BIRDS({
          el: vantaRef.current,
          THREE,
          backgroundAlpha: opacity,
          color: 'black'
        });
      } else {
        effect = CLOUDS({
          el: vantaRef.current,
          THREE,
          backgroundAlpha: opacity,
        });
      }
    }
    return () => {
      if (effect) effect.destroy();
    };
  }, []);
  return (
    <div ref={vantaRef} className={styling}>
      {children}
    </div>
  );
};

export default VantaBackground;

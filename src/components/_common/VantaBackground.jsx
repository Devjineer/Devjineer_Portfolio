import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import CLOUDS from "vanta/dist/vanta.rings.min";

const VantaBackground = ({ children, styling }) => {
  const vantaRef = useRef();
  useEffect(() => {
    let effect;
    if(vantaRef.current) {
      effect = CLOUDS({
        el: vantaRef.current,
        THREE,
        backgroundAlpha: 0.8,
      })
    }
    return () => {
      if(effect) effect.destroy()
    }
  }, []);
  return (
    <div ref={vantaRef} className={styling}>
      {children}
    </div>
  );
};

export default VantaBackground;

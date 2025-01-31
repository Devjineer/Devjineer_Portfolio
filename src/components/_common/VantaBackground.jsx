import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import RINGS from "vanta/dist/vanta.rings.min";
import CLOUDS from "vanta/dist/vanta.clouds.min";
import GLOBE from "vanta/dist/vanta.globe.min";

const VantaBackground = ({ children, styling, opacity = 0.8, type }) => {
  const vantaRef = useRef();
  useEffect(() => {
    let effect;
    if (vantaRef.current) {
      if (type) {
        effect = CLOUDS({
          el: vantaRef.current,
          THREE,
          backgroundAlpha: opacity,
          speed: 2, sunColor: 'red'
        });
      } else {
        RINGS({
          el: vantaRef.current,
          THREE,
          backgroundAlpha: opacity,
        });
      }
    }
    return () => {
      if (effect) effect.destroy();
    };
  }, [opacity]);
  return (
    <div ref={vantaRef} className={styling}>
      {children}
    </div>
  );
};

export default VantaBackground;

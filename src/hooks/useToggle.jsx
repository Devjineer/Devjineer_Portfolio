import { useState } from "react";

const useToggle = () => {
  const [toggleShow, setToggleShow] = useState(false);
  const toggleOn = () => setToggleShow(true);
  const toggleOff = () => setToggleShow(false);
  const toggleToAndFro = () => setToggleShow((prev) => !prev);

  return {
    toggleShow,
    toggleOff,
    toggleOn,
    toggleToAndFro,
  };
};

export default useToggle;

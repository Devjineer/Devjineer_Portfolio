import React, { useEffect, useState } from "react";
import { Button, IconWrapper } from ".";
import { icons } from "@/constants";

const PhotoSlide = ({ photos }) => {
  const [activeIndex, setPhotoIndex] = useState(0);

  const nextPhoto = () => {
    setPhotoIndex((prev) => ++prev);
  };

  const prevPhoto = () => {
    setPhotoIndex((prev) => --prev);
  };

  useEffect(() => {
    const lengthOfPhotos = photos.length;
    if (activeIndex > lengthOfPhotos - 1) {
      setPhotoIndex(lengthOfPhotos - 1);
    }
    if (activeIndex < 0) {
      setPhotoIndex(0);
    }
  }, [activeIndex, photos]);

  return (
    <div className="h-[200px] lg:h-96 relative">
      <Button
        iconLeft={icons.direction}
        iconStyle="size-6 lg:size-10"
        variant="clear"
        styling="absolute top-1/2 -translate-y-1/2 p-0 left-3"
        onClick={prevPhoto}
      />

      {photos.map((item, index) => {
        let styling = "opacity-0";
        if (index === activeIndex) {
          styling = "opacity-100";
        }

        return (
          <IconWrapper
            src={item}
            key={index}
            styling={`-z-10 absolute h-full w-full top-0 left-0 ${styling}`}
            iconStyle=""
          />
        );
      })}

      <Button
        iconLeft={icons.direction}
        iconStyle="size-6 lg:size-10"
        variant="clear"
        styling="absolute right-4 top-1/2 -translate-y-1/2 p-0 rotate-180"
        onClick={nextPhoto}
      />
    </div>
  );
};

export default PhotoSlide;

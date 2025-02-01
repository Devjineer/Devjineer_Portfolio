import { Paragraphing, PhotoSlide, Stack } from "../_common";
import { DevGridItem } from "../_custom";

const aboutCardStyling = {
  1: "lg:pe-4 py-4",
  2: "",
  3: "",
};

const AboutCard = ({ summary, title, photos, stack, id }) => {
  const displayContent = () => {
    switch (id) {
      case 1:
        return <Paragraphing paragraphs={summary}/>
      case 2:
        return <PhotoSlide photos={photos} />;
      case 3:
        return <Stack stacks={stack} />;
      default:
        return <>no way</>;
    }
  };

  return (
    <DevGridItem styling={aboutCardStyling[id]}>{displayContent()}</DevGridItem>
  );
};

export default AboutCard;

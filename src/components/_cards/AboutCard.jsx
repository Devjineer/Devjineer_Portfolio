import { PhotoSlide, Stack } from "../_common";
import { DevGridItem } from "../_custom";

const aboutCardStyling = {
  1: "pe-4 py-4",
  2: "border",
  3: "border",
};

const AboutCard = ({ summary, title, photos, stack, id }) => {
  const displayContent = () => {
    switch (id) {
      case 1:
        return <p className="text-base">{summary}</p>;
      case 2:
        return <PhotoSlide />;
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

import { XpCard } from ".";
import { Paragraphing, PhotoSlide, Stack } from "../_common";
import { DevGridItem } from "../_custom";
import { RegularList } from "../_design-patterns";

const aboutCardStyling = {
  1: "lg:pe-4 py-4",
  2: "",
  3: "",
  4: "lg:col-span-2 lg:flex space-y-5 lg:space-y-0  items-center justify-between gap-x-5 lg:mt-4",
};

const AboutCard = ({ summary, title, photos, stack, id, experiences }) => {
  const displayContent = () => {
    switch (id) {
      case 1:
        return <Paragraphing paragraphs={summary} />;
      case 2:
        return <PhotoSlide photos={photos} />;
      case 4:
        return (
          <>
            <span className="damion text-2xl lg:text-4xl underline">
              Experience
            </span>
            <RegularList
              data={experiences}
              component={XpCard}
              styling="flex-1 p-5 rounded-lg shadow-2xl"
            />
          </>
        );
      default:
        // return <Stack stacks={stack} />;
        return null;
    }
  };

  return (
    <DevGridItem styling={aboutCardStyling[id]}>{displayContent()}</DevGridItem>
  );
};

export default AboutCard;

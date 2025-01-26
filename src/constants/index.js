import menu from "../assets/icons/menu.svg";
import arrow from "../assets/icons/arrow.svg";

// images
import wavyBg from "../assets/images/wavy-lines.png";

const icons = { menu, arrow };

const images = { wavyBg };

const navlinks = [
  { title: "Home" },
  { title: "About Us" },
  { title: "Services" },
  { title: "Gallery" },
  { title: "Testimonials" },
];

const heroTitle = "Building the Future of User Experience, One Pixel at a Time";

const whatIDoDesc =
  "I specialize in crafting cutting-edge mobile apps and dynamic web applications using React. With a strong engineering background, I bring a blend of technical expertise, creativity, and problem-solving skills to every project. From conceptualization to deployment, I deliver seamless and user-friendly solutions tailored to meet your unique needs.";

const services = [
  {
    id: 1,
    title: "Mobile App Development",
    description:
      "Building user-friendly and performance-optimized mobile applications using React Native.",
  },
  {
    id: 2,
    title: "Web App Development",
    description:
      "Creating dynamic and responsive web applications with React, tailored to meet client needs.",
  },
  {
    id: 30,
    title: "Mechatronics Engineering",
    description:
      "Offering expertise in Mechatronics, combining mechanical, electronics, and computing to innovate and solve technical challenges.",
  },
];

export { icons, images, navlinks, heroTitle, whatIDoDesc, services };

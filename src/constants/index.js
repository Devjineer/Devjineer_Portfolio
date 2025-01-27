import arrow from "../assets/icons/arrow.svg";
import drill from "../assets/icons/drill.svg";
import direction from "../assets/icons/direction.svg";
import fbIcon from "../assets/icons/fbIcon.svg";
import github from "../assets/icons/github.svg";
import insta from "../assets/icons/insta.svg";
import laptop from "../assets/icons/laptop.svg";
import linkedIn from "../assets/icons/linked.svg";
import menu from "../assets/icons/menu.svg";
import mobile from "../assets/icons/mobile.svg";
import twitterIcon from "../assets/icons/x_dark.svg";

// images
import wavyBg from "../assets/images/wavy-lines.png";

const icons = {
  arrow,
  direction,
  drill,
  fbIcon,
  github,
  insta,
  laptop,
  linkedIn,
  menu,
  mobile,
  twitterIcon,
};

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
    icon: icons.mobile,
    title: "Mobile App Development",
    description:
      "Building user-friendly and performance-optimized mobile applications using React Native.",
  },
  {
    id: 2,
    icon: icons.laptop,
    title: "Web App Development",
    description:
      "Creating dynamic and responsive web applications with React, tailored to meet client needs.",
  },
  {
    id: 3,
    icon: icons.drill,
    title: "Mechatronics Engineering",
    description:
      "Offering expertise in Mechatronics, combining mechanical, electronics, and computing to innovate and solve technical challenges.",
  },
];

const recentWorksDesc =
  "Dive into my latest projects showcasing cutting-edge design, advanced development, and creative solutions.";

const footerDesc =
  "Amet morbi justo facilisis integer odio eu feugiat egestas nulla a ipsum morbi iaculis urna nunc.";

const ownerInfo = {
  email: "Josemariaofurum@gmail.com",
  address: "Lagos State, Nigeria",
  phone: "+234 816 750 4874",
};

const socialLinks = [
  { id: 1, icon: icons.fbIcon, href: "/" },
  { id: 2, icon: icons.twitterIcon, href: "/" },
  { id: 3, icon: icons.insta, href: "/" },
  { id: 4, icon: icons.linkedIn, href: "/" },
  { id: 5, icon: icons.github, href: "/" },
];

const quickLinks = [
  { id: 1, title: "About Me", href: "/" },
  { id: 2, title: "My Works", href: "/" },
  { id: 3, title: "Capabilities", href: "/" },
];

const projects = [
  {
    id: 1,
    title: "Project 1",
    styling:
      "lg:col-span-2 border h-[200px] lg:h-96 lg:rounded-tl-2xl rounded-md",
  },
  {
    id: 2,
    title: "Project 2",
    styling: "border h-[200px] lg:h-96 lg:rounded-tr-2xl rounded-md",
  },
  {
    id: 3,
    title: "Project 3",
    styling: "border h-[200px] lg:h-96 lg:rounded-bl-2xl rounded-md",
  },
  { id: 4, title: "Project 4", styling: "border h-[200px] lg:h-96" },
  {
    id: 4,
    title: "Project 5",
    styling: "border h-[200px] lg:h-96 lg:rounded-br-2xl rounded-md",
  },
];

export {
  icons,
  images,
  navlinks,
  heroTitle,
  whatIDoDesc,
  services,
  recentWorksDesc,
  footerDesc,
  ownerInfo,
  socialLinks,
  quickLinks,
  projects,
};

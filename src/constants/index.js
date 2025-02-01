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
import cloudinary from "../assets/icons/cloudinary.svg";
import javascript from "../assets/icons/javascript.svg";
import react from "../assets/icons/react.svg";
import reactrouter from "../assets/icons/reactrouter.svg";
import redux from "../assets/icons/redux.svg";
import typescript from "../assets/icons/typescript.svg";
import twitterIcon from "../assets/icons/x_dark.svg";

// images
import wavyBg from "../assets/images/wavy-lines.png";
import project1 from "../assets/images/project1.jpg";
import project2 from "../assets/images/project2.jpg";
import project3 from "../assets/images/project3.png";
import project4 from "../assets/images/project4.jpg";

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

const images = { wavyBg, project1, project2, project3, project4 };

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
    company: "Techies Collabs And Upskill",
    stack: [],
    projectImage: images.project1,
    title: "EcoRide",
    styling:
      "lg:col-span-2 border h-[200px] lg:h-96 lg:rounded-tl-2xl rounded-md",
  },
  {
    id: 2,
    company: "WAGMI",
    stack: [],
    projectImage: images.project2,
    title: "Dream House Renovations",
    styling: "border h-[200px] lg:h-96 lg:rounded-tr-2xl rounded-md",
  },
  {
    id: 3,
    company: "Personal Project",
    stack: [],
    projectImage: images.project3,
    title: "Braniac",
    styling: "border h-[200px] lg:h-96 lg:rounded-bl-2xl rounded-md",
  },
  {
    id: 4,
    company: "Personal Project",
    stack: [],
    projectImage: images.project4,
    title: "Apple Site",
    styling: "border h-[200px] lg:h-96",
  },
];

const aboutItems = [
  {
    id: 1,
    summary: [
      "I'm Josemaria Sopuruchukwu Ofurum, a Mechanical Engineer who discovered a new passion: web development.  While my formal education focused on the mechanics of the physical world, my curiosity and drive led me to explore the world of code.",
      'This journey has transformed me into a "Devjineer," a unique blend of engineering principles and technical proficiency. I thrive on using my diverse skillset and a range of development tools to create visually appealing and functional web experiences.',
      "My engineering background gives me a strong foundation in problem-solving and a meticulous approach to development, allowing me to build robust and innovative solutions.",
    ],
  },
  { id: 2, title: "Photo", photos: [project1, project2, project3, project4] },
  {
    id: 3,
    stack: [cloudinary, javascript, react, reactrouter, redux, typescript],
  },
];

export {
  aboutItems,
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

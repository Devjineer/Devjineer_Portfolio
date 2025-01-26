import menu from "../assets/icons/menu.svg";
import arrow from "../assets/icons/arrow.svg";
import fbIcon from "../assets/icons/fbIcon.svg";
import insta from "../assets/icons/insta.svg";
import twitterIcon from "../assets/icons/twitterIcon.svg";

// images
import wavyBg from "../assets/images/wavy-lines.png";

const icons = { menu, arrow, twitterIcon, insta, fbIcon };

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
    id: 3,
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
];

const quickLinks = [
  { id: 1, title: "About Me", href: "/" },
  { id: 2, title: "My Works", href: "/" },
  { id: 3, title: "Capabilities", href: "/" },
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
  quickLinks
};

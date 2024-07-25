import { Project } from "../../types/project";

export const onewaytravel: Project = {
  name: "OneWayTravel",
  description: `This custom-built solution caters to the specific needs and branding
   of Onewaytravel using NEXT.JS and is styled withTailwind CSS. The application is hosted
    on Vercel and is fully responsive. A few features to note with this project are lazy loading images.`,
  framework: "Next JS",
  image: "/oneWayTravel.webp",
  video: "/oneWayTravelVideo.mp4",
  url: "https://one-way.info/",
  technologies: [
    "Next JS",
    "Tailwind CSS",
    "Typescript",
    "Framer-Motion",
    "Yup",
    "nodemailer",
  ],
};

export const shonenShop: Project = {
  name: "PachusShop",
  description: `This project  in Next JS and accessing API endpoints. This app was built using Next JS and is hosted on Vercel.`,
  framework: "Next JS",
  image: "/pashusShop.png",
  url: "https://pachusshop.vercel.app/",
  code: "https://github.com/AgredaLuis/Shonen-shop",
  technologies: ["next JS", "Tailwind", "Typescript", "Prisma", "Zod"],
};

export const ImageCompress: Project = {
  name: "ImageCompress",
  description: `Application made for developers who can integrate this API into their projects, you can also use the app to reduce the weight of the images.`,
  framework: "Next JS",
  image: "/imageCompress.webp",
  video: "/imageCompress.mp4",
  url: "https://imagecompress-eight.vercel.app/",
  code: "https://github.com/AgredaLuis/imagecompress",
  technologies: ["React JS", "Tailwind", "Typescript", "Vercel", "Toastify"],
};

export const SaasLandingPage: Project = {
  name: "SaasLandingPage",
  description: `This project is an implementation of a SaaS website using Next.js, Tailwind CSS, and Framer Motion. The design is based on the Figma UI kit [https://www.figma.com/community/file/1347551304372055519/saas-website-ui-kit-framer-website-kit] and was developed following tutorials from Frontend Tribe.`,
  framework: "Next JS",
  image: "/saasLadingPage.png",
  url: "https://saas-landing-framer.vercel.app/",
  code: "https://github.com/AgredaLuis/saas-landing-framer",
  technologies: [
    "Next JS",
    "Tailwind",
    "Typescript",
    "Vercel",
    "Framer-Motion",
  ],
};

export function getProjects(id: string) {
  switch (id) {
    case onewaytravel.name.toLowerCase():
      return onewaytravel;
    case shonenShop.name.toLowerCase():
      return shonenShop;
    case ImageCompress.name.toLowerCase():
      return ImageCompress;
    case SaasLandingPage.name.toLowerCase():
      return SaasLandingPage;
    default:
      return false;
  }
}

import { Project } from "../../types/project";

export const onewaytravel: Project = {
  name: "OneWayTravel",
  description: `This custom-built solution caters to the specific needs and branding
   of Onewaytravel using NEXT.JS and is styled withTailwind CSS. The application is hosted
    on Vercel and is fully responsive. A few features to note with this project are lazy loading images using
    the Image component, built in routing. `,
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
  description: `I built this app to demonstrate knowledge working in Next JS and accessing API endpoints. This app was built using Next JS and is hosted on Vercel.`,
  framework: "Next JS",
  image: "/shonenShop.webp",
  url: "https://pachusshop.vercel.app/",
  code: "https://github.com/AgredaLuis/Shonen-shop",
  technologies: ["next JS", "Tailwind", "Typescript", "Prisma", "Zod"],
};

export const ImageCompress: Project = {
  name: "ImageCompress",
  description: `I built this app to demonstrate knowledge working in Next JS and
  accessing API endpoints. This app was built using Next JS and is
  hosted on Vercel. This application was built using the Image conversion & optimization API.`,
  framework: "Next JS",
  image: "/imageCompress.webp",
  video: "/imageCompress.mp4",
  url: "https://imagecompress-eight.vercel.app/",
  code: "https://github.com/AgredaLuis/imagecompress",
  technologies: ["React JS", "Tailwind", "Typescript", "Vercel", "Toastify"],
};

export function getProjects(id: string) {
  switch (id) {
    case onewaytravel.name.toLowerCase():
      return onewaytravel;
    case shonenShop.name.toLowerCase():
      return shonenShop;
    case ImageCompress.name.toLowerCase():
      return ImageCompress;
    default:
      return false;
  }
}

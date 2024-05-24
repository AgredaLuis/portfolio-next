import { Project } from "../../types/project";

export const onewaytravel: Project = {
  name: "OneWayTravel",
  description: `This custom-built solution caters to the specific needs and branding
   of Onewaytravel using NEXT.JS and is styled withTailwind CSS. The application is hosted
    on Vercel and is fully responsive. A few features to note with this project are lazy loading images using
    the Image component, built in routing. `,
  framework: "Next JS",
  image: "/oneWayTravel.png",
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

export const Gericht: Project = {
  name: "Gericht",
  description: `Restaurant website. This project is built with React JS, Sass, Javascript and Vite. The application is hosted on Github pages,built using a wireframe made in figma.`,
  framework: "React JS",
  image: "/restaurante.png",
  url: "https://agredaluis.github.io/gerich-restaurant/",
  code: "https://github.com/AgredaLuis/gerich-restaurant",
  technologies: ["React JS", "Sass", "Javascript", "Vite"],
};

export const ImageCompress: Project = {
  name: "ImageCompress",
  description: `I built this app to demonstrate knowledge working in Next JS and
  accessing API endpoints. This app was built using Next JS and is
  hosted on Vercel. This application was built using the Image conversion & optimization API.`,
  framework: "Next JS",
  image: "/imageCompress.png",
  /* video: "/imageCompress.mp4", */
  url: "https://imagecompress-eight.vercel.app/",
  code: "https://github.com/AgredaLuis/imagecompress",
  technologies: ["React JS", "Tailwind", "Typescript", "Vercel", "Toastify"],
};

export function getProjects(id: string) {
  switch (id) {
    case onewaytravel.name.toLowerCase():
      return onewaytravel;
    case Gericht.name.toLowerCase():
      return Gericht;
    case ImageCompress.name.toLowerCase():
      return ImageCompress;
    default:
      return false;
  }
}

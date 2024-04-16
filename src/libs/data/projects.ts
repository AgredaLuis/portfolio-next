import { Project } from "../../types/project";

export const onewaytravel: Project = {
  name: "OneWayTravel",
  description: `This custom-built solution caters to the specific needs and branding
   of Onewaytravel using NEXT.JS and is styled withTailwind CSS. The application is hosted
    on Vercel and is fully responsive. A few features to note with this project are lazy loading images using
    the Image component, built in routing. `,
  framework: "Next JS",
  video: "/oneWayTravelVideo.mp4",
  image: "/oneWayTravel.png",
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

export const Gericht = {
  name: "Gericht",
  description: `Restaurant website. This project is built with React JS, Sass, Javascript and Vite. The application is hosted on Github pages,built using a wireframe made in figma.`,
  framework: "React JS",
  image: "/restaurante.png",
  url: "https://agredaluis.github.io/gerich-restaurant/",
  code: "https://github.com/AgredaLuis/gerich-restaurant",
  technologies: ["React JS", "Sass", "Javascript", "Vite"],
};

export const Mealsapp = {
  name: "mealsApp",
  description: `I built this app to demonstrate knowledge working in React JS and
  accessing API endpoints. This app was built using React JS and is
  hosted on Github pages. Another feature of this
  application is dynamic routing through the &quot;React Router DOM&quot;
  package. This application was built using the TheMealsDB API.`,
  framework: "React JS",
  image: "/mealsApp.png",
  url: "https://agredaluis.github.io/gerich-restaurant/",
  code: "https://github.com/AgredaLuis/gerich-restaurant",
  technologies: ["React JS", "Sass", "Javascript", "Vite", "React-Context"],
};

export function getProjects(id: string) {
  switch (id) {
    case onewaytravel.name.toLowerCase():
      return onewaytravel;
    case Gericht.name.toLowerCase():
      return Gericht;
    case Mealsapp.name.toLowerCase():
      return Mealsapp;
    default:
      return false;
  }
}

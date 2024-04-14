import React from "react";

import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full py-4 bg-black rounded-t-[70px] text-white flex items-center justify-center"
    >
      <div className="max-w-[1240px] px-8 py-16">
        <p className="text-xl m-auto tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4 md:mx-2 text-4xl">Selected Work&apos;s</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <ProjectItem
            title="Gericht Restaurant"
            backgroundImg="/restaurante.png"
            projectUrl="/restaurant"
            tech="React JS"
          />
          <ProjectItem
            title="OneWayTravel"
            backgroundImg="/oneWayTravel.png"
            backgroundVideo="/oneWayTravelVideo.mp4"
            projectUrl="/OneWayTravel"
            tech="Next Js"
          />
          <ProjectItem
            title="Meals App"
            backgroundImg="/mealsApp.png"
            projectUrl="/SocialMedia"
            tech="React JS"
          />
          {/*
          <ProjectItem
            title='Twitch UI'
            backgroundImg=""
            projectUrl='/twitch'
            tech='Next JS' />*/}
        </div>
      </div>
    </div>
  );
};

export default Projects;


import React from "react";

import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full py-4 bg-black rounded-t-[30px] text-white">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-6 ">Selected Work&apos;s</h2>
        <div className="grid md:grid-cols-2 gap-8">
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

import React from "react";

import ProjectItem from "../../components/ProjectItem";
import { projectsUrls } from "@/libs";


const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full py-4 bg-black md:rounded-t-[70px] text-white flex items-center justify-center"
    >
      <div className="max-w-[1240px] px-8 py-16">
        <h3 className="text-xl font-bold m-auto tracking-widest uppercase text-[#9391ED] lg:text-4xl">
          Projects
        </h3>
        <h2 className="py-4 md:mx-2 text-4xl">Selected Work&apos;s</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-6">
          {projectsUrls.map((project) => (
            <ProjectItem
              key={project.title}
              title={project.title}
              arial={project.arial}
              backgroundImg={project.backgroundImg}
              //backgroundVideo={project.backgroundVideo ?? ""}
              projectUrl={project.url}
              tech={project.tech}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

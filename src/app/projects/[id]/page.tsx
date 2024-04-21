"use client";
import { FaArrowLeft, FaCircleCheck } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import { getProjects } from "@/libs/data/projects";
import { Project } from "@/types/project";

const ProjectPage = () => {
  const params = useParams();

  const ProjectName  = getProjects((params.id as string).toLocaleLowerCase());

  console.log(ProjectName)

  if (!ProjectName) {
    notFound();
  }

  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />

        {/* Banner of video o Image */}

        {ProjectName.video ? (
          <video
            src={ProjectName.video}
            autoPlay
            loop
            muted
            className="relative object-cover w-full h-full"
          />
        ) : (
          <Image
            className="absolute object-cover"
            fill
            src={ProjectName.image}
            alt="/"
          />
        )}

        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">{ProjectName.name}</h2>
          <h3>{ProjectName.framework}</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p className="uppercase text-[#5651e5]">Project</p>
          <h2>Overview</h2>
          <p>{ProjectName.description}</p>
          <a href={ProjectName.url} target="_blank" rel="noreferrer">
            <button aria-label="Visit de page online" className="py-3 px-8 mt-4 mr-8 text-sm">Visit</button>
          </a>
          {ProjectName.code ? (
            <a href={ProjectName.code} target="_blank" rel="noreferrer">
              <button aria-label="Go to code" className="px-8 py-3 mt-4 text-sm">Code</button>
            </a>
          ) : null}
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>

            {/* Techs */}
            <div className="grid grid-cols-3 md:grid-cols-1">
              {ProjectName.technologies.map((tech) => (
                <p key={tech} className="text-gray-600 py-2 flex items-center">
                  <FaCircleCheck className="pr-1 " /> {tech}
                </p>
              ))}
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <button aria-label="Return to projects" className=" px-8 py-3">
            <FaArrowLeft size={20} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectPage;

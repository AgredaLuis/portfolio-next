import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  backgroundImg: string;
  backgroundVideo?: string;
  tech: string;
  projectUrl: string;
}

const ProjectItem = ({
  title,
  backgroundImg,
  tech,
  backgroundVideo,
  projectUrl,
}: Props) => {
  return (
    <div className=" flex items-center justify-center h-auto w-full rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <div className="relative h-full w-full">
        {backgroundVideo ? (
          <video
            lang="en"
            
            preload="auto"
            src={backgroundVideo}
            autoPlay
            loop
            muted
            className="w-full h-full rounded-xl group-hover:opacity-10 object-cover"
          />
        ) : (
          <Image
            className="rounded-xl group-hover:opacity-10 object-cover"
            src={backgroundImg}
            alt="Project photo of one of our projects"
            width={600}
            height={600}
          />
        )}
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3 className="text-2xl text-white tracking-wider text-center">
            {title}
          </h3>
          <p className="pb-4 pt-2 text-white text-center">{tech}</p>
          <Link href={projectUrl}>
            <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer hover:scale-110 ease-in duration-300">
              More Info
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;

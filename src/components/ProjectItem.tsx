import Link from "next/link";
import React from "react";
import { ImageItem } from "./ImageItem";

interface Props {
  title: string;
  arial: string;
  backgroundImg: string;
  backgroundVideo?: string;
  tech: string;
  projectUrl: string;
}

const ProjectItem = ({
  title,
  arial,
  backgroundImg,
  tech,
  backgroundVideo,
  projectUrl,
}: Props) => {
  return (
    <div className="relative flex justify-center rounded-xl hover:cursor-pointer group">
      <div className="relative ease-in-out duration-300">
        {/* background image */}
        <ImageItem
          backgroundImg={backgroundImg}
          backgroundVideo={backgroundVideo}
          arial={`${title} image`}
        />
      </div>
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#5651e5] to-[#709dff] opacity-0 group-hover:opacity-90 transition-opacity duration-500"></div>
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{tech}</p>
        <Link href={projectUrl} aria-label={arial}>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer hover:scale-110 ease-in duration-300">
            See more
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;

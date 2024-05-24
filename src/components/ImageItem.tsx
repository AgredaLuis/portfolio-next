import React from "react";
import Image from "next/image";

interface Props {
  backgroundImg: string;
  backgroundVideo?: string;
  arial: string;
}
export const ImageItem = ({ backgroundImg, backgroundVideo, arial }: Props) => {
  return (
    <div className="min-h-[250px] max-h-[350px] w-full flex items-center justify-center rounded-xl group-hover:opacity-10">
      {backgroundVideo ? (
        <video
          lang="en"
          aria-label={arial}
          src={backgroundVideo}
          autoPlay
          loop
          muted
          className="rounded-xl h-full w-full"
        />
      ) : (
        <Image
          className="rounded-xl h-full object-fill"
          src={backgroundImg}
          alt="Project photo of one of our projects"
          loading="lazy"
          width={600}
          height={600}
        />
      )}
    </div>
  );
};

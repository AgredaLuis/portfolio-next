import React from "react";
import Image from "next/image";

interface Props {
  backgroundImg: string;
  backgroundVideo?: string;
  arial: string;
}
export const ImageItem = ({ backgroundImg, backgroundVideo, arial }: Props) => {
  return (
    <div className="h-full max-h-[330px] w-full flex items-center justify-center rounded-xl">
      <Image
        className="rounded-xl h-full object-cover"
        src={backgroundImg}
        alt="Project photo of one of our projects"
        loading="lazy"
        width={600}
        height={600}
      />
    </div>
  );
};

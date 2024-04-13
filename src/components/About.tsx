import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="w-full px-4 flex items-center py-16 md:px-6">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-6 bg-black p-8 rounded-[3rem] ">
        <div className="col-span-2 ">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4 text-white">What I Do</h2>
          <p className="py-2 text-white ">
            I specialize in building (and occasionally designing) mobile
            responsive front-end UI applications that connect with API’s and
            other backend technologies. I create custom-coded websites that are
            tailored to your brand. I Focus on accessibility, performance,
            scalability, I also optimize your online presence to elevate
            your visibility in search rankings
          </p>
          <div className="m-4 h-px bg-white"></div>
          <h2 className="py-4 text-white">Who I am</h2>
          <p className="py-2 text-white">
            I’m passionate about learning
            new technologies and understand there is more than one way to
            accomplish a task. Though I am most proficient in building front-end
            applications using HTML, CSS, Javascript, and React,Also I believe
            that being a great developer is not using one specific language, but
            choosing the best tool for the job.
          </p>
          <p className="py-2 text-white"><span className="text-[#5651e5] ">(Future)</span> Computer Science
            Engineer specializing in building...  </p>
          <Link href="/#projects" className="p-2">
            <p className="py-2 text-white underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src="/about.jpg"
            className="rounded-xl"
            alt="/"
            width={500}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default About;

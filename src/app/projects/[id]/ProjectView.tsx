"use client";

import { FaArrowLeft, FaCircleCheck } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/types/project";

interface ProjectViewProps {
    project: Project;
}

const ProjectView = ({ project }: ProjectViewProps) => {
    return (
        <div className="w-full">
            <div className="w-screen h-[50vh] relative">
                <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/60 z-10" />

                {project.video ? (
                    <video
                        src={project.video}
                        autoPlay
                        loop
                        muted
                        className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                ) : (
                    <Image
                        className="absolute object-cover"
                        fill
                        src={project.image}
                        alt={project.name}
                        priority
                    />
                )}

                <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl font-bold py-2"
                    >
                        {project.name}
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-xl"
                    >
                        {project.framework}
                    </motion.h3>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto p-4 grid md:grid-cols-5 gap-8 py-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="col-span-4"
                >
                    <p className="uppercase text-[#5651e5] tracking-widest font-bold text-sm">
                        Project
                    </p>
                    <h2 className="py-4 text-3xl font-bold text-gray-800">Overview</h2>
                    <p className="py-2 text-gray-600 leading-relaxed text-lg">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-4 mt-8">
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noreferrer"
                            className="px-8 py-3 text-sm bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 font-semibold uppercase tracking-wider flex items-center justify-center cursor-pointer"
                        >
                            Visit Live
                        </a>
                        {project.code && (
                            <a
                                href={project.code}
                                target="_blank"
                                rel="noreferrer"
                                className="px-8 py-3 text-sm bg-gray-800 text-white rounded-xl shadow-lg shadow-gray-500/30 hover:shadow-gray-500/50 hover:scale-105 transition-all duration-300 font-semibold uppercase tracking-wider flex items-center justify-center cursor-pointer"
                            >
                                View Code
                            </a>
                        )}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="col-span-4 md:col-span-1 shadow-xl shadow-gray-200 rounded-xl py-6 bg-white border border-gray-50"
                >
                    <div className="p-4">
                        <p className="text-center font-bold pb-4 text-lg text-gray-700 border-b border-gray-100 mb-4">
                            Technologies
                        </p>
                        <div className="grid grid-cols-1 gap-3">
                            {project.technologies.map((tech) => (
                                <div
                                    key={tech}
                                    className="text-gray-600 py-1 flex items-center gap-3 hover:text-[#5651e5] transition-colors duration-200"
                                >
                                    <FaCircleCheck className="text-[#5651e5] flex-shrink-0" />
                                    <span className="font-medium text-sm">{tech}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <div className="col-span-4 pt-10">
                    <Link
                        href="/#projects"
                        className="inline-flex items-center gap-2 px-6 py-3 text-gray-600 hover:text-[#5651e5] transition-colors duration-300 font-bold cursor-pointer group"
                    >
                        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                        <span className="text-lg">Back to Projects</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectView;

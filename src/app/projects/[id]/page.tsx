import { getProjects } from "@/libs/data/projects";
import { notFound } from "next/navigation";
import ProjectView from "./ProjectView";

interface ProjectPageProps {
  params: {
    id: string;
  };
}

// Generate static params for all projects to enable static optimization
export async function generateStaticParams() {
  // This is optional if you want to statically generate the pages at build time.
  // Given the data is static in a file, we could iterate through keys of `projects.ts` if it were an object/array.
  // For now, since `getProjects` is a function with hardcoded switch, we might skip this or hardcode the ids.
  // Skipping strict static generation for now as it requires refactoring `getProjects` to return all keys.
  return [];
}

const ProjectPage = ({ params }: ProjectPageProps) => {
  const project = getProjects(params.id.toLocaleLowerCase());

  if (!project) {
    notFound();
  }

  return <ProjectView project={project} />;
};

export default ProjectPage;

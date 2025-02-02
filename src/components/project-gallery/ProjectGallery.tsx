import projects from "@/data/projects";
import ProjectCard from "./components/ProjectCard";

export default function ProjectGallery() {
  return (
    <div className="grid lg:grid-cols-3 gap-2 sm:grid-cols-2 grid-cols-1">
      {projects.map((project) => (
        <ProjectCard project={project} key={project.name} />
      ))}
    </div>
  );
}

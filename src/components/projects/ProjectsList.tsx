import projects from "@/data/projects";
import ProjectItem from "./ProjectItem";

export default function ProjectsList() {
  return (
    <section className="flex flex-col">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">Projects</h2>
      <ul className="flex flex-col gap-4">
        {projects.map((project) => (
          <ProjectItem key={project.name} project={project} />
        ))}
      </ul>
    </section>
  );
}

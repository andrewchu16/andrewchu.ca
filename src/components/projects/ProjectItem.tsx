import Image from "next/image";
import Project from "@/models/project.model";

interface ProjectItemProps {
  project: Project;
}

export default function ProjectItem({ project }: ProjectItemProps) {
  return (
    <li className="group">
      <a
        href={project.siteUrl || project.projectUrl || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-3"
      >
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-primary group-hover:underline">
            {project.name}
          </h3>
          <p className="text-body text-sm">{project.description}</p>
        </div>
        <div className="flex-shrink-0 w-32 h-20 sm:w-40 sm:h-24 relative rounded overflow-hidden">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            className="object-cover"
          />
        </div>
      </a>
    </li>
  );
}

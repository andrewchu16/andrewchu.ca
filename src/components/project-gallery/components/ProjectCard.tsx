import WebLink from "@/components/utils/WebLink";
import type Project from "@/models/project.model";
import Image from "next/image";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-lg flex flex-col lg:min-w-72 lg:max-w-72 w-full max-w-84 dark:border-0 dark:shadow-sm dark:shadow-neutral-700 border dark:border-secondary gap-2 dark:selection:bg-neutral-700">
      <div className="relative w-full h-32 rounded-t-md overflow-hidden">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-2">
        <div className="flex justify-between items-center">
          <h1>
            <WebLink href={project.projectUrl}>{project.name}</WebLink>
          </h1>
          {/* <h2 className="text-secondary text-sm">
            {project.createdDate.getFullYear()}
          </h2> */}
        </div>
        <p className="text-body text-sm">{project.description}</p>
      </div>
    </div>
  );
}

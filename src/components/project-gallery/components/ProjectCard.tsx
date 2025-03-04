import OpenInNewIcon from "@/components/icons/OpenInNewIcon";
import WebLink from "@/components/utils/WebLink";
import type Project from "@/models/project.model";
import Tag from "@/models/tag.model";
import Image from "next/image";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-lg flex flex-col lg:max-w-72 w-full max-w-84 dark:border-0 dark:shadow-sm dark:shadow-neutral-700 border dark:border-secondary gap-2">
      <div className="relative w-full h-32 rounded-t-md overflow-hidden">
        <a
          href={project.projectUrl}
          target="_blank"
          className="relative block w-full h-full"
        >
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            className="object-cover"
          />
        </a>
      </div>
      <div className="px-2 pt-1.5 pb-2.5">
        <div className="flex items-center mb-0.5 gap-1.5">
          <WebLink className="" href={project.projectUrl}>{project.name}</WebLink>
          {project.siteUrl && (
            <WebLink
              href={project.siteUrl}
              className="text-sm text-secondary flex gap-1 items-center hover:text-body hover:fill-body fill-secondary hover:decoration-transparent whitespace-nowrap"
            >
              visit site
              <OpenInNewIcon className="h-4" />
            </WebLink>
          )}
        </div>
        <p className="text-body text-sm mb-2">{project.description}</p>
        <div className="flex gap-1 flex-wrap dark:selection:bg-neutral-800 selection:bg-neutral-300">
          {project.tags.map((tag: Tag) => (
            <p
              key={tag.long}
              className="text-xs rounded-full px-2 py-0.5 shadow-sm dark:bg-neutral-700 bg-neutral-200 text-secondary"
            >
              {tag.short}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

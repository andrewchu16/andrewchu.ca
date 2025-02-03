import projects from "@/data/projects";
import ProjectCard from "./components/ProjectCard";
import { useEffect, useState } from "react";
import WebLink from "../utils/WebLink";

interface ProjectGalleryProps {
  searchQuery: string;
  filters: Record<string, boolean>;
}

export default function ProjectGallery({
  searchQuery,
  filters,
}: ProjectGalleryProps) {
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    const newFilteredProjects = projects.filter((project) => {
      const matchesSearchQuery =
        searchQuery === "" ||
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) =>
          tag.long.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesFilters =
        project.tags.some((tag) => filters[tag.long]) ||
        Object.values(filters).every((value) => !value);

      return matchesSearchQuery && matchesFilters;
    });

    setFilteredProjects(newFilteredProjects);
  }, [searchQuery, filters]);

  return (
    <div className="grid lg:grid-cols-3 gap-2 sm:grid-cols-2 grid-cols-1">
      {filteredProjects.map((project) => (
        <ProjectCard project={project} key={project.name} />
      ))}
      <div className="text-sm sm:text-base rounded-lg w-screen lg:w-72 max-w-full h-full min-h-40 flex items-center justify-center flex-col text-body border border-dashed border-neutral-400 dark:border-neutral-700">
        <p className="text-center max-w-52">
          View the rest of my projects on{" "}
          <WebLink href="https://github.com/andrewchu16">GitHub</WebLink> and{" "}
          <WebLink href="https://devpost.com/Previouslynamedjeff">
            Devpost
          </WebLink>
          .
        </p>
      </div>
      {filteredProjects.length === 0 && (
        <>
          <div className="w-screen lg:w-72 max-w-full h-60"></div>
          <div className="w-screen lg:w-72 max-w-full h-60"></div>
          <div className="w-screen lg:w-72 max-w-full h-60"></div>
        </>
      )}
    </div>
  );
}

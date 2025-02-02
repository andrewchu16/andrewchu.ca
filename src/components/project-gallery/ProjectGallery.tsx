import projects from "@/data/projects";
import ProjectCard from "./components/ProjectCard";
import { useEffect, useState } from "react";

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
        project.tags.some((tag) => tag.long.toLowerCase().includes(searchQuery.toLowerCase()));

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
      <div className="w-screen lg:w-72 max-w-full h-60"></div>
      <div className="w-screen lg:w-72 max-w-full h-60"></div>
      <div className="w-screen lg:w-72 max-w-full h-60"></div>
    </div>
  );
}

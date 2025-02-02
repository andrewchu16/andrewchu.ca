"use client";
import ProjectFilter from "@/components/project-filter/ProjectFilter";
import ProjectGallery from "@/components/project-gallery/ProjectGallery";
import ProjectSearch from "@/components/project-search/ProjectSearch";
import { tagList } from "@/data/tags";
import { useState } from "react";

export default function Projects() {
  const [filters, setFilters] = useState<Record<string, boolean>>(
    (Object.keys(tagList) as (keyof typeof tagList)[]).reduce((acc, key) => {
      return {
        ...acc,
        ...tagList[key].reduce(
          (innerAcc, tag) => ({ ...innerAcc, [tag.long]: false }),
          {}
        ),
      };
    }, {})
  );

  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <div className="pt-[126px] flex items-center justify-center">
        <div className="p-4 md:px-1 flex gap-2">
          <div className="flex-col hidden md:flex">
            <ProjectFilter filters={filters} setFilters={setFilters} />
          </div>
          <div className="flex flex-col gap-4">
            <ProjectSearch
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
            <ProjectGallery filters={filters} searchQuery={searchQuery} />
          </div>
        </div>
      </div>
    </>
  );
}

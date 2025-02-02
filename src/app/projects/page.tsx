"use client";
import ProjectFilter from "@/components/project-filter/ProjectFilter";
import ProjectGallery from "@/components/project-gallery/ProjectGallery";
import ProjectSearch from "@/components/project-search/ProjectSearch";
import { tagList } from "@/data/tags";
import Head from "next/head";
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
      <Head>
        <link rel="icon" href="/icon.svg" type="image/svg" />
        <meta property="og:title" content="Andrew Chu" />
        <meta
          property="og:description"
          content="Andrew's personal portfolio website."
        />
        <meta property="og:image" content="/icon.svg" />
        <meta property="og:url" content="https://andrewchu.ca" />
        <meta property="og:type" content="website" />
        <meta property="thumbnail" content="/icon.svg" />
      </Head>
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

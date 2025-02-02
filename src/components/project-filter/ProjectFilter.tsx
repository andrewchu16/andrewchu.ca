import { tagList } from "@/data/tags";
import Tag from "@/models/tag.model";

interface ProjectFilterProps {
  filters: Record<string, boolean>;
  setFilters: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
}

function ProjectFilterCategory({
  title,
  tags,
  filters,
  setFilters,
}: {
  title: string;
  tags: Tag[];
  filters: Record<string, boolean>;
  setFilters: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
}) {
  return (
    <div>
      <h3 className="mb-1">{title}</h3>
      <div className="flex gap-1 flex-wrap">
        {tags.map((tag: Tag) => (
          <label
            key={tag.long}
            className={`text-sm rounded-full px-2.5 py-1 hover:text-body cursor-pointer shadow-sm select-none ${
              filters[tag.long]
                ? "dark:bg-neutral-600 bg-neutral-200 text-body"
                : "dark:bg-neutral-700 bg-neutral-100 text-secondary"
            }`}
          >
            <input
              type="checkbox"
              className="hidden"
              checked={filters[tag.long]}
              onChange={() =>
                setFilters((prev) => ({
                  ...prev,
                  [tag.long]: !prev[tag.long],
                }))
              }
            />
            {tag.short}
          </label>
        ))}
      </div>
    </div>
  );
}

export default function ProjectFilter({
  filters,
  setFilters,
}: ProjectFilterProps) {
  return (
    <div className="flex flex-col gap-2.5 max-w-60 min-w-52">
      {(Object.keys(tagList) as Array<keyof typeof tagList>).map((category) => (
        <ProjectFilterCategory
          key={category}
          title={category.charAt(0).toUpperCase() + category.slice(1)}
          tags={tagList[category]}
          filters={filters}
          setFilters={setFilters}
        />
      ))}
    </div>
  );
}

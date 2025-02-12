import SearchIcon from "../icons/SearchIcon";

interface ProjectSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function ProjectSearch({
  searchQuery,
  setSearchQuery,
}: ProjectSearchProps) {
  return (
    <label className="focus-within:ring-1 dark:focus-within:ring-primary focus-within:ring-neutral-600 focus-within:ring-opacity-30 w-full flex items-center gap-2 shadow-sm text-body p-2.5 dark:bg-neutral-700 bg-neutral-200 rounded-lg h-10 fill-secondary">
      <SearchIcon className="h-full" />
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for a project, keyword, or topic."
        className="placeholder:text-secondary focus:outline-none w-full bg-transparent"
      />
    </label>
  );
}

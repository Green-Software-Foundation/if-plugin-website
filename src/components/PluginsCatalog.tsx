import ProfileCard from "./PluginCard";
import ProfileCardSkeleton from "./PluginCardSkeleton";
import type { Plugin } from "types";
import { Search as SearchIcon } from "lucide-react";
import { SearchBox, PoweredBy, Hits, Pagination, useInstantSearch, CurrentRefinements, useRefinementList } from 'react-instantsearch';


const Hit = ({ hit }: {
  hit: Plugin
}) =>
  <ProfileCard data={{ ...hit }} />

const NoResults = () => (
  <div className="w-full flex flex-col items-center justify-center gap-3">
    <p className="text-2xl font-bold text-primary-dark">No results found</p>
    <p className="text-gray-400">Try a different search term</p>
  </div>
)
const PluginsCatalog = () => {
  const { status, results } = useInstantSearch();
  useRefinementList({
    attribute: 'tags',
  });
  return (
    <div className="flex flex-col items-start justify-start gap-3 md:gap-6 max-w-4xl mx-auto">

      <div className="w-full relative">
        <SearchBox
          placeholder="Search plugins..."
          classNames={
            {
              root: "w-full",
              input: "w-full pl-12 pr-40 rounded-lg h-12 border px-3 py-2 text-md text-gray-800 ring-offset-white placeholder:text-gray-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            }
          }
          submitIconComponent={() => <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-dark " />}
          resetIconComponent={() => undefined}
          loadingIconComponent={() => undefined}
        />
        <PoweredBy className="absolute right-3 top-1/2 -translate-y-1/2" classNames={
          {
            logo: "w-32",
          }
        } />
      </div>
      <CurrentRefinements
        classNames={
          {
            root: "flex flex-wrap gap-2",
            item: "bg-accent-default text-accent-darkest text-xs px-3 py-2 rounded-full tracking-wide uppercase font-extrabold flex items-center gap-2",
            category: "flex items-center gap-2",
          }
        }
      />
      {
        status === "loading" || status === "stalled" && <div className="flex flex-col gap-3 w-full">
          <ProfileCardSkeleton />
          <ProfileCardSkeleton />
          <ProfileCardSkeleton />
        </div>
      }
      <Hits hitComponent={Hit} classNames={
        {
          root: "w-full",
          list: "flex flex-col gap-3 w-full",
          item: "w-full h-full"
        }
      } />
      {
        status === "idle" && results?.nbHits === 0 && <NoResults />
      }
      {results.nbPages > 1 &&
        <Pagination
          showLast={false}
          showFirst={false}
          classNames={{
            root: "flex justify-center gap-2 mt-8 w-full ",
            list: "flex gap-2 justify-center items-center",
            item: "text-gray-800 font-bold px-2 py-1 rounded-md hover:bg-gray-200 aspect-square w-8 h-8 flex items-center justify-center",
            selectedItem: "bg-primary-default text-white",
            disabledItem: "opacity-50 cursor-not-allowed",
          }}
        />}
    </div>
  );
};
export default PluginsCatalog;

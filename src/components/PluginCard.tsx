import type { Plugin } from "types";
import NpmIcon from "@/icons/npm.svg?raw";
import GithubIcon from "@/icons/github.svg?raw";
import { LinkIcon } from "lucide-react"

const ProfileCard = ({
  data
}: { data: Plugin }) => {
  const {
    name,
    github,
    npm,
    description,
    author,
    docs,
    tags,
    badge,
    npmDownloads,
    githubStars
  } = data;
  const handleTagClick = (tag: string) => {
    // Get the query from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const tagParam = urlParams.get('Plugins[refinementList][tags][0]');
    // If the tag is already in the query, remove it
    if (tagParam === tag) {
      urlParams.delete('Plugins[refinementList][tags][0]');
    } else {
      // Otherwise, set the tag in the query
      urlParams.set('Plugins[refinementList][tags][0]', tag);
    }
    // Update the URL with the new query
    window.history.pushState({}, '', `${window.location.pathname}?${urlParams}`);
    window.dispatchEvent(new Event('popstate'));
  }
  return (
    <div className="w-full h-full p-6 bg-white rounded-lg shadow transition-all relative z-10 overflow-hidden inline-block  ">
      <div className="flex justify-between text-primary-default font-extrabold text-xl mb-2">
        <div>
          <h2>{name}</h2>
          <h3 className="text-black-default text-sm font-semibold">by {author}</h3>
        </div>
      </div>
      <p className="text-lg text-black-default mb-6">{description}
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <button onClick={() => handleTagClick(tag)} key={i} className="bg-accent-default text-accent-darkest text-xs px-3 py-2 rounded-full tracking-wide uppercase font-extrabold">{tag}</button>
        ))}
      </div>
      <hr className="my-6 bg-gray-default border-none h-0.5" />
      <div className="flex justify-center md:justify-between items-center flex-wrap gap-4 md:gap-0">
        <div className="flex items-center gap-4">
          <a href={npm}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 text-gray-500 hover:text-primary-default transition-colors flex items-center justify-center" dangerouslySetInnerHTML={{ __html: NpmIcon }}>
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer" className="w-6 text-gray-500 hover:text-primary-default transition-colors flex items-center justify-center" dangerouslySetInnerHTML={{ __html: GithubIcon }}>
          </a>
          <a href={docs} target="_blank" rel="noopener noreferrer" className="w-6 text-gray-500 hover:text-primary-default transition-colors flex items-center justify-center" >
            <LinkIcon />
          </a>
        </div>
        <div className="flex justify-center flex-wrap gap-4">
          <div>
            <span className="text-xs font-bold bg-black-default p-2 text-white rounded-bl rounded-tl ">NPM Weekly Download</span>
            <span className="text-xs font-bold bg-accent-default p-2 text-black-default rounded-br rounded-tr">{npmDownloads}</span>
          </div>
          <div>
            <span className="text-xs font-bold bg-black-default p-2 text-white rounded-bl rounded-tl ">Github Stars</span>
            <span className="text-xs font-bold bg-accent-default p-2 text-black-default rounded-br rounded-tr">{githubStars}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

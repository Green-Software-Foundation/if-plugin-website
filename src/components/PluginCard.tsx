import { Fragment } from "react";
import type { Plugin } from "types";
import NpmIcon from "@/icons/npm.svg?raw";
import GithubIcon from "@/icons/github.svg?raw";
import { LinkIcon } from "lucide-react"
const ProfileCard = ({
  data
}: { data: Plugin }) => {
  const { url,
    city,
    country,
    image,
    firstName,
    lastName,
    role,
    organization, type } = data;
  const isExpert = type === "expert";

  return (
    <div className="w-full h-full p-6 bg-white rounded-lg shadow transition-all relative z-10 overflow-hidden inline-block  ">
      <div className="flex justify-between text-primary-default font-extrabold text-xl mb-2">
        <h2>Plugin Name Here</h2>
      </div>
      <p className="text-lg text-black-default mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada luctus porttitor. Pellentesque placerat auctor elementum. In placerat pharetra orci, vel venenatis augue posuere at.
      </p>
      <div className="flex flex-wrap gap-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className="bg-accent-default text-accent-darkest text-xs px-3 py-2 rounded-full tracking-wide uppercase font-extrabold">Tag Name</span>
        ))}
      </div>
      <hr className="my-6 bg-gray-default border-none h-0.5" />
      <div className="flex justify-center md:justify-between items-center flex-wrap gap-4 md:gap-0">
        <div className="flex items-center gap-4">
          <a href="https://www.npmjs.com/" className="w-10 text-gray-500 hover:text-primary-default transition-colors flex items-center justify-center" dangerouslySetInnerHTML={{ __html: NpmIcon }}>
          </a>
          <a href="https://www.github.com/" className="w-6 text-gray-500 hover:text-primary-default transition-colors flex items-center justify-center" dangerouslySetInnerHTML={{ __html: GithubIcon }}>
          </a>
          <a href="https://www.google.com/" className="w-6 text-gray-500 hover:text-primary-default transition-colors flex items-center justify-center" >
            <LinkIcon />
          </a>
        </div>
        <div className="flex justify-center flex-wrap gap-4">
          <div>
            <span className="text-xs font-bold bg-black-default p-2 text-white rounded-bl rounded-tl ">NPM Weekly Download</span>
            <span className="text-xs font-bold bg-accent-default p-2 text-black-default rounded-br rounded-tr">1M</span>
          </div>
          <div>
            <span className="text-xs font-bold bg-black-default p-2 text-white rounded-bl rounded-tl ">Github Stars</span>
            <span className="text-xs font-bold bg-accent-default p-2 text-black-default rounded-br rounded-tr">328</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

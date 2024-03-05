import { useEffect, useState } from "react";
import { IoStar } from "react-icons/io5";
import { SlGlobe } from "react-icons/sl";

export default function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/ivermoka/repos`, {
      headers: {
        "User-Agent": "request",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const sortedRepos = data.sort(
          (a, b) => b.stargazers_count - a.stargazers_count
        );
        setRepos(sortedRepos);
      });
  }, []);

  return (
    <div className="text-white bg-[#282C34] py-24  sm:mt-32  sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto  lg:mx-0 flex justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              My projects
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-300">
              I like programming
            </p>
          </div>

          <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=anuraghazra&layout=compact&bg_color=282C34&text_color=FFFFFF&title_color=d1d5db" />
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {repos.map((repo) => (
            <article
              key={repo.id}
              className="flex max-w-xl my-5 flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={repo.created_at} className="text-gray-300">
                  {new Date(repo.created_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
                <a
                  href={`#${repo.language}`}
                  className="relative z-5 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-500 hover:bg-gray-100"
                >
                  {repo.language || "Unknown"}
                </a>
              </div>
              <div className="flex  w-full items-center">
                <div className="flex text-sm justify-center pr-5 items-center h-full">
                  <IoStar />
                  <p className="pl-1 pt-1">{repo.stargazers_count}</p>
                </div>
                {repo.homepage !== "" && repo.homepage !== null && (
                  <a href={repo.homepage}>
                    <SlGlobe />
                  </a>
                )}{" "}
              </div>

              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-200 group-hover:text-gray-600">
                  <a href={repo.html_url}>
                    <span className="absolute inset-0" />
                    {repo.name}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-300">
                  {repo.description || "No description available."}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

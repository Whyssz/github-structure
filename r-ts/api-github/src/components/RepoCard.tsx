import { IRepo } from "../models/modelst";

export const RepoCard = ({ repo }: { repo: IRepo; }) => {
  return (
    <a
      tabIndex={0}
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
      className="block border hover:shadown-md hover:bg-gray-100 p-3 rounded mb-2 transition-all"
    >
      <h2 className="text-lg font-bold">{repo.full_name}</h2>
      <p className="text-sm">
        Forks: <span className="font-bold mr-2">{repo.forks}</span>
        Watchers: <span className="font-bold">{repo.watchers}</span>
      </p>
      <p className="text-sm font-thin">{repo?.description}</p>
    </a>
  );
};

import { useState } from "react";
import { useActions } from "../hooks/actions";
import { useAppSelector } from "../hooks/redux";
import { IRepo } from "../models/modelst";

export const RepoCard = ({ repo }: { repo: IRepo; }) => {

  const { addFavourite, removeFavourite } = useActions();

  const { favourites } = useAppSelector(state => state.gihub);

  const [isFav, setIsFav] = useState(favourites.includes(repo.html_url));

  const addToFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    addFavourite(repo.html_url);
    setIsFav(true);
  };

  const removeToFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    removeFavourite(repo.html_url);
    setIsFav(false);
  };

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
      {!isFav && <button
        className="py-2 px-4 mr-3 bg-yellow-400 rounded hover:shadow-md transition-all hover:font-medium"
        onClick={addToFavourite}
      >
        Add
      </button>
      }
      {isFav && <button
        className="py-2 px-4 mr-3 bg-red-600 text-white rounded hover:shadow-md transition-all hover:font-medium"
        onClick={removeToFavourite}
      >
        Remove
      </button>}
    </a>
  );
};

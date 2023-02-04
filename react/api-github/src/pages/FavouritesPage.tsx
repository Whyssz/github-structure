import { useAppSelector } from "../hooks/redux";

export const FavouritesPage = () => {
  const { favourites } = useAppSelector(state => state.gihub);

  if (favourites.length === 0) return <p className="text-center font-medium text-xl mt-7 cursor-default">No items</p>;

  return (
    <div className="flex justify-center pt-10 mx-auto h-full w-full">
      <ul className="list-decimal">
        {favourites.map(value => (
          <li key={value}>
            <a href={value} target='_blank' rel="noreferrer">
              {value}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

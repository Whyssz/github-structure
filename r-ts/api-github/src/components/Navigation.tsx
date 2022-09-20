import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="flex justify-between items-center h-[50px] px-5 shadow-md bg-blue-500 text-white">
      <h3 className="font-bold cursor-default">GitHub Search</h3>

      <span>
        <Link to='/' className="mr-5 text-lg">Home</Link>
        <Link to='/favourites' className="text-lg">Favourites</Link>
      </span>

    </nav>
  )
};

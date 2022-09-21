import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="flex justify-between items-center h-[50px] px-5 shadow-md bg-blue-500 text-white">
      <h3 className="font-bold text-lg cursor-default">GitHub Search</h3>
      <div>
        <Link to='/' className="mr-5 font-medium">Home</Link>
        <Link to='/favourites' className=" font-medium">Favourites</Link>
      </div>

    </nav>
  );
};

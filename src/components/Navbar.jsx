import { Link } from "react-router-dom";
import Logo from "../assets/moviesLogo.jpg";

const Navbar = () => {
  return (
    <div className="flex border space-x-8 items-center pl-3 py-4">
      <img className="w-[50px]" src={Logo} alt="movie logo" />
      <Link to="/" className="text-blue-500 text-3xl font-bold">
        Home
      </Link>
      <Link to="/watchlist" className="text-blue-500 text-3xl font-bold">
        Watchlist
      </Link>
    </div>
  );
};

export default Navbar;

import GloLogo from "../../public/icons/gloLogo";
import ProfileIcon from "../../public/icons/profileIcon";
import SearchIcon from "../../public/icons/searchIcon";
import FavouritesIcon from "../../public/icons/favouritesIcon";
import BasketIcon from "../../public/icons/basketIcon";

export default function Header() {
  return (
    <header className="bg-[#ebe6dc] grid grid-cols-[200px_1fr_180px] justify-items-center items-center h-[75px] px-4 ">
      {/* Language Menu */}
      <div>
        <a href="#" className="text-black">
          United Kingdom | English
        </a>
      </div>

      {/* Logo */}
      <div>
        <GloLogo />
      </div>

      {/* User Panel with Unified Spacing */}
      <ul className="flex justify-center list-none gap-4 relative">
        <li className="cursor-pointer text-black">
          <ProfileIcon />
        </li>
        <li className="cursor-pointer text-black">
          <SearchIcon />
        </li>
        <li className="cursor-pointer text-black">
          <FavouritesIcon />
        </li>
        <li className="cursor-pointer text-black relative">
          <BasketIcon />
          {/* Basket Quantity */}
          <div className="absolute text-xs top-4 left-4 w-5 h-5 rounded-full bg-black text-white flex items-center justify-center">
            0
          </div>
        </li>
      </ul>
    </header>
  );
}

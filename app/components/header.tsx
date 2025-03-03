import GloLogo from "../../public/icons/gloLogo";
import ProfileIcon from "../../public/icons/profileIcon";
import SearchIcon from "../../public/icons/searchIcon";
import FavouritesIcon from "../../public/icons/favouritesIcon";
import BasketIcon from "../../public/icons/basketIcon";
import { BasketItem } from "../lib/definitions";

type HeaderProps = {
  basket: BasketItem[]; 
};


const Header = ({ basket }: HeaderProps) => {

  console.log(basket)
  return (
    <header className="bg-[#ebe6dc] grid grid-cols-[200px_1fr_200px] justify-items-center items-center px-4 ">
      <div>
        <a href="#" className="text-black">
          United Kingdom | English
        </a>
      </div>
      <div>
        <GloLogo />
      </div>
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
          <div className="absolute text-xs top-4 left-4 w-5 h-5 rounded-full bg-black text-white flex items-center justify-center">
            0
          </div>
        </li>
      </ul>
    </header>
  );
}

export default Header;

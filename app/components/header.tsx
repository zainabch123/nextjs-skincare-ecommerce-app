import GloLogo from "../../public/icons/gloLogo";
import ProfileIcon from "../../public/icons/profileIcon";
import SearchIcon from "../../public/icons/searchIcon";
import FavouritesIcon from "../../public/icons/favouritesIcon";
import BasketIcon from "../../public/icons/basketIcon";

export default function Header() {
  return (
    <header>
      <div className="language-options-menu">
        <a href="#" style={{ color: "black" }}>
          United Kingdom | English
        </a>
      </div>
      <div className="logo">
        <GloLogo />
      </div>
      <ul className="user-panel">
        <li className="profile-icon" style={{ color: "black" }}>
          <ProfileIcon />
        </li>
        <li className="search-icon" style={{ color: "black" }}>
          <SearchIcon />
        </li>
        <li className="favourites-icon" style={{ color: "black" }}>
          <FavouritesIcon />
        </li>
        <li className="basket-icon" style={{ color: "black" }}>
          <BasketIcon />
        </li>
        <div className="basket-quantitiy-icon">0</div>
      </ul>
    </header>
  );
}

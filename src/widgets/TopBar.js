import { useState } from "react";
import Burger from "./icons/Burger";
import XMark from "./icons/XMark";
import Menu from "./Menu";

function TopBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="fixed top-0 left-0 right-0">
      <div className="md:mx-20">
        <div className="flex justify-end h-20 max-w-screen-md m-auto bg-tim-gray drop-shadow-md">
          <button
            onClick={toggleMenu}
            className={`h-full aspect-square transition-transform duration-300 ${
              menuOpen ? "-rotate-90" : null
            }`}
          >
            {menuOpen ? <XMark className='stroke-tim-green p-3' /> : <Burger className='stroke-tim-green p-3'/>}
          </button>
        </div>
        <Menu
          className={`transition-transform duration-300 ${
            menuOpen ? "scale-100" : "scale-0 h-0"
          }`}
          onMenuClose={closeMenu}
        />
      </div>
    </div>
  );
}

export default TopBar;

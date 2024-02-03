import { useState } from "react";
import Burger from "./Burger";
import XMark from "./XMark";
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
      <div className="fixed z-10 top-0 left-0 right-0">
        <div className="flex justify-end h-20 max-w-screen-md m-auto bg-tim-dark-blue">
          <button
              onClick={toggleMenu}
              className={`h-full aspect-square transition-transform duration-300 ${
                  menuOpen ? "-rotate-90" : null
              }`}
          >
            {menuOpen ? <XMark className='stroke-tim-light-blue p-3'/> :
                <Burger className='stroke-tim-light-blue p-3'/>}
          </button>
        </div>
        <Menu
            className={`transition-transform duration-300 ${
                menuOpen ? "scale-100" : "scale-0 h-0"
            }`}
            onMenuClose={closeMenu}
        />
      </div>
  );
}

export default TopBar;

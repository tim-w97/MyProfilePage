import { useState } from "react";
import Burger from "./Burger";
import XMark from "./XMark";
import Menu from "./Menu";

function TopBar(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
      <div className="fixed z-10 top-0 left-0 right-0">
          <div className="flex items-center max-w-screen-md m-auto bg-tim-dark-blue">
              <span className='hidden sm:block w-20'/>
              <p className='text-2xl ml-5 sm:m-0 grow text-start sm:text-center font-bold text-tim-light-blue'>{props.title ?? ''}</p>
              <button
                  onClick={toggleMenu}
                  className={`flex-none transition-transform duration-300 ${
                      menuOpen ? "-rotate-90" : null
                  }`}
              >
                  {menuOpen ?
                      <XMark className='w-20 aspect-square stroke-tim-light-blue p-3'/>
                      :
                      <Burger className='w-20 aspect-square stroke-tim-light-blue p-3'/>
                  }
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

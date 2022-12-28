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
            <div className="max-w-screen-md m-auto bg-tim-gray flex items-center justify-end drop-shadow-md">
                <button onClick={toggleMenu} className={menuOpen ? "transition-transform rotate-90 duration-300" : "transition-transform duration-300"}>
                    {menuOpen ?
                        <XMark /> :
                        <Burger />
                    }
                </button>
            </div>
            {menuOpen ? <Menu onMenuClose={closeMenu} /> : null}
        </div >
    );
}

export default TopBar;
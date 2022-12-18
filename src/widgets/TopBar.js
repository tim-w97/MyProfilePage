import { useState } from "react";
import Burger from "./icons/Burger";
import XMark from "./icons/XMark";
import Menu from "./Menu";

function TopBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    return (
        <div>
            <div className="bg-tim-gray flex items-center justify-end drop-shadow-md">
                <button onClick={toggleMenu} className={menuOpen ? "transition-transform rotate-90 duration-300" : "transition-transform duration-300"}>
                    {menuOpen ?
                        <XMark /> :
                        <Burger />
                    }
                </button>
            </div>
            {menuOpen ? <Menu /> : null}
        </div >
    );
}

export default TopBar;
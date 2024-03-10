import { Link } from "react-router-dom";

function Menu(props) {
  return (
    <div className={props.className}>
      {/* if the user taps anywhere but not the buttons, the menu will close */}
      <div
        className="absolute w-screen h-screen"
        onClick={props.onMenuClose}
      />

      <ul className="font-normal list-none max-w-screen-md m-auto bg-tim-black text-tim-light-blue drop-shadow-md">
        <li className="text-right cursor-pointer">
          <Link to="/" onClick={props.onMenuClose}>
            <p className="text-2xl p-5">Über mich</p>
          </Link>
        </li>

        <li className="text-right cursor-pointer">
          <Link to="/#skills" onClick={props.onMenuClose}>
            <p className="text-2xl p-5">Skills</p>
          </Link>
        </li>

        <li className="text-right cursor-pointer">
          <Link to="/#apps" onClick={props.onMenuClose}>
            <p className="text-2xl p-5">Apps</p>
          </Link>
        </li>

        <li className="text-right cursor-pointer">
          <Link to="/#kontakt" onClick={props.onMenuClose}>
            <p className="text-2xl p-5">Kontakt</p>
          </Link>
        </li>

        <li className="text-right cursor-pointer">
          <Link to="/lebenslauf" onClick={props.onMenuClose}>
            <p className="text-2xl p-5">Lebenslauf</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;

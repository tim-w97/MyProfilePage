import { Link } from "react-router-dom";

function Menu(props) {
  function scrollToAnchor(id) {
    props.onMenuClose();

    let anchor = document.getElementById(id);
    anchor.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className={props.className}>
      {/* if the user taps anywhere but not the buttons, the menu will close */}
      <div
        className="absolute w-screen h-screen"
        onClick={props.onMenuClose}
      ></div>

      <ul className="font-light list-none max-w-screen-md m-auto bg-tim-black text-tim-light-blue drop-shadow-md">
        <li className="text-right cursor-pointer">
          <div
            className="text-2xl p-5"
            onClick={() => scrollToAnchor("anchor-aboutme")}
          >
            <p>Über mich</p>
          </div>
        </li>

        <li className="text-right cursor-pointer">
          <div
            className="text-2xl p-5"
            onClick={() => scrollToAnchor("anchor-tools")}
          >
            <p>Tools</p>
          </div>
        </li>

        <li className="text-right cursor-pointer">
          <div
            className="text-2xl p-5"
            onClick={() => scrollToAnchor("anchor-projects")}
          >
            <p>Projekte</p>
          </div>
        </li>

        <li className="text-right cursor-pointer">
          <div
            className="text-2xl p-5"
            onClick={() => scrollToAnchor("anchor-contacts")}
          >
            <p>Kontakt</p>
          </div>
        </li>

        <li className="text-right cursor-pointer">
          <Link to="lebenslauf">
            <p className="text-2xl p-5">Lebenslauf</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;

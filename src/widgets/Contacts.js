import Octocat from "../widgets/icons/Octocat";
import LinkedIn from "./icons/LinkedIn";
import mailIcon from '../assets/images/icons/email-cv.png'

function Contacts(props) {
  return (
    <div className={props.className}>
      <div id="anchor-contacts" className="absolute bottom-0"></div>
      <p className="text-center text-2xl font-bold mx-5 mb-3">Kontakt</p>
      <ul className="list-none">
        <li>
          <a
            className="flex bg-[#161B22] items-center cursor-pointer"
            href="https://github.com/tim-w97"
            target="_blank"
            rel="noreferrer"
          >
            <Octocat className="w-16 h-16 ml-3 my-3 mr-8 shrink-0" />
            <p className="text-xl font-mono text-[#f0f6fc]">GitHub</p>
          </a>
        </li>

        <li>
          <a
            className="flex bg-[#fff] items-center cursor-pointer"
            href="https://www.linkedin.com/in/tim-wagner-ab3519220"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedIn className="w-16 h-16 ml-3 my-3 mr-8 shrink-0" />
            <p className="text-xl font-mono text-[#0a66c2]">LinkedIn</p>
          </a>
        </li>

        <li>
          <a
            className="flex bg-tim-dark-blue items-center cursor-pointer"
            href="mailto:timwagner997@gmail.com?subject=Deine%20Bewerbung&body=Hi%20Tim%2C"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mailIcon} alt='mail icon' className="w-16 h-16 ml-3 my-3 mr-8 shrink-0" />
            <p className="text-xl text-tim-light-blue">E-Mail schreiben</p>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contacts;

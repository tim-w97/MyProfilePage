import githubLogo from "../assets/images/logos/github.png";
import linkedinLogo from "../assets/images/logos/linkedin.png";
import mailIcon from '../assets/images/icons/email.png'
import SendEmailLink from "./SendEmailLink";
import {Link} from "react-router-dom";

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
            <img src={githubLogo} alt='Github Logo' className="w-16 h-16 object-contain ml-3 my-3 mr-8 shrink-0" />
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
            <img src={linkedinLogo} alt='Linkedin Logo' className="w-16 h-16 object-contain ml-3 my-3 mr-8 shrink-0" />
            <p className="text-xl font-mono text-[#0a66c2]">LinkedIn</p>
          </a>
        </li>

        <li>
          <SendEmailLink className="flex bg-tim-dark-blue items-center cursor-pointer">
            <img src={mailIcon} alt='mail icon' className="w-16 h-16 object-contain ml-3 my-3 mr-8 shrink-0" />
            <p className="text-xl text-tim-light-blue">E-Mail schreiben</p>
          </SendEmailLink>
        </li>

        <div className="bg-tim-light-blue h-[1px] opacity-50"></div>

        <li>
          <div className='flex flex-col md:flex-row items-center justify-between cursor-pointer min-h-16 gap-3 p-5'>
            <p className="font-normal">Mit viel ♥️ und React erstellt</p>
            <Link to='/impressum' className="text-tim-light-blue">Impressum</Link>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Contacts;

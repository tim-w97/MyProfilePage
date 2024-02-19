import tim from "../assets/images/tim.jpeg";
import phoneIcon from '../assets/images/icons/phone.png'
import mailIcon from '../assets/images/icons/email.png'
import moment from "moment";
import SendEmailLink from "./SendEmailLink";
import CallMeLink from "./CallMeLink";

function Profile(props) {
  const birthday = moment('11091997', 'DDMMYYYY')
  const age = moment().diff(birthday, 'years')

  return (
    <div
      className={props.className + " flex flex-col items-center text-center"}
    >
      {/* Portrait of me */}
      <img
        className="aspect-square w-40 object-cover rounded-full mt-3"
        src={tim}
        alt="Portrait von Tim"
      ></img>
      <p className="text-2xl font-bold my-3">Tim Wagner</p>
      <p className="text-tim-gray">
        geboren am 11.09.1997{" "}
        <span className="whitespace-nowrap">
          ({age} Jahre alt)
        </span>
      </p>
      <p className="text-tim-gray">Wohnort: Hof (Bayern)</p>
      <div className="flex gap-3 mt-3">
        {/* Phone-Icon */}
        <CallMeLink className="w-16">
          <img src={phoneIcon} alt='Phone Contact'/>
        </CallMeLink>
        {/* E-Mail-Icon */}
        <SendEmailLink className="w-16">
          <img src={mailIcon} alt='Email Contact'/>
        </SendEmailLink>
      </div>
    </div>
  );
}

export default Profile;

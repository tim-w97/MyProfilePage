import moment from "moment";
import SendEmailLink from "./SendEmailLink";
import CallMeLink from "./CallMeLink";
import tim from '../assets/images/tim/tim.jpg'

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
      <div className="flex flex-col min-[320px]:flex-row mt-3 gap-3">
        {/* Phone-Icon */}
        <CallMeLink className='w-32 bg-tim-gunpowder p-3 rounded-full'>
          {/*<img src={phoneIcon} alt='Phone Contact'/>*/}
          <p>Anrufen</p>
        </CallMeLink>
        {/* E-Mail-Icon */}
        <SendEmailLink className='w-32 bg-tim-gunpowder p-3 rounded-full'>
          {/*<img src={mailIcon} alt='Email Contact'/>*/}
          <p>E-Mail</p>
        </SendEmailLink>
      </div>
    </div>
  );
}

export default Profile;

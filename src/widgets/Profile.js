import moment from "moment";
import SendEmailLink from "./SendEmailLink";
import CallMeLink from "./CallMeLink";
import tim from '../assets/images/tim/tim.jpg'
import phoneIcon from '../assets/images/icons/phone.png'
import mailIcon from '../assets/images/icons/mail.png'
import homeIcon from '../assets/images/icons/home_pin.png'
import GoogleMapsLink from "./GoogleMapsLink";

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
        <p className="text-tim-gray font-bold mb-10">
          geboren am 11.09.1997{" "}
          <span className="whitespace-nowrap">
          ({age} Jahre alt)
        </span>
        </p>

        <div className="flex flex-col mt-3 gap-5 items-center">
          <SendEmailLink className='flex min-[350px]:flex-row flex-col gap-3 items-center'>
            <img className='w-12 aspect-square object-contain' src={mailIcon} alt='mail icon'/>
            <p className='text-tim-light-blue'>timwagner997@gmail.com</p>
          </SendEmailLink>


          <GoogleMapsLink className='flex min-[350px]:flex-row flex-col gap-3 items-center'>
            <img className='w-12 aspect-square object-contain' src={homeIcon} alt='home pin icon'/>
            <p className='text-tim-light-blue'>Königstr. 62, 95028 Hof</p>
          </GoogleMapsLink>


          <CallMeLink className='flex min-[350px]:flex-row flex-col gap-3 items-center'>
            <img className='w-12 aspect-square object-contain' src={phoneIcon} alt='phone icon'/>
            <p className='text-tim-light-blue'>01520-4847344</p>
          </CallMeLink>
        </div>
      </div>
  );
}

export default Profile;

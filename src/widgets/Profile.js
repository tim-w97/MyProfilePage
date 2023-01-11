import tim from "../assets/images/tim.png";
import Mail from "../widgets/icons/Mail";
import Phone from "./icons/Phone";

function Profile(props) {
  return (
    <div className={props.className + " flex flex-col items-center"}>
      {/* Portrait of me */}
      <img
        className="aspect-square w-40 object-cover object-top rounded-full border border-tim-green border-4 mt-3"
        src={tim}
        alt="Portrait von Tim"
      ></img>
      <p className="text-2xl text-tim-gray my-3">Tim Wagner</p>
      <div className="flex gap-3">
        {/* Phone-Icon */}
        <a
          className="w-20 rounded-full border border-tim-green border-4"
          href="tel:015204847344"
          target="_blank"
          rel="noreferrer"
        >
          <Phone className="aspect-square m-3" />
        </a>
        {/* E-Mail-Icon */}
        <a
          className="w-20 rounded-full border border-tim-green border-4"
          href="mailto:timwagner997@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <Mail className="aspect-square m-3" />
        </a>
      </div>
    </div>
  );
}

export default Profile;

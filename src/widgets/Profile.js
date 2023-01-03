import tim from "../assets/images/tim.png";

function Profile(props) {
  return (
    <div className={props.className + " flex flex-col items-center"}>
      <img
        className="aspect-square w-40 object-cover object-top rounded-full border border-tim-green border-4 mt-3"
        src={tim}
        alt="Portrait von Tim"
      ></img>
      <p className="mt-3 mb-6 text-2xl text-tim-gray">Tim Wagner</p>
    </div>
  );
}

export default Profile;

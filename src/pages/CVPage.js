import { Link } from "react-router-dom";
import Back from "../widgets/icons/Back";

function CVPage() {
  return (
    <div className="font-mono md:mx-20">
      <div className="max-w-screen-md m-auto">
        <div className="mx-5 md:mx-0">
          <p className="text-2xl mt-24">
            Hochschule für Angewandte Wissenschaften Hof
          </p>
        </div>
      </div>
      <div className="fixed top-0 left-0 right-0">
        <div className="md:mx-20">
          <div className="flex items-center h-20 max-w-screen-md m-auto bg-tim-green drop-shadow-md">
            <Link to="/">
              <Back className="fill-tim-gray w-20 aspect-square p-2" />
            </Link>
            <p className="grow text-2xl font-bold text-tim-gray text-center">
              Lebenslauf
            </p>
            <div className="w-20 aspect-square"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CVPage;

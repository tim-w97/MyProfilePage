import { useEffect } from "react";
import { Link } from "react-router-dom";
import Divider from "../widgets/Divider";
import Back from "../widgets/icons/Back";

function CVPage() {
  useEffect(() => window.scrollTo(0, 0));

  return (
    <div className="font-mono md:mx-20">
      <div className="max-w-screen-md m-auto">
        <div className="mx-5 md:mx-0">
          <p className="mt-24 text-tim-gray">Seit September 2021</p>
          <p className="text-xl my-3">
            Hochschule für Angewandte Wissenschaften Hof
          </p>
          <p>
            Ich studiere hier{" "}
            <span className="font-bold">Mobile Computing</span> im Bachelor und
            spezialisiere mich auf die Entwicklung von Apps für Android und iOS.
          </p>
        </div>

        <Divider />

        <div className="mx-5 md:mx-0">
          <p className="text-tim-gray">Seit November 2022</p>
          <p className="text-xl my-3">
            Hochschule für Angewandte Wissenschaften Hof
          </p>
          <p>
            Seit meinem dritten Semester arbeite ich an meiner Hochschule als{" "}
            <span className="font-bold">Tutor</span> und bringe unseren
            Informatik-Erstsemestern das Programmieren in Java bei.
          </p>
        </div>

        <Divider />

        <div className="mx-5 md:mx-0">
          <p className="text-tim-gray">September 2021 bis Juni 2022</p>
          <p className="text-xl my-3">dot9 GmbH</p>
          <p>
            Ich war 10 Monate lang bei der dot9 GmbH als{" "}
            <span className="font-bold">Werkstudent</span> tätig und habe
            während dieser Zeit größenteils Webseiten mit React entwickelt.
          </p>
        </div>

        <Divider />

        <div className="mx-5 md:mx-0">
          <p className="text-tim-gray">Januar 2021 bis Juli 2021</p>
          <p className="text-xl my-3">IBYKUS AG</p>
          <p>
            Nach meiner Ausbildung zum Fachinformatiker habe ich bei IBYKUS als{" "}
            <span className="font-bold">Softwareentwickler</span> gearbeitet und
            Webseiten mit dem JavaServer Faces-Framework entwickelt.
          </p>
        </div>

        <Divider />

        <div className="mx-5 md:mx-0">
          <p className="text-tim-gray">August 2018 bis Januar 2021</p>
          <p className="text-xl my-3">IBYKUS AG</p>
          <p className="mb-8">
            Bei der IBYKUS AG habe ich meine Ausbildung zum{" "}
            <span className="font-bold">
              Fachinformatiker für Anwendungsentwicklung
            </span>{" "}
            abgeschlossen.
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

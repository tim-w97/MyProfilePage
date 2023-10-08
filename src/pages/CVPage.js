import { useEffect } from "react";
import { Link } from "react-router-dom";
import CVEntry from "../widgets/CVEntry";
import Divider from "../widgets/Divider";
import Back from "../widgets/icons/Back";
import Profile from "../widgets/Profile";

function CVPage() {
  useEffect(() => window.scrollTo(0, 0));

  return (
    <div className="font-mono md:mx-20">
      <div className="max-w-screen-md m-auto">
        <Profile className="mt-24 mb-6 mx-3" />

        <CVEntry
          time="Seit September 2021"
          position="Student"
          location="Hochschule für Angewandte Wissenschaften Hof"
          description={
            <p>
              Ich studiere hier{" "}
              <span className="font-bold">Mobile Computing</span> (Bachelor) im
              fünften Semester und spezialisiere mich auf die Entwicklung von
              Apps für Android und iOS.
            </p>
          }
        />

        <Divider />

        <CVEntry
          time="Seit März 2023"
          position="Werkstudent"
          location="Codivo GmbH"
          description={
            <p>
              Bei der Codivo GmbH bin ich zurzeit als{" "}
              <span className="font-bold">Werkstudent</span> tätig.{" "}
              Meine Hauptbeschäftigung ist die Entwicklung von hybriden Apps mit Flutter.
              </p>
          }
        />

        <Divider/>

        <CVEntry
          time="November 2022 bis März 2023"
          position="Tutor"
          location="Hochschule für Angewandte Wissenschaften Hof"
          description={
            <p>
              Ein Semester lang habe ich an meiner Hochschule als{" "}
              <span className="font-bold">Tutor</span> gearbeitet und unseren
              Informatik-Erstsemestern das Programmieren in Java beigebracht.
            </p>
          }
        />

        <Divider />

        <CVEntry
          time="September 2021 bis Juni 2022"
          position="Werkstudent"
          location="dot9 GmbH"
          description={
            <p>
              Ich war 10 Monate lang bei der dot9 GmbH als{" "}
              <span className="font-bold">Werkstudent</span> tätig und habe
              während dieser Zeit größtenteils Webanwendungen mit React
              entwickelt.
            </p>
          }
        />

        <Divider />

        <CVEntry
          time="Januar 2021 bis Juli 2021"
          position="Softwareentwickler"
          location="IBYKUS AG"
          description={
            <p>
              Nach meiner Ausbildung zum Fachinformatiker habe ich bei der
              IBYKUS AG als{" "}
              <span className="font-bold">Softwareentwickler</span> gearbeitet
              und Webanwendungen mit dem JavaServer Faces Framework entwickelt.
            </p>
          }
        />

        <Divider />

        <CVEntry
          time="August 2018 bis Januar 2021"
          position="Ausbildung zum Fachinformatiker für Anwendungsentwicklung"
          location="IBYKUS AG"
          description={
            <p className="mb-8">
              Bei der IBYKUS AG habe ich meine Ausbildung zum{" "}
              <span className="font-bold">
                Fachinformatiker für Anwendungsentwicklung
              </span>{" "}
              mit zusätzlichen Schulungen im SAP-Bereich absolviert.
            </p>
          }
        />
      </div>
      <div className="fixed top-0 left-0 right-0">
        <div className="md:mx-20">
          <div className="flex items-center h-20 max-w-screen-md m-auto bg-tim-green drop-shadow-md">
            <Link to="/">
              <Back className="w-20 aspect-square stroke-tim-gray p-3" />
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

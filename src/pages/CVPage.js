import { useEffect } from "react";
import CVEntry from "../widgets/CVEntry";
import Divider from "../widgets/Divider";
import Profile from "../widgets/Profile";
import universityLogo from '../assets/images/logos/hochschule-hof.png'
import ibykusLogo from '../assets/images/logos/ibykus.jpeg'
import codivoLogo from '../assets/images/logos/codivo.png'
import dot9Logo from '../assets/images/logos/dot9.jpeg'
import PageTemplate from "../widgets/PageTemplate";
import DismissTopBar from "../widgets/DismissTopBar";

function CVPage() {
  useEffect(() => window.scrollTo(0, 0));

  return (
      <PageTemplate>
        <Profile className="pt-20 mb-10 mx-3"/>

        <CVEntry
            time="Seit September 2021"
            position="Student"
            location="Hochschule Hof"
            logo={
              <img src={universityLogo} alt='Hochschule Hof Logo'/>
            }
            description={
              <p>
                  Ich studiere hier{' '}
                  <span className="font-bold">
                    <span className='whitespace-nowrap'>Mobile App Entwicklung</span>
                      {' '}
                      <span>(B.Sc.)</span>
                </span> im
                fünften Semester und spezialisiere mich auf die Entwicklung von
                Apps für Android und iOS.
              </p>
            }
        />

        <Divider/>

        <CVEntry
            time="Seit März 2023"
            position="Werkstudent"
            location="Codivo GmbH"
            logo={
              <img src={codivoLogo} alt='Codivo Logo'/>
            }
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
            location="Hochschule Hof"
            logo={
              <img src={universityLogo} alt='Hochschule Hof Logo'/>
            }
            description={
              <p>
                Ein Semester lang habe ich an meiner Hochschule als{" "}
                <span className="font-bold">Tutor</span> gearbeitet und unseren
                Erstsemestern aus Informatik das Programmieren in Java beigebracht.
              </p>
            }
        />

        <Divider/>

        <CVEntry
            time="September 2021 bis Juni 2022"
            position="Werkstudent"
            location="dot9 GmbH"
            logo={
              <img src={dot9Logo} alt='dot9 Logo'/>
            }
            description={
              <p>
                Ich war 10 Monate lang bei der dot9 GmbH als{" "}
                <span className="font-bold">Werkstudent</span> tätig und habe
                in dieser Zeit größtenteils Webanwendungen mit React
                entwickelt.
              </p>
            }
        />

        <Divider/>

        <CVEntry
            time="Januar 2021 bis Juli 2021"
            position="Softwareentwickler"
            location="IBYKUS AG"
            logo={
              <img src={ibykusLogo} alt='IBYKUS Logo'/>
            }
            description={
              <p>
                Nach meiner Ausbildung zum Fachinformatiker habe ich bei der
                IBYKUS AG als{" "}
                <span className="font-bold">Softwareentwickler</span> gearbeitet
                und Webanwendungen mit dem JavaServer Faces Framework entwickelt.
              </p>
            }
        />

        <Divider/>

        <CVEntry
            className='pb-8'
            time="August 2018 bis Januar 2021"
            position="Ausbildung zum Fachinformatiker für Anwendungsentwicklung"
            location="IBYKUS AG"
            logo={
              <img src={ibykusLogo} alt='IBYKUS Logo'/>
            }
            description={
              <p className="">
                Bei der IBYKUS AG habe ich meine Ausbildung zum{" "}
                <span className="font-bold">
                Fachinformatiker für Anwendungsentwicklung
              </span>{" "}
                absolviert.
              </p>
            }
        />

        <DismissTopBar title='Lebenslauf'/>
      </PageTemplate>
  );
}

export default CVPage;

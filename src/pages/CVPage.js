import { useEffect } from "react";
import CVEntry from "../widgets/CVEntry";
import Divider from "../widgets/Divider";
import Profile from "../widgets/Profile";
import universityLogo from '../assets/images/logos/hochschule-hof.png'
import ibykusLogo from '../assets/images/logos/ibykus.png'
import codivoLogo from '../assets/images/logos/codivo.png'
import dot9Logo from '../assets/images/logos/dot9.png'
import PageTemplate from "../widgets/PageTemplate";
import TopBar from "../widgets/TopBar";

function CVPage() {
  useEffect(
      () => window.scrollTo(0, 0),
      []
  );

  return (
      <PageTemplate>
          <Profile className="pt-20 mx-5"/>

          <p className="text-2xl font-bold mt-14 mb-10 text-center mx-3">Ausbildung und Studium</p>

          <CVEntry
              time="Seit September 2021"
              position="Student"
              location="Hochschule Hof"
              logo={
                  <img className='p-[0.1rem]' src={universityLogo} alt='Hochschule Hof Logo'/>
              }
              link='https://www.hof-university.de/'
              description={
                  <p>
                      Ich studiere aktuell{' '}
                      <span className="font-bold">
                    <span className='whitespace-nowrap'>Mobile App Entwicklung</span>
                          {' '}
                          <span>(B.Sc.)</span>
                </span> im
                      6. Semester. Die Schwerpunkte in meinem Studium sind Informatik,
                      App-Entwicklung für iOS und Android sowie UX-Design.
                  </p>
              }
          />

          <Divider/>

          <CVEntry
              time="August 2018 bis Januar 2021"
              position="Ausbildung zum Fachinformatiker für Anwendungs&shy;entwicklung"
              location="IBYKUS AG"
              logo={
                  <img className='rounded' src={ibykusLogo} alt='IBYKUS Logo'/>
              }
              link='https://www.ibykus.de/'
              description={
                  <p className="">
                      Bei der IBYKUS AG habe ich meine Ausbildung zum{" "}
                      <span className="font-bold">
                Fachinformatiker für Anwendungs&shy;entwicklung
              </span>{" "}
                      absolviert. Ich habe während meiner Ausbildung Software mit Java entwickelt und Formulare
                      mit HTML, JavaScript und jQuery erstellt.
                  </p>
              }
          />

          <p className="text-2xl font-bold mt-14 mb-10 text-center mx-3">Praktische Erfahrung</p>

          <CVEntry
              time="Seit März 2023"
              position="Werkstudent"
              location="Codivo GmbH"
              logo={
                  <img src={codivoLogo} alt='Codivo Logo'/>
              }
              link='https://www.codivo.de/'
              description={
                  <p>
                      Bei der Codivo GmbH bin ich zurzeit als Werkstudent beschäftigt.
                      Meine Tätigkeiten umfassen die Entwicklung plattformübergreifender Apps mit Flutter sowie die
                      Entwicklung von iOS-Apps mit Swift.
                  </p>
              }
          />

          <Divider/>

          <CVEntry
              time="November 2022 bis März 2023"
              position="Tutor"
              location="Hochschule Hof"
              logo={
                  <img className='p-[0.1rem]' src={universityLogo} alt='Hochschule Hof Logo'/>
              }
              link='https://www.hof-university.de/'
              description={
                  <p>
                      Ich habe unsere Erstsemester bei ihren Programmieraufgaben in Java betreut und
                      Musteraufgaben sowie -lösungen erstellt. Zusätzlich habe ich komplexe Konzepte wie
                      OOP und Vererbung durch anschauliche Beispiele erklärt.
                  </p>
              }
          />

          <Divider/>

          <CVEntry
              time="September 2021 bis Juni 2022"
              position="Werkstudent"
              location="dot9 GmbH"
              logo={
                  <img className='rounded' src={dot9Logo} alt='dot9 Logo'/>
              }
              link='https://dot9.co/'
              description={
                  <p>
                      Bei der dot9 GmbH habe ich eine iPad-App mit Swift und UIKit entwickelt sowie Webanwendungen
                      mit React und TailwindCSS entwickelt.
                  </p>
              }
          />

          <Divider/>

          <CVEntry
              time="Januar 2021 bis Juli 2021"
              position="Softwareentwickler"
              location="IBYKUS AG"
              logo={
                  <img className='rounded' src={ibykusLogo} alt='IBYKUS Logo'/>
              }
              link='https://www.ibykus.de/'
              description={
                  <p>
                      Zwischen Ausbildung und Studium habe ich bei der IBYKUS AG als Softwareentwickler gearbeitet.
                      Ich habe Software mit Java entwickelt, SQL-Skripte geschrieben und ein
                      Datenmigrationstool mit dem Spring Framework entwickelt.
                  </p>
              }
          />

          <p className="text-2xl font-bold mt-14 mb-10 text-center mx-3">Auszeichnungen und Engagement</p>

          <ul className='mx-10 list-disc'>
              <li>
                  Ich gehöre in meinem Studiengang zu den 10 % besten aus meinem Jahrgang und wurde deswegen
                  in die Dekansliste 2023 aufgenommen
              </li>
              <li className='mt-3'>
                  Seit Wintersemester 2022 bin ich als Studienmentor für meinen Studiengang aktiv
              </li>
              <li className='mt-3'>
                  Ich habe 2021 ein Deutschland&shy;stipendium bekommen
              </li>
          </ul>

          <p className="text-2xl font-bold mt-14 mb-10 text-center">Hobbys</p>

          <ul className='mx-10 list-disc pb-10'>
              <li>
                  Wandern in der Natur
              </li>
              <li className='mt-3'>
                  Neue Kochrezepte ausprobieren
              </li>
          </ul>

          <TopBar title='Lebenslauf'/>
      </PageTemplate>
  );
}

export default CVPage;

import { useEffect } from "react";
import Contacts from "../widgets/Contacts";
import Projects from "../widgets/Projects";
import Skills from "../widgets/Skills";
import TopBar from "../widgets/TopBar";
import Welcome from "../widgets/Welcome";

function WelcomePage() {
  useEffect(() => window.scrollTo(0, 0));

  return (
    <div className="font-mono md:mx-20">
      <div className="max-w-screen-md m-auto bg-tim-dark-blue">
        <div className="mx-5 md:mx-0">
          <Welcome className="relative mt-24" />
          <Skills className="relative mt-8" />
          <Projects className="relative mt-8" />
        </div>
        <Contacts className="relative mt-16" />
        <TopBar />
      </div>
    </div>
  );
}

export default WelcomePage;

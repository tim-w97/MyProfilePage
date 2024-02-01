import {useEffect} from "react";
import Contacts from "../widgets/Contacts";
import Apps from "../widgets/Apps";
import Skills from "../widgets/Skills";
import TopBar from "../widgets/TopBar";
import Welcome from "../widgets/Welcome";

function WelcomePage() {
    useEffect(() => window.scrollTo(0, 0));

    return (
        <div className="font-comfortaa font-light text-xl text-tim-light-grey">
            <div className="max-w-screen-md m-auto bg-tim-dark-blue">
                <div className='p-5'>
                    <Welcome className="relative mt-20"/>
                    <Skills className="relative mt-8"/>
                </div>
                <Apps className="relative mt-8"/>
                <Contacts className="relative mt-16 font-bold"/>
            </div>
            <TopBar/>
        </div>
    );
}

export default WelcomePage;

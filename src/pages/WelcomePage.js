import {useEffect} from "react";
import Contacts from "../widgets/Contacts";
import Apps from "../widgets/Apps";
import Skills from "../widgets/Skills";
import TopBar from "../widgets/TopBar";
import Welcome from "../widgets/Welcome";
import PageTemplate from "../widgets/PageTemplate";

function WelcomePage() {
    useEffect(() => window.scrollTo(0, 0));

    return (
        <PageTemplate>
            <div className='p-5'>
                <Welcome className="relative mt-20"/>
                <Skills className="relative mt-10"/>
            </div>
            <Apps className="relative mt-8"/>
            <Contacts className="relative mt-16 font-bold"/>
            <TopBar/>
        </PageTemplate>
    );
}

export default WelcomePage;

import {useEffect} from "react";
import Contacts from "../widgets/Contacts";
import Apps from "../widgets/Apps";
import Skills from "../widgets/Skills";
import TopBar from "../widgets/TopBar";
import Welcome from "../widgets/Welcome";
import PageTemplate from "../widgets/PageTemplate";
import {useLocation} from "react-router-dom";

function WelcomePage() {
    const location = useLocation()

    useEffect(()=> {
        if (!location.hash) {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth',
            })

            return
        }

        let anchor = document.getElementById(
            location.hash.slice(1)
        );

        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location]);

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

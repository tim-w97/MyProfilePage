import TimetableApp from "./TimetableApp";
import Eisenpower from "./Eisenpower";
import PacmansBox from "./PacmansBox";

function Apps(props) {
    return (
        <div className={props.className}>
            <div id="anchor-apps" className="absolute -top-20"></div>
            <p className="text-2xl font-bold mb-3 text-center">Apps</p>
            <TimetableApp className='mt-5'/>
            <Eisenpower className='mt-10'/>
            <PacmansBox className='mt-10'/>
            <p className='mt-8 m-5'>Gerne zeige ich Ihnen persönlich noch weitere Apps und Projekte von mir.</p>
    </div>
    );
}

export default Apps;

import {register} from "swiper/element/bundle";
import TimetableApp from "./TimetableApp";
import Eisenpower from "./Eisenpower";
import PacmansBox from "./PacmansBox";

register()

function Apps(props) {
    return (
        <div className={props.className}>
            <div id="anchor-apps" className="absolute -top-24"></div>
            <p className="text-2xl font-bold mb-3 text-center">Apps</p>
            <TimetableApp className='mt-5'/>
            <Eisenpower className='mt-10'/>
            <PacmansBox className='mt-10'/>
    </div>
    );
}

export default Apps;

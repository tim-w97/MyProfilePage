import {Link} from "react-router-dom";
import XMark from "./icons/XMark";

function DismissTopBar(props) {
    return (
        <div className="fixed top-0 left-0 right-0">
            <div className="flex items-center h-20 max-w-screen-md m-auto bg-tim-dark-blue">
                <div className="w-20"></div>
                <p className="grow text-2xl font-bold text-tim-light-blue text-center">
                    {props.title}
                </p>
                <Link to="/">
                    <div className='w-20'>
                        <XMark className='stroke-tim-light-blue p-3'/>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default DismissTopBar
import {Link} from "react-router-dom";
import XMark from "../widgets/icons/XMark";
import PageTemplate from "../widgets/PageTemplate";

function Imprint() {
    return(
        <PageTemplate>
            <div className='h-screen'>
                <div className='flex justify-between items-start'>
                    <div className='m-5'>
                        <p className='font-bold mb-3'>Impressum</p>
                    </div>
                    <Link to="/">
                        <div className='w-20'>
                            <XMark className='stroke-tim-light-blue p-3'/>
                        </div>
                    </Link>
                </div>
            </div>
        </PageTemplate>
    )
}

export default Imprint
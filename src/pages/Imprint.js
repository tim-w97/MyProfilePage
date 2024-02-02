import {Link} from "react-router-dom";
import XMark from "../widgets/icons/XMark";
import PageTemplate from "../widgets/PageTemplate";
import DismissTopBar from "../widgets/DismissTopBar";

function Imprint() {
    return(
        <PageTemplate>
            <div className='h-screen'>
                <DismissTopBar title='Impressum'/>
            </div>
        </PageTemplate>
    )
}

export default Imprint
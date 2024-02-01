import PageTemplate from "../widgets/PageTemplate";
import XMark from "../widgets/icons/XMark";
import {Link} from "react-router-dom";

function PageNotFound() {
    return (
        <PageTemplate>
            <div className='h-screen'>
                <div className='flex justify-between items-start'>
                    <div className='m-5'>
                        <p className='font-bold mb-3'>Sorry, aber diese Seite gibt es nicht. 🙆🏻‍♂️</p>
                        <p>Drücke auf das X, um zur Startseite zurückzukehren.</p>
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

export default PageNotFound
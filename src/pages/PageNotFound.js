import PageTemplate from "../widgets/PageTemplate";
import DismissTopBar from "../widgets/DismissTopBar";

function PageNotFound() {
    return (
        <PageTemplate>
            <DismissTopBar title='Fehler 404'/>
            <div className='p-5 pt-20'>
                <p>
                    Diese Seite gibt es vielleicht in einem anderen Paralleluniversum, aber nicht hier, tut mir Leid. 🥲
                </p>
            </div>
        </PageTemplate>
    )
}

export default PageNotFound
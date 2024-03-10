import PageTemplate from "../widgets/PageTemplate";
import TopBar from "../widgets/TopBar";

function PageNotFound() {
    return (
        <PageTemplate>
            <div className='p-5 pt-20'>
                <p>
                    Diese Seite gibt es vielleicht in einem anderen Paralleluniversum, aber nicht hier. Tut mir Leid. 🥲
                </p>
            </div>
            <TopBar title='Fehler 404'/>
        </PageTemplate>
    )
}

export default PageNotFound
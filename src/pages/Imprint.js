import PageTemplate from "../widgets/PageTemplate";
import DismissTopBar from "../widgets/DismissTopBar";

function Imprint() {
    return(
        <PageTemplate>
            <DismissTopBar title='Impressum'/>
            <div className='p-5 pt-20 h-dvh'>
                <p>Tim Wagner</p>
            </div>
        </PageTemplate>
    )
}

export default Imprint
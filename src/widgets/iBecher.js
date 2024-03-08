import iBecherMug from '../assets/images/apps/ibecher/mug.png'
import iBecherTracker from '../assets/images/apps/ibecher/tracker.png'
import iBecherConsumption from '../assets/images/apps/ibecher/consumption.png'
import AppGallery from "./AppGallery";

function iBecher(props) {
    return(
        <div className={props.className}>
            <p className='m-5'>
                <span className='font-bold'>iBecher</span> ist eine iOS-App, die ich im Rahmen einer Studienarbeit
                entwickelt habe, um mich mit Apples ARKit auseinanderzusetzen. Mit dieser App kann ich überprüfen, ob meine Tasse in den Kaffeeautomaten
                unserer Hochschule passt oder nicht, da das Fach in dem Automaten in der Höhe begrenzt ist.
                Zusätzlich können mit der App Kosten und Kaffeekonsum getrackt werden.
            </p>

            <AppGallery initialSlide={2} imagePaths={[
                iBecherMug,
                iBecherTracker,
                iBecherConsumption,
            ]}/>
        </div>
    )
}

export default iBecher
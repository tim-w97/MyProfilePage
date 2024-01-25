import eisenpowerTodos from "../assets/images/apps/eisenpower/todos.png";
import eisenpowerInput from "../assets/images/apps/eisenpower/input.png";
import eisenpowerImportance from "../assets/images/apps/eisenpower/importance.png";
import eisenpowerHelpScreen from "../assets/images/apps/eisenpower/help screen.png";
import eisenpowerSnackbar from "../assets/images/apps/eisenpower/snack bar.png";
import AppGallery from "./AppGallery";
import googlePlayBadge from "../assets/images/badges/google-play-badge.png";
import amazonBadge from "../assets/images/badges/amazon-badge.png";

function Eisenpower(props) {
    return(
        <div className={props.className}>
            <p className='mb-3'>
                Eisenpower ist eine App, die Todos mithilfe der Eisenhower priorisieren kann.
            </p>

            <AppGallery imagePaths={[
                eisenpowerTodos,
                eisenpowerInput,
                eisenpowerImportance,
                eisenpowerHelpScreen,
                eisenpowerSnackbar
            ]}/>

            <div className='flex flex-col sm:flex-row justify-center items-center mt-3 gap-3'>
                <a href='https://play.google.com/store/apps/details?id=tech.tim97.eisenpower.eisenpower&hl=de&gl=DE' rel='noreferrer'
                   target='_blank'>
                    <img className='w-44' src={googlePlayBadge} alt='Google play store badge'/>
                </a>
                <a href='https://www.amazon.com/gp/product/B0CRS84HSD' rel='noreferrer'
                   target='_blank'>
                    <img className='w-44' src={amazonBadge} alt='Amazon app store badge'/>
                </a>
            </div>
        </div>
    )
}

export default Eisenpower
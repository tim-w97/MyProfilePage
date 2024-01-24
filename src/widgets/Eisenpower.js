import eisenpowerTodos from "../assets/images/apps/eisenpower/todos.png";
import eisenpowerInput from "../assets/images/apps/eisenpower/input.png";
import eisenpowerImportance from "../assets/images/apps/eisenpower/importance.png";
import eisenpowerHelpScreen from "../assets/images/apps/eisenpower/help screen.png";
import eisenpowerSnackbar from "../assets/images/apps/eisenpower/snack bar.png";
import AppGallery from "./AppGallery";

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
        </div>
    )
}

export default Eisenpower
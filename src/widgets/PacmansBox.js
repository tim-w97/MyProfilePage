import pacmansBoxMenu from "../assets/images/apps/pacmans-box/menu.png";
import pacmansBoxHold from "../assets/images/apps/pacmans-box/hold screen.png";
import pacmansBoxRelease from "../assets/images/apps/pacmans-box/release to shoot.png";
import pacmansBoxFlying from "../assets/images/apps/pacmans-box/flying.png";
import pacmansBoxGameOver from "../assets/images/apps/pacmans-box/game over.png";
import AppGallery from "./AppGallery";

function PacmansBox(props) {
    return(
        <div className={props.className}>
            <p className='mb-3'>
                Pacman's Box ist ein Spiel, das ich mit Godot entwickelt habe.
            </p>

            <AppGallery imagePaths={[
                pacmansBoxMenu,
                pacmansBoxHold,
                pacmansBoxRelease,
                pacmansBoxFlying,
                pacmansBoxGameOver
            ]}/>
        </div>
    )
}

export default PacmansBox
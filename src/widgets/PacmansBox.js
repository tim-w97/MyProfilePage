import pacmansBoxMenu from "../assets/images/apps/pacmans-box/menu.png";
import pacmansBoxHold from "../assets/images/apps/pacmans-box/hold screen.png";
import pacmansBoxRelease from "../assets/images/apps/pacmans-box/release to shoot.png";
import pacmansBoxFlying from "../assets/images/apps/pacmans-box/flying.png";
import pacmansBoxGameOver from "../assets/images/apps/pacmans-box/game over.png";
import AppGallery from "./AppGallery";

function PacmansBox(props) {
    return(
        <div className={props.className}>
            <p className='m-5'>
                Ich habe mich in meiner Freizeit mit der Godot Engine beschäftigt und ein kleines Spiel entwickelt.{' '}
                <span className='font-bold'>Pacman's Box</span> funktioniert auf iOS und Android.
            </p>

            <AppGallery initialSlide={0} imagePaths={[
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
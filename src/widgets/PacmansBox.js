import pacmansBoxMenu from "../assets/images/apps/pacmans-box/menu.png";
import pacmansBoxHold from "../assets/images/apps/pacmans-box/hold screen.png";
import pacmansBoxRelease from "../assets/images/apps/pacmans-box/release to shoot.png";
import pacmansBoxFlying from "../assets/images/apps/pacmans-box/flying.png";
import pacmansBoxGameOver from "../assets/images/apps/pacmans-box/game over.png";

function PacmansBox(props) {
    return(
        <div className={props.className}>
            <p className='mb-3'>
                Pacman's Box ist ein Spiel, das ich mit Godot entwickelt habe.
            </p>
            <swiper-container navigation="true">
                <swiper-slide>
                    <img className='w-80 m-auto' src={pacmansBoxMenu} alt='Pacmans Box Menu'/>
                </swiper-slide>
                <swiper-slide>
                    <img className='w-80 m-auto' src={pacmansBoxHold} alt='Pacmans Box Hold screen'/>
                </swiper-slide>
                <swiper-slide>
                    <img className='w-80 m-auto' src={pacmansBoxRelease} alt='Pacmans Box Release screen'/>
                </swiper-slide>
                <swiper-slide>
                    <img className='w-80 m-auto' src={pacmansBoxFlying} alt='Pacmans Box Pacman flying'/>
                </swiper-slide>
                <swiper-slide>
                    <img className='w-80 m-auto' src={pacmansBoxGameOver} alt='Pacmans Box Game over'/>
                </swiper-slide>
            </swiper-container>
        </div>
    )
}

export default PacmansBox
import mooTODO from '../assets/videos/moo-todo.mov'
import iphoneX from '../assets/images/iphone-x.png'

function Projects() {
    return (
        <div className='mt-8'>
            <p className="text-2xl font-bold font-mono mb-3">Meine Projekte:</p>

            <div className='relative'>
                <video className='rounded-[16%/8%] absolute p-[7%]' autoPlay loop muted defaultMuted playsInline>
                    <source src={mooTODO} type="video/mp4"></source>
                </video>

                <img className='absolute' src={iphoneX} alt='iPhone X Device Frame'></img>
            </div>
        </div>
    );
}

export default Projects;
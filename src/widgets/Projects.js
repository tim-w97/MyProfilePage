import VideoShowcase from '../widgets/VideoShowcase'
import mooTodoVideo from '../assets/videos/moo-todo.mov'
import iBecherVideo from '../assets/videos/i-becher.mov'

function Projects(props) {
    return (
        <div className={props.className}>
            <p className="text-2xl font-bold font-mono mb-3">Meine Projekte:</p>

            <VideoShowcase videoSrc={mooTodoVideo} />
            <VideoShowcase className='mt-6' videoSrc={iBecherVideo} />
        </div>
    );
}

export default Projects;
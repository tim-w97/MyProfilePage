import VideoShowcase from '../widgets/VideoShowcase'
import mooTodoVideo from '../assets/videos/moo-todo.m4v'
import iBecherVideo from '../assets/videos/i-becher.m4v'

function Projects(props) {
    return (
        <div className={props.className}>
            <p className="text-2xl font-bold mb-3 text-center">Projekte:</p>

            <p className='font-bold mb-3'>MooTODO</p>
            <p className='mb-3'>Eine Flutter-App zur Verwaltung von kleinen tagtäglichen Aufgaben. Funktioniert auf iOS und Android.</p>
            <VideoShowcase videoSrc={mooTodoVideo} />

            <p className='mt-8 font-bold mb-3'>iBecher</p>
            <p  >
                Die Kaffeeautomaten an meiner Hochschule können auch mit einer eigenen Tasse benutzt werden. So werden Pappbecher eingespart.
            </p>
            <p className='mt-3'>Diese iPhone-App habe ich in Swift entwickelt und kann mir mit Augmented Reality zeigen, ob meine Tasse in den Automaten passt oder nicht. Zusätzlich kann der Kaffeekonsum getrackt werden.</p>

            <VideoShowcase className='mt-6' videoSrc={iBecherVideo} />
        </div>
    );
}

export default Projects;
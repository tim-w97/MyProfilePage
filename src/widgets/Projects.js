import VideoShowcase from "../widgets/VideoShowcase";
import mooTodoVideo from "../assets/videos/moo-todo.m4v";
import iBecherVideo from "../assets/videos/i-becher.m4v";

function Projects(props) {
  return (
    <div className={props.className}>
      <div id="anchor-projects" className="absolute -top-24"></div>
      <p className="text-2xl font-bold mb-3 text-center">Projekte:</p>

      <p className="font-bold mb-3">MooTODO</p>
      <p className="mb-3">
        Eine Flutter-App zur Verwaltung von kleinen tagtäglichen Aufgaben.
        Funktioniert auf iOS und Android.
      </p>
      <VideoShowcase videoSrc={mooTodoVideo} />

      <p className="mt-8 font-bold mb-3">iBecher</p>
      <p>
        Diese iPhone-App habe ich in Swift entwickelt und kann mit Augmented
        Reality zeigen, ob eine beliebige Tasse in den Kaffeeautomaten unserer
        Hochschule passt oder nicht, denn die Automaten unterstützen auch eine
        eigene Tasse.
      </p>
      <p className="mt-3">
        So werden weniger Pappbecher verbraucht, was unserer Umwelt und auch
        gleichzeitig unserem Geldbeutel zugutekommt, denn jeder Pappbecher
        kostet 15 Cent Extra. 💸
      </p>

      <VideoShowcase className="mt-6" videoSrc={iBecherVideo} />
    </div>
  );
}

export default Projects;

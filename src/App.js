import Projects from "./widgets/Projects";
import Skills from "./widgets/Skills";
import TopBar from "./widgets/TopBar";
import Welcome from "./widgets/Welcome";

function App() {
  return (
    <div>
      <div className="m-5">
        <Welcome />
        <Skills />
        <Projects />
      </div>
      <TopBar />
    </div>
  );
}

export default App;

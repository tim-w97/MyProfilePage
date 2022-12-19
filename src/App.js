import Skills from "./widgets/Skills";
import TopBar from "./widgets/TopBar";
import Welcome from "./widgets/Welcome";

function App() {
  return (
    <div>
      <TopBar />

      <div className="m-5">
        <Welcome />
        <Skills />
      </div>
    </div>
  );
}

export default App;

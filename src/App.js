import Projects from "./widgets/Projects";
import Skills from "./widgets/Skills";
import TopBar from "./widgets/TopBar";
import Welcome from "./widgets/Welcome";

function App() {
  return (
    <div>
      <div className="m-5">
        <Welcome className='mt-28' />
        <Skills className='mt-8' />
        <Projects className='mt-8' />
      </div>
      <TopBar />
    </div>
  );
}

export default App;

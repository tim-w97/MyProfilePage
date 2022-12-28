import Contacts from "./widgets/Contacts";
import Projects from "./widgets/Projects";
import Skills from "./widgets/Skills";
import TopBar from "./widgets/TopBar";
import Welcome from "./widgets/Welcome";

function App() {
  return (
    <div>
      <div className="font-mono max-w-screen-md m-auto">
        <div className="m-5 min-[800px]:m-0">
          <Welcome className='relative mt-28' />
          <Skills className='relative mt-8' />
          <Projects className='relative mt-8' />
        </div>
        <Contacts className='relative mt-16' />
      </div>
      <TopBar />
    </div>
  );
}

export default App;

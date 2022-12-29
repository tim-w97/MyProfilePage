import Contacts from "./widgets/Contacts";
import Projects from "./widgets/Projects";
import Skills from "./widgets/Skills";
import TopBar from "./widgets/TopBar";
import Welcome from "./widgets/Welcome";

function App() {
  return (
    <div className="md:mx-20">
      <div className="font-mono max-w-screen-md m-auto">
        <div className="mx-5 md:mx-0">
          <Welcome className='relative mt-24' />
          <Skills className='relative mt-8' />
          <Projects className='relative mt-8' />
        </div>
        <Contacts className='relative mt-16' />
        <TopBar />
      </div>
    </div>
  );
}

export default App;

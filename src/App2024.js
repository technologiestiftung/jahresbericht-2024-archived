import cn from "./App.module.scss";
import Intro from "./sections/Intro";
import MainSection from "./sections/Main2024";
import Vorwort from "./sections/Vorwort";
import Slider from "./components/Slider";
import content2024 from "./content2024";
import Sticky from "./sections/Sticky";
import People from "./sections/People";
import Outro from "./sections/Outro";
import Footer from "./sections/Footer";
import NewNarbar from "./components/NewNavBar";

function App() {
  return (
    <div className={cn.app}>
      <NewNarbar />
      <Intro />
      <MainSection content={content2024.offenheit} />
      <Vorwort />
      <Slider />
      <MainSection content={content2024.offenheit} icon='neue-technologien' />
      <Sticky content={content2024.stickyContent[0]} />
      <MainSection content={content2024.offenheit} icon='smart-city' />
      <Sticky content={content2024.stickyContent[1]} />
      <MainSection
        content={content2024.offenheit}
        icon='weitere-aktivitaeten'
      />
      <People />
      <MainSection content={content2024.offenheit} />
      <Outro />
      <Footer />
    </div>
  );
}

export default App;

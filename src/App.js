
import './App.css';
import Intro from './components/intro';
import ColorSchemesExample from './components/nav';
import AboutMe from './components/am';
import BgColorExample from './components/am';
import Skil from './components/skills';
import Profil from './components/profil';
import Edu from './components/edu';


function App() {
  return (
    <div id="body">
      <ColorSchemesExample/>
      <Intro/>

      <AboutMe/>
      <BgColorExample/>
      <Profil/>
      <Skil/>
      <Edu/>
    </div>
  );
}

export default App;

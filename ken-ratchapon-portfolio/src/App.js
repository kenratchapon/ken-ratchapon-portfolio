import Home from './components/Home';
import Navbar from './components/Navbar';
import { About } from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';


function App() {
  return (
    <div>
		<Navbar/>
		<Home/>
		<About/>
		<Skills/>
		<Projects/>
		<Contact/>
		<Footer/>
    </div>
  );
}

export default App;

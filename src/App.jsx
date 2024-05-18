import Navbar from './components/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Parallax from './components/parallax/Parallax';
import Cursor from './components/cursor/Cursor';
import './app.scss'

const App = () => {
  return <div>
    <Cursor/>
    <section id='Homepage'>
      <Navbar/>
      <Hero/>
    </section>
    <section id='About'>
      <About/>
    </section>
    <section>
      <Parallax type='services'/>
    </section>
    <section id='Services'>
      <Services/>
    </section>
    <section>
      <Parallax type='portfolio'/>
    </section>
    <Portfolio/>
    <section>
      <Parallax type='contact'/>
    </section>
    <section id='Contact'>
      <Contact/>
    </section>
  </div>;
};

export default App;

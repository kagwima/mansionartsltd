import Navbar from './components/Navbar';
import Hero from './components/hero/Hero';
import Parallax from './components/parallax/Parallax';
import './app.scss'

const App = () => {
  return <div>
    <section id='Homepage'>
      <Navbar/>
      <Hero/>
    </section>
    <section>Hero</section>
    <section id='About'>About</section>
    <section>
      <Parallax type='clients'/>
    </section>
    <section id='Services'>Services</section>
    <section>
      <Parallax type='whyus'/>
    </section>
    <section id='Portfolio'>Portfolio</section>
    <section>
      <Parallax type='testimonials'/>
    </section>
    <section id='Contact'>contact</section>
  </div>;
};

export default App;

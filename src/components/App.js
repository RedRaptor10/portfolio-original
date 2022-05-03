import { useEffect } from 'react';
import Header from './Header';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import TopButton from './TopButton';

const App = () => {
  useEffect(() => {
    const animations = {
      left: [
        document.querySelector('#about .section-top'),
        Array.from(document.getElementById('skills').children), // Get all direct children and convert returned object into array
        Array.from(document.getElementById('contact').children)
      ].flat(), // Flatten nested array
      right: [
        document.querySelector('#about .section-bottom'),
        Array.from(document.getElementById('projects').children)
      ].flat()
    };

    for (const position in animations) {
      animations[position].forEach(el => {
        (position === 'left') ? el.classList.add('transition', 'hidden-left') : el.classList.add('transition', 'hidden-right');
      });
    }

    window.addEventListener('scroll', () => {
      for (const position in animations) {
        animations[position].forEach(el => {
          const rect = el.getBoundingClientRect();
          if (rect.bottom > 0 && rect.top < (window.innerHeight || document.documentElement.clientHeight)) {
            (position === 'left') ? el.classList.remove('hidden-left') : el.classList.remove('hidden-right');
            el.classList.add('visible');
          } else {
            (position === 'left') ? el.classList.add('hidden-left') : el.classList.add('hidden-right');
            el.classList.remove('visible');
          }
        });
      }
    });
  }, []);

  return (
    <div className="app">
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <TopButton />
    </div>
  );
};

export default App;
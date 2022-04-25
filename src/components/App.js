import Header from './Header';
import Footer from './Footer';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <About />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </div>
  );
};

export default App;
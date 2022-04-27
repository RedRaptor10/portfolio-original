import Header from './Header';
import Footer from './Footer';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default App;
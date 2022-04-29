import Header from './Header';
import Footer from './Footer';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import TopButton from './TopButton';


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
      <TopButton />
    </div>
  );
};

export default App;
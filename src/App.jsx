import styles from './App.module.scss';
import NavBar from './components/NavBar';
import HeroPage from './components/HeroPage';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavBar />
      <HeroPage />
      <Projects />
      <Skills />
      <About />
      <Footer />
    </>
  )
}

export default App;

import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Journey from './components/Journey';

function App() {
  return (
    <div className="App">
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Journey />
        <Work />
        <Contact />
        <Footer />
      </main>
      
    </div>
  );
}

export default App;

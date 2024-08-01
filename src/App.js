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

import Lottie from 'lottie-react'

import Animation2 from './assets/Animation - 1721398717969.json';


function App() {
  return (
    <div className="App">
      <Header />
      <main className='main'>
      <Lottie animationData={Animation2} style={{position: 'absolute', width:'100%', top:'60px', opacity:'0.2'}}/>
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

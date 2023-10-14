import './App.css';
import Preloader from "./components/Preloader";
import React,{useState,useEffect} from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="App bg-[#050816]">
      <Preloader load={load}/>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Education/>
      <Skills/>
      <Footer/>
    </div>
  );
}

export default App;

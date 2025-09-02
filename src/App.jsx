import React, {useState} from 'react'
import Navbar from './UI/Navbar'
import MobileMenu from './UI/MobileMenu';
import LoadingScreen from './UI/LoadingScreen';
import Home from './sections/Home';
import About from './sections/About';
import Project from './sections/Project';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      {!isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(true)}/>)}
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
      <Home />
      <About/>
      <Project/>
      <Contact/>
      <Footer />
    </>
  )
}

export default App

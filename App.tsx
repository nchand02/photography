
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Gear from './components/Gear';
import Courses from './components/Courses';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 font-sans leading-normal tracking-normal">
      <Header />
      <main>
        <Hero />
        <About />
        <Gear />
        <Courses />
        <Gallery />
        <Testimonials />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default App;
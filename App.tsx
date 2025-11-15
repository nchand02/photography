
import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Gear from './components/Gear.tsx';
import Courses from './components/Courses.tsx';
import Gallery from './components/Gallery.tsx';
import Testimonials from './components/Testimonials.tsx';
import Footer from './components/Footer.tsx';
import Chatbot from './components/Chatbot.tsx';

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
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/features/Hero';
import { About } from '../components/features/About';
import { Gear } from '../components/features/Gear';
import { Courses } from '../components/features/Courses';
import { Gallery } from '../components/features/Gallery';
import { Testimonials } from '../components/features/Testimonials';
import { Chatbot } from '../components/features/Chatbot';
import ErrorBoundary from '../components/common/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <div className="bg-dark-900 font-sans leading-normal tracking-normal">
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
    </ErrorBoundary>
  );
}

export default App;

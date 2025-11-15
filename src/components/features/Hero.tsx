import { Button } from '../common/Button';
import { scrollToElement } from '@/utils/scrollUtils';
import { SITE_CONFIG } from '@/constants/siteData';

export function Hero() {
  const scrollToCourses = () => {
    scrollToElement('#courses');
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center text-white text-center"
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <img
        src="https://picsum.photos/1920/1080?image=1050"
        alt="Photographer capturing a landscape"
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
      />
      <div className="relative z-10 p-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight tracking-tighter text-shadow">
          {SITE_CONFIG.hero.title}
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-shadow-sm">
          {SITE_CONFIG.hero.subtitle}
        </p>
        <Button onClick={scrollToCourses} size="lg" variant="primary">
          {SITE_CONFIG.hero.ctaText}
        </Button>
      </div>
    </section>
  );
}

import { SITE_CONFIG } from '@/constants/siteData';

export function About() {
  return (
    <section id="about" className="section-padding bg-dark-900 text-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <img
              src={SITE_CONFIG.about.imageUrl}
              alt="Navdeep Singh"
              className="rounded-full shadow-2xl mx-auto border-4 border-dark-700"
              loading="lazy"
            />
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h2 className="heading-secondary">About Navdeep Singh</h2>
            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              {SITE_CONFIG.about.greeting} {SITE_CONFIG.about.bio1}
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">{SITE_CONFIG.about.bio2}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

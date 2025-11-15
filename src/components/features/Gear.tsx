import { CameraIcon } from '../common/Icons';
import { SITE_CONFIG } from '@/constants/siteData';

export function Gear() {
  return (
    <section id="gear" className="section-padding bg-dark-800 text-white">
      <div className="container-custom text-center">
        <CameraIcon className="w-12 h-12 text-primary-400 mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-4">My Trusty Gear</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
          While the best camera is the one you have with you, many of my students ask about my
          equipment. My primary workhorse is the versatile and reliable{' '}
          {SITE_CONFIG.gear.primaryCamera}.
        </p>
        <div className="card p-8 inline-block">
          <h3 className="text-2xl font-semibold text-primary-400">
            {SITE_CONFIG.gear.primaryCamera}
          </h3>
          <p className="text-gray-400 mt-2">
            Paired with a selection of lenses like the {SITE_CONFIG.gear.lenses.join(' and the ')}.
          </p>
        </div>
      </div>
    </section>
  );
}

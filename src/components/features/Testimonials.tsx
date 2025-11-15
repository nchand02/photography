import { memo } from 'react';
import type { Testimonial } from '@/types';
import { TESTIMONIALS_DATA } from '@/constants/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = memo(({ testimonial }: TestimonialCardProps) => (
  <div className="card p-8">
    <p className="text-gray-300 text-lg italic mb-6">"{testimonial.quote}"</p>
    <div className="text-right">
      <p className="font-bold text-primary-400 text-xl">{testimonial.author}</p>
      <p className="text-gray-400">{testimonial.location}</p>
    </div>
  </div>
));

TestimonialCard.displayName = 'TestimonialCard';

export function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-dark-900 text-white">
      <div className="container-custom">
        <h2 className="heading-primary">What My Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map(testimonial => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

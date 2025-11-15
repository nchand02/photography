import React from 'react';
import type { Testimonial } from '../types.ts';

const testimonialsData: Testimonial[] = [
    {
        quote: "Navdeep's beginner course was a game-changer for me. I finally understand my camera and feel confident shooting in manual mode. His passion is infectious!",
        author: "Priya Singh",
        location: "Delhi"
    },
    {
        quote: "The street photography workshop was an incredible experience. Navdeep has a unique eye for capturing the soul of India. I learned so much about storytelling.",
        author: "Amit Patel",
        location: "Ahmedabad"
    },
    {
        quote: "I took the portrait class to improve my family photos, and the results are amazing. The lighting techniques Navdeep taught were simple but so effective.",
        author: "Sunita Rao",
        location: "Bangalore"
    }
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = React.memo(({ testimonial }) => (
    <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
        <p className="text-gray-300 text-lg italic mb-6">"{testimonial.quote}"</p>
        <div className="text-right">
            <p className="font-bold text-amber-400 text-xl">{testimonial.author}</p>
            <p className="text-gray-400">{testimonial.location}</p>
        </div>
    </div>
));

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="py-20 bg-gray-900 text-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12">What My Students Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonialsData.map((testimonial) => (
                        <TestimonialCard key={testimonial.author} testimonial={testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
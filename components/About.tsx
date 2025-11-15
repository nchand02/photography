import React from 'react';

const About: React.FC = () => {
    return (
        <section id="about" className="py-20 bg-gray-900 text-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/3">
                        <img src="https://picsum.photos/600/600?image=836" alt="Navdeep Singh" className="rounded-full shadow-2xl mx-auto border-4 border-gray-700" loading="lazy" />
                    </div>
                    <div className="md:w-2/3 text-center md:text-left">
                        <h2 className="text-3xl font-bold mb-4 text-amber-400">About Navdeep Singh</h2>
                        <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                            Namaste! I'm Navdeep, a passionate photography enthusiast based in Mumbai, India. My journey began with a simple desire to capture the vibrant chaos and serene beauty of my homeland. While I pursue photography as a hobby, my dedication has led me to win a national competition and even judge several others. My real joy comes from sharing what I've learned.
                        </p>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            I believe that everyone has a unique story to tell, and a camera is one of the most powerful tools to tell it. My workshops are designed to be more than just technical lessons; they are an experience. I aim to help you find your creative voice and translate your vision into breathtaking photographs. Join me, and let's create something beautiful together.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
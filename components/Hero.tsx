import React from 'react';

const Hero: React.FC = () => {
    
    const scrollToCourses = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        document.querySelector('#courses')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero" className="relative h-screen flex items-center justify-center text-white text-center">
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
            <img src="https://picsum.photos/1920/1080?image=1050" alt="Photographer capturing a landscape" className="absolute inset-0 w-full h-full object-cover z-[-1]" />
            <div className="relative z-10 p-6">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight tracking-tighter" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
                    Capture the World Through Your Lens
                </h1>
                <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
                    Learn the art of photography from Navdeep Singh, an Indian photographer dedicated to sharing his passion and expertise.
                </p>
                <button 
                    onClick={scrollToCourses}
                    className="bg-amber-500 text-gray-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-amber-400 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Explore Courses
                </button>
            </div>
        </section>
    );
};

export default Hero;
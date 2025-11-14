
import React from 'react';

const CameraIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-amber-400 mx-auto mb-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.776 48.776 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
    </svg>
);


const Gear: React.FC = () => {
    return (
        <section id="gear" className="py-20 bg-gray-800 text-white">
            <div className="container mx-auto px-6 text-center">
                <CameraIcon />
                <h2 className="text-3xl font-bold mb-4">My Trusty Gear</h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
                    While the best camera is the one you have with you, many of my students ask about my equipment. My primary workhorse is the versatile and reliable Canon 80D.
                </p>
                <div className="bg-gray-900 rounded-lg p-8 inline-block shadow-lg border border-gray-700">
                    <h3 className="text-2xl font-semibold text-amber-400">Canon EOS 80D</h3>
                    <p className="text-gray-400 mt-2">Paired with a selection of lenses like the versatile 18-135mm kit lens and the classic 50mm f/1.8 for beautiful portraits.</p>
                </div>
            </div>
        </section>
    );
};

export default Gear;

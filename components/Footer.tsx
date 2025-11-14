import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-8">
            <div className="container mx-auto px-6 text-center">
                <p>&copy; {new Date().getFullYear()} Navdeep Singh Photography. All Rights Reserved.</p>
                <div className="flex justify-center space-x-6 mt-4">
                    <a href="#" className="hover:text-amber-400 transition-colors duration-300">Instagram</a>
                    <a href="#" className="hover:text-amber-400 transition-colors duration-300">Facebook</a>
                    <a href="#" className="hover:text-amber-400 transition-colors duration-300">YouTube</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
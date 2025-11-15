import React from 'react';

const CameraIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-amber-400">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.776 48.776 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
    </svg>
);

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const navLinks = [
        { href: '#about', label: 'About' },
        { href: '#courses', label: 'Courses' },
        { href: '#gallery', label: 'Gallery' },
        { href: '#testimonials', label: 'Testimonials' },
    ];

    const handleLinkClick = React.useCallback((e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
    }, []);

    return (
        <header className="bg-gray-900 bg-opacity-80 backdrop-blur-md text-white fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <a href="#" className="flex items-center space-x-2">
                    <CameraIcon />
                    <span className="text-xl font-bold tracking-tight">Navdeep Singh</span>
                </a>

                <nav className="hidden md:flex space-x-8 items-center">
                    {navLinks.map(link => (
                         <a key={link.href} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="hover:text-amber-400 transition-colors duration-300">{link.label}</a>
                    ))}
                </nav>

                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                        </svg>
                    </button>
                </div>
            </div>
            
            {isOpen && (
                <div className="md:hidden bg-gray-800">
                    <nav className="flex flex-col items-center px-2 pt-2 pb-4 space-y-2">
                         {navLinks.map(link => (
                             <a key={link.href} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="block w-full text-center py-2 px-4 rounded-md hover:bg-gray-700 hover:text-amber-400 transition-colors duration-300">{link.label}</a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
import { useState, useCallback } from 'react';
import { CameraIcon, MenuIcon, CloseIcon } from '../common/Icons';
import { NAV_LINKS } from '@/constants/navigation';
import { scrollToElement } from '@/utils/scrollUtils';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
      e.preventDefault();
      scrollToElement(href);
      setIsOpen(false);
    },
    []
  );

  return (
    <header className="bg-dark-900 bg-opacity-80 backdrop-blur-md text-white fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div className="container-custom py-3 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <CameraIcon className="text-primary-400" />
          <span className="text-xl font-bold tracking-tight">Navdeep Singh</span>
        </a>

        <nav className="hidden md:flex space-x-8 items-center">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={e => handleLinkClick(e, link.href)}
              className="hover:text-primary-400 transition-colors duration-300 font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none hover:text-primary-400 transition-colors"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-dark-800 shadow-lg">
          <nav className="flex flex-col items-center px-2 pt-2 pb-4 space-y-2">
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={e => handleLinkClick(e, link.href)}
                className="block w-full text-center py-2 px-4 rounded-md hover:bg-dark-700 hover:text-primary-400 transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

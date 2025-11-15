import { SITE_CONFIG } from '@/constants/siteData';
import { SOCIAL_LINKS } from '@/constants/navigation';

export function Footer() {
  return (
    <footer className="bg-dark-900 text-gray-400 py-8 border-t border-dark-800">
      <div className="container-custom text-center">
        <p>
          &copy; {new Date().getFullYear()} {SITE_CONFIG.footer.copyright}
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          {SOCIAL_LINKS.map(link => (
            <a
              key={link.name}
              href={link.url}
              className="hover:text-primary-400 transition-colors duration-300"
              aria-label={link.name}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

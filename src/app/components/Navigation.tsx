import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleClick = (id: string) => {
    setActiveSection(id);
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => handleClick('home')}
              className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
            >
              KBG BOA
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleClick(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-purple-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <a
                href="https://wa.me/971523711530?text=Hello%20Kabangu%20Mathieu%2C%20I%20saw%20your%20website%20and%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-4 py-2 rounded-lg font-semibold transition-all text-sm"
              >
                🔥 Start a Project
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  activeSection === item.id
                    ? 'text-purple-400 bg-slate-800'
                    : 'text-gray-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://wa.me/971523711530?text=Hello%20Kabangu%20Mathieu%2C%20I%20saw%20your%20website%20and%20I%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-2 rounded-lg font-semibold mt-2"
            >
              🔥 Start a Project
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
import React, { useState } from 'react';
        import { Link, NavLink } from 'react-router-dom';
        import { motion, AnimatePresence } from 'framer-motion';
        import { Menu, X } from 'lucide-react';
        
        const navLinks = [
          { name: 'Home', path: '/' },
          { name: 'Work', path: '/work' },
          { name: 'Services', path: '/services' },
          { name: 'About', path: '/about' },
          { name: 'Contact', path: '/contact' },
        ];
        
        const Header: React.FC = () => {
          const [isOpen, setIsOpen] = useState(false);
        
          return (
            <header className="absolute top-0 left-0 right-0 z-50 p-4 md:p-8">
              <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl md:text-3xl font-bold tracking-tighter z-50">
                  Surya Productions
                </Link>
        
                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      className={({ isActive }) =>
                        `text-lg font-medium transition-colors hover:text-accent-cyan ${
                          isActive ? 'text-accent-cyan' : 'text-white'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </nav>
        
                {/* Mobile Navigation */}
                <div className="md:hidden z-50">
                  <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                  </button>
                </div>
              </div>
        
              {/* Mobile Menu */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="md:hidden absolute top-0 left-0 w-full h-screen bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-8"
                  >
                    {navLinks.map((link) => (
                      <NavLink
                        key={link.name}
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                          `text-3xl font-medium transition-colors hover:text-accent-cyan ${
                            isActive ? 'text-accent-cyan' : 'text-white'
                          }`
                        }
                      >
                        {link.name}
                      </NavLink>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </header>
          );
        };
        
        export default Header;

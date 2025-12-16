import React from 'react';
        import { Github, Linkedin, Twitter } from 'lucide-react';
        
        const Footer: React.FC = () => {
          return (
            <footer className="bg-primary py-8">
              <div className="container mx-auto px-4 text-center text-light-gray">
                <div className="flex justify-center space-x-6 mb-4">
                  <a href="#" className="hover:text-accent-cyan transition-colors"><Github /></a>
                  <a href="#" className="hover:text-accent-cyan transition-colors"><Linkedin /></a>
                  <a href="#" className="hover:text-accent-cyan transition-colors"><Twitter /></a>
                </div>
                <p>&copy; {new Date().getFullYear()} Advertisement Production Manager. All Rights Reserved.</p>
              </div>
            </footer>
          );
        };
        
        export default Footer;

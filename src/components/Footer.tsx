import React from 'react';
import { Github, Linkedin, Mail, Globe, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="py-12 glass bg-surface dark:bg-surface-dark bg-opacity-90 dark:bg-opacity-90">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
              Lokabhiram Chintada
            </h2>
            
            <p className="text-neutral-600 dark:text-neutral-400 mt-2">
              Software Engineer, Data Scientist and AI Enthusiast
            </p>
            
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://github.com/lokabhiram-chintada"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 dark:text-neutral-400 hover:text-primary transition-colors duration-300"
              >
                <Github size={20} />
              </a>
              
              <a 
                href="https://linkedin.com/in/lokabhiram-chintada"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 dark:text-neutral-400 hover:text-primary transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
              
              <a 
                href="mailto:lokabhiram.ucen@gmail.com"
                className="text-neutral-600 dark:text-neutral-400 hover:text-primary transition-colors duration-300"
              >
                <Mail size={20} />
              </a>
              
              <a 
                href="https://lokabhiram.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 dark:text-neutral-400 hover:text-primary transition-colors duration-300"
              >
                <Globe size={20} />
              </a>
            </div>
          </div>
          
          <div className="flex flex-col items-start md:items-end">
            <button 
              onClick={scrollToTop}
              className="flex items-center text-neutral-600 dark:text-neutral-400 hover:text-primary transition-colors duration-300"
            >
              <span className="mr-2">Back to top</span>
              <ArrowUp size={16} />
            </button>
            
            <p className="text-neutral-500 dark:text-neutral-500 text-sm mt-4">
              © {new Date().getFullYear()} Lokabhiram Chintada. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
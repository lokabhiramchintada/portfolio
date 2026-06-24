import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const headerVariants = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: -100, opacity: 0 },
  };

  const navVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
      },
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
  };

  const itemVariants = {
    open: { y: 0, opacity: 1 },
    closed: { y: -10, opacity: 0 },
  };

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 dark:bg-background-dark/90 backdrop-blur-md py-3 shadow-md' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        <a 
          href="#home"
          className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
        >
          Lokabhiram
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-5">
          <nav className="flex items-center gap-1 rounded-full glass px-2 py-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
                className="rounded-full px-3 py-2 text-sm text-neutral-600 dark:text-neutral-300 hover:bg-primary/10 hover:text-primary transition-colors duration-300 font-medium"
            >
              {link.name}
            </a>
          ))}
          </nav>
          <ThemeToggle />
        </div>

        {/* Mobile Navigation Button */}
        <div className="lg:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-neutral-600 dark:text-neutral-300 hover:text-primary transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.nav
        variants={navVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className={`lg:hidden absolute top-full left-0 right-0 glass py-4 ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              variants={itemVariants}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-neutral-600 dark:text-neutral-300 hover:text-primary transition-colors duration-300 py-2 font-medium"
            >
              {link.name}
            </motion.a>
          ))}
        </div>
      </motion.nav>
    </motion.header>
  );
};

export default Header;

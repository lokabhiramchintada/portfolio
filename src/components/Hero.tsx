import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ChevronDown, Github, Linkedin, Mail, Globe } from 'lucide-react';

const highlights = [
  { value: '1', label: 'published patent' },
  { value: '5+', label: 'hackathon honors' },
  { value: 'CV, Edge AI & IoT', label: 'research focus' },
];

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const scrollToNext = () => {
    const nextSection = sectionRef.current?.nextElementSibling;
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" ref={sectionRef} className="min-h-screen flex flex-col justify-center items-center pt-24 relative">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-between gap-10">
        <motion.div 
          className="lg:w-3/5 text-center lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-5">
            MS by Research @ IIIT Hyderabad
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent animate-gradient-x">
              Lokabhiram Chintada
            </span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-neutral-700 dark:text-neutral-300">
            <TypeAnimation
              sequence={[
                'Research Scholar',
                1000,
                'ML Engineer',
                1000,
                'AI Enthusiast',
                1000,
                'Software Engineer',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h2>
          
          <p className="text-neutral-600 dark:text-neutral-400 text-lg mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            I build computer vision, Edge AI, and IoT systems for real-world monitoring problems, with current research focused on waste management, smart cities, and public-space intelligence.
          </p>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <motion.a
              href="#achievements"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-medium transition-transform duration-300 hover:scale-105"
              whileHover={{ boxShadow: '0 0 15px rgba(0, 255, 221, 0.5)' }}
              whileTap={{ scale: 0.98 }}
            >
              See Achievements
            </motion.a>
            
            <motion.a
              href="#projects"
              className="px-6 py-3 rounded-full bg-transparent border border-primary text-primary font-medium transition-transform duration-300 hover:scale-105"
              whileHover={{ boxShadow: '0 0 15px rgba(0, 255, 221, 0.3)' }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects
            </motion.a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8 max-w-2xl mx-auto lg:mx-0">
            {highlights.map((highlight) => (
              <div key={highlight.label} className="rounded-lg glass px-4 py-3 text-center lg:text-left">
                <p className="text-xl font-bold text-primary">{highlight.value}</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{highlight.label}</p>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center lg:justify-start mt-8 gap-6">
            <motion.a
              href="https://github.com/lokabhiramchintada"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 dark:text-neutral-400 hover:text-primary transition-colors duration-300"
              whileHover={{ y: -5 }}
            >
              <Github size={24} />
            </motion.a>
            
            <motion.a
              href="https://linkedin.com/in/lokabhiram-chintada"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 dark:text-neutral-400 hover:text-primary transition-colors duration-300"
              whileHover={{ y: -5 }}
            >
              <Linkedin size={24} />
            </motion.a>
            
            <motion.a
              href="mailto:lokabhiram@outlook.com"
              className="text-neutral-600 dark:text-neutral-400 hover:text-primary transition-colors duration-300"
              whileHover={{ y: -5 }}
            >
              <Mail size={24} />
            </motion.a>
            
            <motion.a
              href="https://lokabhiram.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 dark:text-neutral-400 hover:text-primary transition-colors duration-300"
              whileHover={{ y: -5 }}
            >
              <Globe size={24} />
            </motion.a>
          </div>
        </motion.div>
        
        <motion.div 
          className="lg:w-2/5 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full mx-auto relative">
            {/* Animated border effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-75 blur-md animate-pulse-slow"></div>
            
            <div className="absolute inset-2 rounded-full bg-background dark:bg-background-dark"></div>
            
            <div className="absolute inset-4 rounded-full overflow-hidden bg-gradient-to-r from-primary/20 to-accent/20">
              {/* Profile photo would go here - using a placeholder */}
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src="/abhi.jpg"
                  alt="Abhi"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-neutral-600 dark:text-neutral-400 hover:text-primary transition-colors duration-300"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
};

export default Hero;

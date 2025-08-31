import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
  const response = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        
        // Reset success message after a delay
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } else {
        setSubmitError(data.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitError('Network error. Please check if the server is running and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const inputFocusClasses = "focus:ring-2 focus:ring-primary focus:border-transparent";

  return (
    <section id="contact" className="py-20">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-4 sm:px-6"
      >
        <h2 className="section-heading text-center">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-6 text-neutral-900 dark:text-neutral-100">Contact Information</h3>
            
            <div className="glass rounded-lg p-6">
              <div className="flex items-start mb-6">
                <div className="p-3 rounded-lg bg-surface-light dark:bg-surface-light-dark mr-4">
                  <Mail size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">Email</h4>
                  <a href="mailto:lokabhiram@outlook.com" className="text-neutral-600 dark:text-neutral-400 hover:text-primary transition-colors duration-300">
                    lokabhiram@outlook.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <div className="p-3 rounded-lg bg-surface-light dark:bg-surface-light-dark mr-4">
                  <Phone size={24} className="text-secondary" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">Phone</h4>
                  <a href="tel:+917673989061" className="text-neutral-600 dark:text-neutral-400 hover:text-primary transition-colors duration-300">
                    +91 7673989061
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 rounded-lg bg-surface-light dark:bg-surface-light-dark mr-4">
                  <MapPin size={24} className="text-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">Location</h4>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Hyderabad, India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-6 text-neutral-900 dark:text-neutral-100">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="glass rounded-lg p-6">
              <div className="mb-4">
                <label htmlFor="name" className="block text-neutral-700 dark:text-neutral-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-surface-light dark:bg-surface-light-dark rounded-lg p-3 text-neutral-900 dark:text-neutral-100 border border-neutral-300 dark:border-neutral-700 ${inputFocusClasses} focus:outline-none transition-all duration-300`}
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-neutral-700 dark:text-neutral-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-surface-light dark:bg-surface-light-dark rounded-lg p-3 text-neutral-900 dark:text-neutral-100 border border-neutral-300 dark:border-neutral-700 ${inputFocusClasses} focus:outline-none transition-all duration-300`}
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-neutral-700 dark:text-neutral-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full bg-surface-light dark:bg-surface-light-dark rounded-lg p-3 text-neutral-900 dark:text-neutral-100 border border-neutral-300 dark:border-neutral-700 ${inputFocusClasses} focus:outline-none transition-all duration-300 resize-none`}
                  required
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-medium transition-all duration-300 relative overflow-hidden group flex items-center justify-center"
                whileHover={{ scale: 1.02, boxShadow: '0 0 15px rgba(0, 255, 221, 0.5)' }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send size={18} className="ml-2" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </motion.button>
              
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-3 rounded-lg bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-center"
                >
                  Message sent successfully! Check your email for confirmation.
                </motion.div>
              )}
              
              {submitError && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-3 rounded-lg bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 text-center"
                >
                  {submitError}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
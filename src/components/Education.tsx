import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap } from 'lucide-react';

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Science in Data Science",
    institution: "Indian Institute of Technology Madras",
    period: "January 2022 - Present",
    description: "Key Subjects: Machine Learning Techniques, Application Development, Database Management, System Commands, Mathematics, and Statistics."
  },
  {
    degree: "Bachelor of Technology in Electronics and Communication Engineering",
    institution: "Jawaharlal Nehru Technological University Kakinada",
    period: "January 2021 - April 2024",
    description: "Key Subjects: Image Processing, Communication Systems, Electronics, Microprocessors and Controllers, and VLSI."
  },
  {
    degree: "Diploma in Programming",
    institution: "Indian Institute of Technology Madras",
    period: "May 2022 - December 2024",
    description: "Key Subjects: Web Application Development, Data Structures, System Commands, Database Management Systems, JAVA."
  }
];

const certificationsData = [
  "Foundations in Data Science and Programming (IIT Madras, 2022)",
  "GATE in Data Science and AI (2024)",
  "GATE in Electronics and Communication (2024)"
];

const Education: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

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

  return (
    <section id="education" className="py-20">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-4 sm:px-6"
      >
        <h2 className="section-heading text-center">Education & Certifications</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
          {educationData.map((education, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass rounded-lg p-6 card-hover border-t-4 border-primary"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary bg-opacity-20 mb-4 mx-auto">
                <GraduationCap size={24} className="text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold text-center mb-2 text-neutral-100">{education.degree}</h3>
              <p className="text-center text-primary font-medium mb-2">{education.institution}</p>
              <p className="text-center text-neutral-400 text-sm mb-4">{education.period}</p>
              <p className="text-neutral-300 text-center">{education.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          variants={itemVariants}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Certifications & Achievements
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {certificationsData.map((certification, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-full px-4 py-2 text-neutral-300"
              >
                {certification}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Education;
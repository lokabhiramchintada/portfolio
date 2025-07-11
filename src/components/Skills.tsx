import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Code2, Database, Server, Cpu,
  Layers, GitBranch, LineChart, Terminal
} from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillsData: SkillCategory[] = [
  {
    title: "Programming",
    icon: <Code2 size={32} className="text-primary" />,
    skills: ["Python", "Java", "C", "JavaScript", "SQL", "Bash"]
  },
  {
    title: "Data Science/ML",
    icon: <LineChart size={32} className="text-secondary" />,
    skills: ["PyTorch", "TensorFlow", "Keras", "Pandas", "NumPy", "Scikit-learn", "OpenCV"]
  },
  {
    title: "Web Development",
    icon: <Layers size={32} className="text-accent" />,
    skills: ["Flask", "Vue.js", "HTML/CSS", "REST APIs", "Jinja2"]
  },
  {
    title: "Databases & Tools",
    icon: <Database size={32} className="text-primary" />,
    skills: ["SQLite", "Redis", "Docker", "Git", "Celery", "MQTT", "Postman"]
  },
  {
    title: "Other Skills",
    icon: <Cpu size={32} className="text-secondary" />,
    skills: ["Linux/UNIX", "Computer Vision", "GenAI", "IoT Systems", "Data Analytics"]
  }
];

const Skills: React.FC = () => {
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
    <section id="skills" className="py-20">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-4 sm:px-6"
      >
        <h2 className="section-heading text-center">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass rounded-lg p-6 card-hover"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-surface-light dark:bg-surface-light-dark mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="px-3 py-1 rounded-full bg-surface-light dark:bg-surface-light-dark text-neutral-700 dark:text-neutral-300 text-sm"
                    whileHover={{
                      backgroundColor: 'rgba(0, 255, 221, 0.1)',
                      color: '#00FFDD',
                      transition: { duration: 0.2 }
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Tools & Technologies
          </h3>
          
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
            {[
              { name: 'Python', icon: '🐍' },
              { name: 'PyTorch', icon: '🔥' },
              { name: 'React', icon: '⚛️' },
              { name: 'Flask', icon: '🌶️' },
              { name: 'Docker', icon: '🐳' },
              { name: 'Git', icon: '📝' },
              { name: 'Linux', icon: '🐧' },
              { name: 'AI/ML', icon: '🤖' }
            ].map((tech, index) => (
              <motion.div
                key={index}
                className="skill-icon"
                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 255, 221, 0.1)' }}
                title={tech.name}
              >
                <span className="text-2xl">
                  {tech.icon}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
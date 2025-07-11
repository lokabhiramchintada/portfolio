import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Code } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  grade?: string;
  image?: string;
  link?: string;
  github?: string;
}

const projectsData: Project[] = [
  {
    title: "System Threat Forecaster",
    description: "Built a machine learning pipeline to predict probabilities of malware infection using telemetry features. Conducted EDA, handled missing values, encoded categorical variables, and applied SMOTE to class imbalance. Trained multiple models and achieved high ROC-AUC.",
    technologies: ["Machine Learning", "Python", "Random Forest", "LightGBM", "AdaBoost"],
    grade: "Grade: S (IIT Madras)"
  },
  {
    title: "Household Services Application",
    description: "Designed a multi-user home servicing platform using Flask, SQLite, VueJS, and Redis. Implemented Celery job scheduling and improved system performance through Redis caching. Managed real-time status updates, role-based access, and fault-tolerant backend integration.",
    technologies: ["Flask", "VueJS", "SQLite", "Redis", "Celery"],
    grade: "Grade: S (IIT Madras)"
  },
  {
    title: "Influencer Engagement Platform",
    description: "Created a role-based marketing platform using Flask, Jinja2, Bootstrap and SQLite, connecting sponsors with influencers. Included complete campaign lifecycle management with admin dashboards and campaign analytics.",
    technologies: ["Flask", "Jinja2", "Bootstrap", "SQLite"],
    grade: "Grade: S (IIT Madras)"
  },
  {
    title: "Fire Detection and Personnel Accountability System",
    description: "Built a real-time fire detection and human accountability system using PyTorch, MobileNetSSD, and LSTM networks. The system triggers alarms and sends alerts during emergency scenarios.",
    technologies: ["PyTorch", "MobileNetSSD", "LSTM", "Computer Vision"],
    grade: "Grade: A+ (JNTUK)"
  },
  {
    title: "Engage2Value – From Clicks to Conversions",
    description: "Developed a machine learning model to predict customer purchase value based on multi-session digital behavior. Performed extensive EDA and engineered features from user behavior, device, marketing channels, and geographic metadata.",
    technologies: ["LightGBM", "XGBoost", "Machine Learning", "Python"],
    grade: "Top 20 out of 1000"
  }
];

const Projects: React.FC = () => {
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
    <section id="projects" className="py-20">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-4 sm:px-6"
      >
        <h2 className="section-heading text-center">Featured Projects</h2>
        
        <div className="card-grid mt-12">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="project-card"
              whileHover={{
                rotateY: 5,
                rotateX: 5,
                z: 50,
              }}
            >
              <div className="relative overflow-hidden mb-4">
                <div className="h-3 w-full bg-gradient-to-r from-primary via-secondary to-accent rounded-t-md"></div>
              </div>
              
              <h3 className="text-xl font-semibold mb-2 text-neutral-800 dark:text-neutral-100">{project.title}</h3>
              
              {project.grade && (
                <p className="text-sm font-medium text-success mb-2">{project.grade}</p>
              )}
              
              <p className="text-neutral-700 dark:text-neutral-300 mb-4 line-clamp-3">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="text-xs font-medium bg-surface-light dark:bg-surface-light-dark rounded-full px-2 py-1 text-neutral-700 dark:text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-end space-x-3 mt-auto pt-2 border-t border-neutral-200 dark:border-neutral-800">
                {project.github && (
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-600 dark:text-neutral-400 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={18} />
                  </a>
                )}
                
                {project.link && (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-600 dark:text-neutral-400 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
                
                <span className="text-neutral-600 dark:text-neutral-400 hover:text-primary transition-colors duration-300 cursor-pointer">
                  <Code size={18} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
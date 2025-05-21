import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

const experienceData: ExperienceItem[] = [
  {
    title: "Research Software Intern",
    company: "International Institute of Information Technology Hyderabad",
    location: "Hyderabad",
    period: "January 2024 - Present",
    description: [
      "Developed a real-time crowd monitoring system using PyTorch with features like human detection, people counting, loitering and fall detection, fighting and unusual pose recognition, and emergency alerting.",
      "Integrated heatmap-based density estimation, overcrowding detection, and threat prediction for proactive incident response in high-density areas.",
      "Developed a system combining RGB and thermal IR cameras to classify waste into wet, dry, and mixed categories.",
      "Enabled detection of wet waste inside plastic bags, paper, and plastic containers using multimodal data fusion techniques.",
      "Developed a monitoring system for illegal dumping sites using CNN models and time-series analysis.",
      "Implemented IoT solutions with BLE sensors and MQTT protocol for real-time monitoring and automation of home appliances."
    ]
  },
  {
    title: "Telecommunications Intern",
    company: "Bharat Sanchar Nigam Limited",
    location: "Visakhapatnam",
    period: "May 2023 - June 2023",
    description: [
      "Gained practical exposure to the workings of fiber optic communications, broadband networks, and PSTN systems.",
      "Analyzed network configurations and optimized signal transmission over different mediums.",
      "Contributed to enhancing operational efficiency by diagnosing and resolving network issues."
    ]
  },
  {
    title: "Deputy Secretary and Web Admin",
    company: "Student House Council, Indian Institute of Technology Madras",
    location: "Chennai",
    period: "September 2022 - August 2023",
    description: [
      "Organized workshops and tech events, promoting skills development and knowledge sharing among students.",
      "Managed the council's official website, ensuring timely updates and seamless user experience.",
      "Facilitated guest lectures, connecting students with industry experts and enhancing academic engagement."
    ]
  }
];

const Experience: React.FC = () => {
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
    <section id="experience" className="py-20">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-4 sm:px-6"
      >
        <h2 className="section-heading text-center">Work Experience</h2>
        
        <div className="max-w-3xl mx-auto mt-12">
          {experienceData.map((experience, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="timeline-item mb-10"
            >
              <div className="glass rounded-lg p-6 border-l-4 border-primary">
                <div className="flex flex-col sm:flex-row sm:justify-between mb-4">
                  <h3 className="text-xl font-semibold text-primary">{experience.title}</h3>
                  <span className="text-neutral-400 text-sm mt-1 sm:mt-0">{experience.period}</span>
                </div>
                
                <div className="mb-4">
                  <p className="text-lg font-medium text-neutral-200">{experience.company}</p>
                  <p className="text-neutral-400 text-sm">{experience.location}</p>
                </div>
                
                <ul className="list-disc pl-5 space-y-2 text-neutral-300">
                  {experience.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
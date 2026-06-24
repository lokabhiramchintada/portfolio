import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, FileText, Medal, Trophy } from 'lucide-react';

const patent = {
  status: 'Patent published',
  number: '202541081348',
  date: '28-August-2025',
  title:
    'System and Method for Detecting Unauthorized Waste Disposal and Monitoring Garbage-Vulnerable Points Using 360-degree Imagery',
};

const competitions = [
  {
    result: 'Winner',
    event: 'Lloyds IP & I Hackathon on Agentic AI',
    organizer: 'Lloyds Banking Group',
  },
  {
    result: 'Second',
    event: 'ISEC Data Science Challenge 2026',
    organizer: 'ISEC 2026 Jaipur',
  },
  {
    result: 'Finalist',
    event: 'Demos - SparQ2026',
    organizer: 'Qualcomm',
  },
  {
    result: 'Finalist',
    event: 'Demos - SparQ2025',
    organizer: 'Qualcomm',
  },
  {
    result: 'Regionals',
    event: 'AMD Slingshot 2026 Hackathon',
    organizer: 'AMD',
  },
];

const Achievements: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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
    <section id="achievements" className="py-20">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="container mx-auto px-4 sm:px-6"
      >
        <div className="section-kicker mx-auto">
          Publications, patents, and competitions
        </div>
        <h2 className="section-heading text-center">Research Output & Wins</h2>
        <p className="section-subtitle mx-auto text-center">
          A focused snapshot of published intellectual property and competitive AI/data science outcomes.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.35fr] gap-6 mt-12">
          <motion.article
            variants={itemVariants}
            className="glass rounded-lg p-6 md:p-7 border-l-4 border-primary"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="icon-badge">
                <FileText size={22} className="text-primary" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                  Publications
                </p>
                <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                  {patent.status}
                </h3>
              </div>
            </div>

            <dl className="space-y-4">
              <div>
                <dt className="text-sm text-neutral-500 dark:text-neutral-400">Application number</dt>
                <dd className="text-lg font-semibold text-primary">{patent.number}</dd>
              </div>
              <div>
                <dt className="text-sm text-neutral-500 dark:text-neutral-400">Filing/Priority date</dt>
                <dd className="text-neutral-800 dark:text-neutral-200">{patent.date}</dd>
              </div>
              <div>
                <dt className="text-sm text-neutral-500 dark:text-neutral-400">Title</dt>
                <dd className="mt-1 text-neutral-800 dark:text-neutral-200 leading-relaxed">
                  {patent.title}
                </dd>
              </div>
            </dl>
          </motion.article>

          <motion.div variants={itemVariants} className="glass rounded-lg p-6 md:p-7">
            <div className="flex items-center gap-3 mb-6">
              <div className="icon-badge">
                <Trophy size={22} className="text-primary" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                  Hackathons and competitions
                </p>
                <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                  Competitive Highlights
                </h3>
              </div>
            </div>

            <div className="space-y-3">
              {competitions.map((competition, index) => (
                <motion.div
                  key={`${competition.result}-${competition.event}`}
                  variants={itemVariants}
                  className="flex gap-4 rounded-lg bg-surface-light/70 dark:bg-surface-light-dark/70 p-4"
                >
                  <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/15">
                    {index < 2 ? (
                      <Medal size={18} className="text-primary" />
                    ) : (
                      <Award size={18} className="text-primary" />
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900 dark:text-neutral-100">
                      {competition.result} - {competition.event}
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {competition.organizer}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Achievements;

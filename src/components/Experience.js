import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

const Experience = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const experiences = [
    {
      id: 1,
      role: 'Associate Software Engineer',
      company: 'Sterling BPO (Australian-based)',
      period: '01/12/2025 – Present',
      description: [
        'Contributing to the development and maintenance of software solutions within an agile team environment.',
        'Collaborating with senior engineers to design, develop, and test features using React, React Native, Laravel, RESTful API Development.',
        'Debugging and resolving technical issues to ensure system stability and performance.'
      ]
    }
  ];

  return (
    <section id="experience" className={`py-20 ${
      darkMode ? 'bg-dark-800' : 'bg-white'
    }`}>
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Work Experience</span>
            </h2>
            <div className={`w-24 h-1 mx-auto rounded-full ${
              darkMode ? 'bg-primary-500' : 'bg-primary-600'
            }`} />
          </motion.div>

          {/* Experience Timeline */}
          <div className="space-y-12">
            {experiences.map((exp) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className={`p-8 rounded-xl relative overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                  darkMode
                    ? 'bg-dark-700 border border-dark-600'
                    : 'bg-white border border-gray-200 shadow-lg'
                }`}
              >
                <div className={`absolute top-0 left-0 w-2 h-full ${
                  darkMode ? 'bg-primary-500' : 'bg-primary-600'
                }`} />
                
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className={`text-2xl font-bold mb-2 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 mb-2">
                       <FaBriefcase className={darkMode ? 'text-primary-400' : 'text-primary-600'} />
                       <span className={`text-lg font-medium ${
                         darkMode ? 'text-gray-200' : 'text-gray-700'
                       }`}>
                         {exp.company}
                       </span>
                    </div>
                  </div>
                  
                  <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${
                    darkMode 
                      ? 'bg-primary-900/30 text-primary-300 border border-primary-800' 
                      : 'bg-primary-100 text-primary-700'
                  }`}>
                    <FaCalendarAlt />
                    {exp.period}
                  </div>
                </div>

                <div className="space-y-3 pl-4 border-l-2 border-gray-200 dark:border-gray-700 ml-1">
                  {exp.description.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className={`mt-2 w-2 h-2 rounded-full flex-shrink-0 ${
                        darkMode ? 'bg-primary-400' : 'bg-primary-600'
                      }`} />
                      <p className={`leading-relaxed ${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

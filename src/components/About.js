import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaGraduationCap, FaRocket, FaHeart } from 'react-icons/fa';

const About = ({ darkMode }) => {
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

  const stats = [
    { number: '4+', label: 'Years Learning', icon: FaGraduationCap },
    { number: '10+', label: 'Projects Built', icon: FaCode },
    { number: '8+', label: 'Technologies', icon: FaRocket },
    { number: '100%', label: 'Passion', icon: FaHeart },
  ];

  return (
    <section id="about" className={`py-20 ${
      darkMode ? 'bg-dark-800' : 'bg-white'
    }`}>
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">About Me</span>
            </h2>
            <div className={`w-24 h-1 mx-auto rounded-full ${
              darkMode ? 'bg-primary-500' : 'bg-primary-600'
            }`} />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h3 className={`text-2xl font-semibold mb-4 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Passionate Full Stack Developer
                </h3>
                <p className={`text-lg leading-relaxed mb-6 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  I'm a dedicated undergraduate student pursuing a <strong>BSc (Hons) Full Stack Software Engineering</strong> degree. 
                  My journey in software development began with a curiosity about how things work, and it has evolved into a 
                  passion for creating innovative solutions that make a difference.
                </p>
                <p className={`text-lg leading-relaxed mb-6 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  I specialize in building robust applications using modern technologies like <strong>React Native, Java, PHP, Node.js, 
                  Spring Boot, Android, Laravel, MySQL, HTML, CSS, Tailwind, and Bootstrap</strong>. My approach combines technical 
                  excellence with creative problem-solving to deliver exceptional user experiences.
                </p>
              </div>

              {/* Key Points */}
              <div className="space-y-4">
                {[
                  "🎯 Focused on creating scalable and maintainable applications",
                  "🚀 Always learning and adapting to new technologies",
                  "💡 Passionate about solving complex problems with elegant solutions",
                  "🤝 Strong believer in collaboration and knowledge sharing",
                  "📱 Experienced in both mobile and web development",
                ].map((point, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className={`flex items-center space-x-3 ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    <span className="text-lg">{point}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Stats & Visual Elements */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className={`p-6 rounded-xl text-center card-hover ${
                      darkMode
                        ? 'bg-dark-700 border border-dark-600'
                        : 'bg-gray-50 border border-gray-200'
                    }`}
                  >
                    <div className={`text-3xl mb-3 ${
                      darkMode ? 'text-primary-400' : 'text-primary-600'
                    }`}>
                      <stat.icon />
                    </div>
                    <div className={`text-3xl font-bold mb-2 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {stat.number}
                    </div>
                    <div className={`text-sm font-medium ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Education Card */}
              <motion.div
                variants={itemVariants}
                className={`p-6 rounded-xl card-hover ${
                  darkMode
                    ? 'bg-gradient-to-br from-primary-900/20 to-purple-900/20 border border-primary-800/30'
                    : 'bg-gradient-to-br from-primary-50 to-purple-50 border border-primary-200'
                }`}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`p-3 rounded-lg ${
                    darkMode ? 'bg-primary-600' : 'bg-primary-100'
                  }`}>
                    <FaGraduationCap className={`text-xl ${
                      darkMode ? 'text-white' : 'text-primary-600'
                    }`} />
                  </div>
                  <div>
                    <h4 className={`text-lg font-semibold ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      BSc (Hons) Full Stack Software Engineering
                    </h4>
                    <p className={`text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      Undergraduate Student
                    </p>
                  </div>
                </div>
                <p className={`text-sm leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Currently pursuing comprehensive education in full-stack development, 
                  covering both frontend and backend technologies with hands-on project experience.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;


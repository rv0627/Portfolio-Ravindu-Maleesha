import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaDownload } from 'react-icons/fa';

const Hero = ({ darkMode }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      href: 'https://github.com/rv0627',
      color: 'hover:text-gray-800',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/ravindu-maleesha-598275256/',
      color: 'hover:text-blue-600',
    },
    {
      name: 'WhatsApp',
      icon: FaWhatsapp,
      href: 'https://wa.me/94769831282',
      color: 'hover:text-green-500',
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      href: 'mailto:ravindumaleesha077@gmail.com',
      color: 'hover:text-red-500',
    },
  ];

  return (
  <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className={`absolute top-1/4 left-1/4 w-72 h-72 rounded-full opacity-20 blur-3xl ${
          darkMode ? 'bg-primary-500' : 'bg-primary-300'
        }`} />
        <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl ${
          darkMode ? 'bg-purple-500' : 'bg-purple-300'
        }`} />
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-center justify-between gap-10 md:gap-16 mt-16"
        >
          {/* Left: Text Content */}
          <div className="flex-1 text-center md:text-left">
            {/* Greeting */}
            <motion.div variants={itemVariants} className="mb-6 mt-16">
              <span className={`text-lg font-medium ${
                darkMode ? 'text-primary-400' : 'text-primary-600'
              }`}>
                Hello, I'm
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              <span className="gradient-text">Ravindu Maleesha</span>
            </motion.h1>

            {/* Title */}
            <motion.div variants={itemVariants} className="mb-8">
              <h2 className={`text-2xl md:text-3xl font-semibold mb-4 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Full Stack Software Engineering Student
              </h2>
              <p className={`text-lg md:text-xl ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Passionate about creating innovative solutions with modern technologies
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className={`text-lg md:text-xl mb-12 max-w-3xl mx-auto md:mx-0 leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              🎓 Undergraduate <strong>BSc (Hons) Full Stack Software Engineering at Bermingham City University, UK</strong> undergraduate student
              with expertise in <strong>React Native, Java, PHP, Node.js, Spring Boot, Android, Laravel, MySQL</strong>
              and modern web technologies. Building the future, one line of code at a time.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mb-12"
            >
              <motion.a
                href="#projects"
                className="btn-primary inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                className="btn-secondary inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
              <a
                href={process.env.PUBLIC_URL + "/CV.pdf"}
                download
                className="btn-secondary inline-flex items-center gap-2"
                style={{ minWidth: '140px', justifyContent: 'center' }}
              >
                <FaDownload /> Download CV
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center md:justify-start space-x-6"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-2xl transition-colors duration-300 ${
                    darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-800'
                  } ${social.color}`}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.name}
                >
                  <social.icon />
                </motion.a>
              ))}
            </motion.div>
          </div>
          {/* Right: Profile Photo */}
          {/* Right: Profile Photo */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center w-full md:w-auto mb-8 md:mb-0 relative"
            style={{ zIndex: 10, marginTop: '-2rem' }}
          >
            <span
              className="inline-block rounded-full p-1 bg-gradient-to-tr from-primary-400 via-blue-400 to-purple-400 shadow-xl"
              style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)' }}
            >
              <img
                src={process.env.PUBLIC_URL + "/profile.jpg"}
                alt="Ravindu Maleesha Profile"
                className="w-40 h-40 sm:w-56 sm:h-56 rounded-full object-cover shadow-lg transition-transform duration-300 hover:scale-105"
                style={{ background: darkMode ? '#22223b' : '#fff' }}
              />
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className={`w-6 h-10 border-2 rounded-full flex justify-center ${
          darkMode ? 'border-white' : 'border-gray-600'
        }`}>
          <motion.div
            className={`w-1 h-3 rounded-full mt-2 ${
              darkMode ? 'bg-white' : 'bg-gray-600'
            }`}
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;


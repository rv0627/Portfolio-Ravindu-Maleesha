import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaReact, 
  FaJava, 
  FaPhp, 
  FaNodeJs, 
  FaAndroid, 
  FaHtml5, 
  FaCss3Alt, 
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaServer
} from 'react-icons/fa';
import { 
  SiSpringboot, 
  SiLaravel, 
  SiMysql, 
  SiMongodb, 
  SiTailwindcss, 
  SiJavascript,
  SiTypescript,
  SiFirebase
} from 'react-icons/si';

const Skills = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React Native", icon: FaReact, level: 90, color: "text-blue-500" },
        { name: "HTML5", icon: FaHtml5, level: 95, color: "text-orange-500" },
        { name: "CSS3", icon: FaCss3Alt, level: 90, color: "text-blue-600" },
        { name: "JavaScript", icon: SiJavascript, level: 85, color: "text-yellow-500" },
        { name: "TypeScript", icon: SiTypescript, level: 75, color: "text-blue-600" },
        { name: "Tailwind CSS", icon: SiTailwindcss, level: 90, color: "text-cyan-500" },
        { name: "Bootstrap", icon: FaBootstrap, level: 85, color: "text-purple-500" },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Java", icon: FaJava, level: 90, color: "text-red-500" },
        { name: "Spring Boot", icon: SiSpringboot, level: 85, color: "text-green-500" },
        { name: "PHP", icon: FaPhp, level: 80, color: "text-indigo-500" },
        { name: "Laravel", icon: SiLaravel, level: 75, color: "text-red-600" },
        { name: "Node.js", icon: FaNodeJs, level: 80, color: "text-green-600" },
        { name: "Firebase", icon: SiFirebase, level: 70, color: "text-yellow-600" },
      ]
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "MySQL", icon: SiMysql, level: 85, color: "text-blue-700" },
        { name: "MongoDB", icon: SiMongodb, level: 75, color: "text-green-700" },
        { name: "Git", icon: FaGitAlt, level: 90, color: "text-orange-600" },
        { name: "GitHub", icon: FaGithub, level: 95, color: "text-gray-800" },
        { name: "Android", icon: FaAndroid, level: 80, color: "text-green-500" },
        { name: "Server Management", icon: FaServer, level: 70, color: "text-gray-600" },
      ]
    }
  ];

  return (
    <section id="skills" className={`py-20 ${
      darkMode ? 'bg-dark-900' : 'bg-gray-50'
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
              <span className="gradient-text">Skills & Technologies</span>
            </h2>
            <div className={`w-24 h-1 mx-auto rounded-full ${
              darkMode ? 'bg-primary-500' : 'bg-primary-600'
            }`} />
            <p className={`text-lg mt-6 max-w-2xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              A comprehensive toolkit for building modern, scalable applications across multiple platforms
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div key={categoryIndex} variants={itemVariants}>
                <h3 className={`text-2xl font-semibold mb-8 text-center ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {category.title}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      variants={itemVariants}
                      className={`p-6 rounded-xl card-hover ${
                        darkMode
                          ? 'bg-dark-800 border border-dark-700'
                          : 'bg-white border border-gray-200'
                      }`}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center space-x-4 mb-4">
                        <div className={`text-3xl ${skill.color}`}>
                          <skill.icon />
                        </div>
                        <div>
                          <h4 className={`text-lg font-semibold ${
                            darkMode ? 'text-white' : 'text-gray-900'
                          }`}>
                            {skill.name}
                          </h4>
                        </div>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className={`w-full rounded-full h-2 ${
                        darkMode ? 'bg-dark-700' : 'bg-gray-200'
                      }`}>
                        <motion.div
                          className={`h-2 rounded-full ${
                            skill.color.includes('blue') ? 'bg-blue-500' :
                            skill.color.includes('green') ? 'bg-green-500' :
                            skill.color.includes('red') ? 'bg-red-500' :
                            skill.color.includes('yellow') ? 'bg-yellow-500' :
                            skill.color.includes('purple') ? 'bg-purple-500' :
                            skill.color.includes('orange') ? 'bg-orange-500' :
                            skill.color.includes('cyan') ? 'bg-cyan-500' :
                            skill.color.includes('indigo') ? 'bg-indigo-500' :
                            'bg-primary-500'
                          }`}
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                        />
                      </div>
                      
                      <div className="flex justify-between items-center mt-2">
                        <span className={`text-sm font-medium ${
                          darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          Proficiency
                        </span>
                        <span className={`text-sm font-bold ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          {skill.level}%
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className={`mt-16 p-8 rounded-xl text-center ${
              darkMode
                ? 'bg-gradient-to-r from-primary-900/20 to-purple-900/20 border border-primary-800/30'
                : 'bg-gradient-to-r from-primary-50 to-purple-50 border border-primary-200'
            }`}
          >
            <h3 className={`text-2xl font-semibold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Continuous Learning & Growth
            </h3>
            <p className={`text-lg leading-relaxed max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              I believe in staying current with the latest technologies and best practices. 
              My skill levels reflect my commitment to continuous learning and hands-on experience 
              with real-world projects. I'm always eager to explore new technologies and expand my expertise.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;


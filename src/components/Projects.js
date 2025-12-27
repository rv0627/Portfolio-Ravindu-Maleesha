import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaCode, FaMobile, FaGlobe, FaDatabase } from 'react-icons/fa';

const Projects = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState('all');

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

  const projects = [
    {
      id: 1,
      title: "SkillShare Platform",
      description: "A comprehensive social media-style skill-sharing platform with posts, comments, likes, and Google OAuth integration. Built with React Native frontend and Spring Boot backend.",
      image: "/api/placeholder/600/400",
      technologies: ["React Native", "Spring Boot", "Java", "MySQL", "Google OAuth"],
      category: "fullstack",
      githubUrl: "https://github.com/rv0627/Skill-Share-Website-Using-React-Native-Spring-Boot",
      liveUrl: null,
      features: [
        "Social media-style interface",
        "Post creation and management",
        "Comment and like system",
        "Google OAuth authentication",
        "Real-time updates",
        "Responsive design"
      ],
      icon: FaGlobe
    },
    {
      id: 2,
      title: "Land Management App",
      description: "A comprehensive mobile application for managing land activities with React Native frontend and Spring Boot backend. Features include activity tracking, reporting, and data visualization.",
      image: "/api/placeholder/600/400",
      technologies: ["React Native", "Spring Boot", "Java", "MySQL", "REST API"],
      category: "mobile",
      githubUrl: "https://github.com/rv0627/React_Native_Mobile_App_Frontend-Land-",
      liveUrl: null,
      features: [
        "Land activity tracking",
        "Data visualization",
        "Report generation",
        "Offline capability",
        "User management",
        "Real-time synchronization"
      ],
      icon: FaMobile
    },
    {
      id: 3,
      title: "Bus Ticketing App",
      description: "An M-Commerce Android application for booking bus tickets with real-time tracking capabilities. Features secure payment processing and route optimization.",
      image: "/api/placeholder/600/400",
      technologies: ["Android", "Java", "Firebase", "Google Maps API", "Payment Gateway"],
      category: "mobile",
      githubUrl: "https://github.com/rv0627/SITB-M-Commerce-Bus-Ticket-Booking-Customer-App-Android",
      liveUrl: null,
      features: [
        "Ticket booking system",
        "Real-time bus tracking",
        "Payment integration",
        "Route optimization",
        "User profiles",
        "Booking history"
      ],
      icon: FaMobile
    },
    {
      id: 4,
      title: "Source1 Solution App",
      description: "A comprehensive Java Swing desktop application for managing business operations including orders, invoices, and shipping. Features advanced reporting and inventory management.",
      image: "/api/placeholder/600/400",
      technologies: ["Java", "Swing", "MySQL", "JDBC", "Desktop Application"],
      category: "desktop",
      githubUrl: "https://github.com/rv0627/Source1Solution-Application-Guwana-Country",
      liveUrl: null,
      features: [
        "Order management",
        "Invoice generation",
        "Shipping tracking",
        "Inventory management",
        "Financial reporting",
        "User authentication"
      ],
      icon: FaCode
    },
    {
      id: 5,
      title: "Handicraft E-Commerce Platform",
      description: "A tailored e-commerce platform for Sri Lankan artisans to showcase and sell handmade products. Built with React, Tailwind CSS, and Laravel, featuring secure payments via PayHere.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Laravel", "MySQL", "PayHere"],
      category: "fullstack",
      githubUrl: null,
      liveUrl: null,
      features: [
        "Product catalog and search",
        "Secure payment processing (PayHere)",
        "User management & orders",
        "Responsive design",
        "Admin dashboard",
        "Cart functionality"
      ],
      icon: FaGlobe
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'desktop', name: 'Desktop Apps' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className={`py-20 ${
      darkMode ? 'bg-dark-800' : 'bg-white'
    }`}>
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <div className={`w-24 h-1 mx-auto rounded-full ${
              darkMode ? 'bg-primary-500' : 'bg-primary-600'
            }`} />
            <p className={`text-lg mt-6 max-w-2xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              A showcase of my recent work, demonstrating expertise across different platforms and technologies
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? darkMode
                      ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/25'
                      : 'bg-primary-600 text-white shadow-lg shadow-primary-500/25'
                    : darkMode
                      ? 'bg-dark-700 text-gray-300 hover:bg-dark-600 hover:text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className={`rounded-xl overflow-hidden card-hover ${
                  darkMode
                    ? 'bg-dark-700 border border-dark-600'
                    : 'bg-white border border-gray-200'
                }`}
                whileHover={{ y: -5 }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`w-full h-full flex items-center justify-center ${
                    darkMode ? 'bg-dark-600' : 'bg-gray-100'
                  }`}>
                    <project.icon className={`text-6xl ${
                      darkMode ? 'text-primary-400' : 'text-primary-600'
                    }`} />
                  </div>
                  <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaGithub size={20} />
                      </motion.a>
                    )}
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaExternalLinkAlt size={20} />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-3 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {project.title}
                  </h3>
                  
                  <p className={`text-sm leading-relaxed mb-4 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className={`text-sm font-semibold mb-2 ${
                      darkMode ? 'text-gray-200' : 'text-gray-700'
                    }`}>
                      Key Features:
                    </h4>
                    <ul className="grid grid-cols-2 gap-1">
                      {project.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className={`text-xs ${
                          darkMode ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                          • {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 text-xs font-medium rounded-full ${
                          darkMode
                            ? 'bg-primary-900/30 text-primary-300 border border-primary-800'
                            : 'bg-primary-100 text-primary-700 border border-primary-200'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 flex items-center justify-center space-x-2 py-2 px-4 rounded-lg font-medium transition-all duration-300 ${
                          darkMode
                            ? 'bg-dark-600 text-gray-300 hover:bg-dark-500 hover:text-white'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FaGithub size={16} />
                        <span>Code</span>
                      </motion.a>
                    )}
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 rounded-lg font-medium transition-all duration-300 btn-primary"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FaExternalLinkAlt size={16} />
                        <span>Live Demo</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
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
              Interested in Working Together?
            </h3>
            <p className={`text-lg leading-relaxed max-w-2xl mx-auto mb-6 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              I'm always excited to work on new projects and collaborate with like-minded individuals. 
              Let's discuss how we can bring your ideas to life!
            </p>
            <motion.a
              href="#contact"
              className="btn-primary inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;


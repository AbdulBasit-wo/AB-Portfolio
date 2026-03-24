import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  HiExternalLink, HiCode, HiStar, HiCalendar, 
  HiUsers, HiHeart, HiChip, HiGlobeAlt,
  HiArrowRight, HiFilter, HiX, HiEye,
  HiChartBar, HiClock, HiCheck, HiSparkles,
  HiCog, HiDatabase, HiCloud
} from 'react-icons/hi';
import { FaGithub, FaReact, FaNodeJs, FaPython, FaAward, FaRocket, FaBrain, FaRobot } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiExpress, SiDjango, SiTensorflow, SiPostgresql, SiOpenai } from 'react-icons/si';
import profilePic from '../assets/pic.png';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');

  // Mouse move effect for 3D cards
  const handleCardMouseMove = (e, cardId) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y, cardId });
  };

  const handleCardMouseLeave = () => {
    setMousePosition({ x: 0, y: 0, cardId: null });
  };

  // AI Generated Images (using placeholders with AI theme)
  const aiImages = {
    selfinder: 'https://images.unsplash.com/photo-1543253687-c931c8e01820?w=600&auto=format',
    pantheon: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format',
    siemens: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&auto=format',
    aetna: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format',
    aigen: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&auto=format',
    portfolio: profilePic // Your actual profile picture
  };

  // Projects Data with AI Images
  const projects = [
    {
      id: 1,
      name: 'Selfinder',
      tagline: 'Heart-Centered Living Platform',
      description: 'A transformative platform helping people connect with their inner selves and live authentically. "You can always come back to your heart and live your life from your heart - This is how love wins fear." Developed with ITIAN IDIOTS team, this project focuses on emotional well-being and self-discovery.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Express', 'Socket.io'],
      category: 'Full Stack',
      liveUrl: 'https://selfinder.online/',
      githubUrl: 'https://github.com/Basit-buriro/selfinder',
      featured: true,
      year: '2024',
      icon: HiHeart,
      color: '#ff6b6b',
      gradient: 'from-red-500/20 to-pink-500/20',
      image: aiImages.selfinder,
      stats: { users: '1,200+', rating: '4.9', impact: 'Emotional Wellness', sessions: '5,000+' },
      achievements: ['Best Innovation Award', 'Featured in TechCrunch'],
      aiGenerated: true
    },
    {
      id: 2,
      name: 'Pantheon',
      tagline: 'Scalable Web Platform',
      description: 'A powerful, enterprise-grade web platform built for scalability and performance. Features include real-time analytics, user management, and API integration. Currently under active development with focus on microservices architecture.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'Redis', 'Docker'],
      category: 'Full Stack',
      liveUrl: 'https://pantheon.io/',
      githubUrl: '#',
      featured: false,
      year: '2024',
      icon: HiGlobeAlt,
      color: '#7cff67',
      gradient: 'from-green-500/20 to-emerald-500/20',
      image: aiImages.pantheon,
      stats: { status: 'In Development', scale: 'High Performance', apis: '15+', response: '<100ms' },
      aiGenerated: true
    },
    {
      id: 3,
      name: 'Siemens Digital',
      tagline: 'Industrial AI Solutions',
      description: 'Industrial digital transformation platform focusing on automation, predictive maintenance, and smart manufacturing solutions. Integrates machine learning models for real-time equipment monitoring and optimization.',
      technologies: ['React', 'Python', 'Django', 'PostgreSQL', 'TensorFlow', 'Kafka', 'AWS'],
      category: 'AI/ML',
      liveUrl: 'https://www.siemens.com/en-us/',
      githubUrl: '#',
      featured: false,
      year: '2024',
      icon: HiChip,
      color: '#5227FF',
      gradient: 'from-purple-500/20 to-indigo-500/20',
      image: aiImages.siemens,
      stats: { impact: 'Enterprise Level', accuracy: '94%', uptime: '99.9%', predictions: '10K/day' },
      aiGenerated: true
    },
    {
      id: 4,
      name: 'Aetna Healthcare',
      tagline: 'Healthcare Management System',
      description: 'Comprehensive healthcare platform providing insurance solutions, patient care coordination, and wellness programs. Features include policy management, claim processing, and telemedicine integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Express', 'WebRTC', 'Blockchain'],
      category: 'Web App',
      liveUrl: 'https://www.aetna.com/',
      githubUrl: '#',
      featured: false,
      year: '2024',
      icon: HiUsers,
      color: '#FFD700',
      gradient: 'from-yellow-500/20 to-amber-500/20',
      image: aiImages.aetna,
      stats: { coverage: 'Healthcare', patients: '50K+', claims: '10K+/month', satisfaction: '94%' },
      aiGenerated: true
    },
    {
      id: 5,
      name: 'AI Content Generator',
      tagline: 'Intelligent Content Creation',
      description: 'An AI-powered content generation platform that creates engaging blog posts, social media content, and marketing copy using advanced language models like GPT-4 and Claude.',
      technologies: ['React', 'Python', 'OpenAI API', 'FastAPI', 'Redis', 'PostgreSQL', 'LangChain'],
      category: 'AI/ML',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      year: '2024',
      icon: FaRobot,
      color: '#7cff67',
      gradient: 'from-cyan-500/20 to-teal-500/20',
      image: aiImages.aigen,
      stats: { words: '1M+', users: '500+', templates: '25+', languages: '10+' },
      aiGenerated: true
    },
    {
      id: 6,
      name: 'Abdul Basit Portfolio',
      tagline: 'Interactive Portfolio Experience',
      description: 'A fully animated, responsive portfolio with robotic theme, 3D effects, and interactive components. Features include dynamic project showcase, contact system, and real-time analytics. Built with modern web technologies for optimal performance.',
      technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Express'],
      category: 'Web App',
      liveUrl: '#',
      githubUrl: 'https://github.com/Basit-buriro/portfolio',
      featured: true,
      year: '2024',
      icon: HiCode,
      color: '#61DAFB',
      gradient: 'from-blue-500/20 to-cyan-500/20',
      image: aiImages.portfolio, // Your profile picture
      stats: { views: '10K+', interactions: '50K+', components: '30+', animations: '100+' },
      achievements: ['Featured Project', 'Interactive Design'],
      isProfile: true
    }
  ];

  const categories = ['All', 'Full Stack', 'AI/ML', 'Web App'];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === 'All' || project.category === filter;
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.5, 
        type: "spring", 
        stiffness: 100,
        damping: 15
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.3 }
    }
  };

  const getCardStyle = (cardId) => {
    if (mousePosition.cardId === cardId) {
      const rotateX = mousePosition.y * 15;
      const rotateY = mousePosition.x * -15;
      return {
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.1s ease-out'
      };
    }
    return {};
  };

  return (
    <section className="min-h-screen py-20 md:py-32 bg-gradient-to-b from-black via-purple-950/10 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Floating Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block mb-4"
          >
            <div className="px-5 py-2 rounded-full bg-gradient-to-r from-[#7cff67]/20 to-[#5227FF]/20 border border-[#7cff67]/30 backdrop-blur-sm">
              <span className="text-[#7cff67] font-mono text-xs sm:text-sm flex items-center gap-2">
                <HiCode className="animate-pulse" />
                projects.archive()
                <div className="w-2 h-2 rounded-full bg-[#7cff67] animate-ping" />
              </span>
            </div>
          </motion.div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#7cff67] via-[#7cff67] to-[#5227FF] bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4">
            A showcase of my creative work and technical expertise
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8 md:mb-12"
        >
          {/* Search Bar */}
          <div className="relative w-full sm:w-64 md:w-80">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 pl-10 rounded-lg bg-black/40 backdrop-blur-sm border border-[#7cff67]/30 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-[#7cff67] transition-all"
            />
            <HiCode className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#7cff67] text-sm" />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#7cff67]"
              >
                <HiX className="text-sm" />
              </button>
            )}
          </div>

          {/* View Mode Toggle */}
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-[#7cff67]/20 text-[#7cff67] border border-[#7cff67]' : 'text-gray-400 hover:text-[#7cff67]'}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Filter Buttons - Scrollable on Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="overflow-x-auto pb-2 mb-8 md:mb-12 scrollbar-hide"
        >
          <div className="flex justify-center gap-2 min-w-max">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(cat)}
                className={`px-4 sm:px-5 py-2 rounded-full font-mono text-xs sm:text-sm transition-all duration-300 whitespace-nowrap ${
                  filter === cat
                    ? 'bg-gradient-to-r from-[#7cff67] to-[#5227FF] text-black shadow-lg shadow-[#7cff67]/30'
                    : 'bg-[#7cff67]/10 border border-[#7cff67]/30 text-[#7cff67] hover:bg-[#7cff67]/20'
                }`}
              >
                {cat === 'All' && <HiFilter className="inline mr-1 text-xs" />}
                {cat}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-6"
        >
          <p className="text-gray-500 text-sm font-mono">
            Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                layout
                whileHover={{ y: -8 }}
                onMouseMove={(e) => handleCardMouseMove(e, project.id)}
                onMouseLeave={handleCardMouseLeave}
                style={getCardStyle(project.id)}
                className="relative group"
              >
                <div className={`relative bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden border border-[#7cff67]/20 hover:border-[#7cff67]/50 transition-all duration-500 h-full`}>
                  {/* Animated Gradient Border on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#7cff67]/20 to-[#5227FF]/20 rounded-xl blur-xl" />
                  </div>
                  
                  {/* Featured Badge with Animation */}
                  {project.featured && (
                    <motion.div
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      className="absolute top-4 right-4 z-20"
                    >
                      <div className="px-2 sm:px-3 py-1 rounded-full bg-gradient-to-r from-[#7cff67] to-[#5227FF] text-black text-[10px] sm:text-xs font-bold flex items-center gap-1 shadow-lg">
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          <HiStar className="text-xs" />
                        </motion.div>
                        Featured
                      </div>
                    </motion.div>
                  )}
                  
                  {/* AI Generated Badge */}
                  {project.aiGenerated && !project.isProfile && (
                    <div className="absolute top-4 left-4 z-20">
                      <div className="px-2 py-1 rounded-full bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 text-purple-400 text-[10px] sm:text-xs font-medium flex items-center gap-1">
                        <FaBrain className="text-[10px]" />
                        AI Generated
                      </div>
                    </div>
                  )}
                  
                  {/* Profile Badge for Portfolio */}
                  {project.isProfile && (
                    <div className="absolute top-4 left-4 z-20">
                      <div className="px-2 py-1 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 text-blue-400 text-[10px] sm:text-xs font-medium flex items-center gap-1">
                        <img src={profilePic} alt="Profile" className="w-4 h-4 rounded-full object-cover" />
                        My Portfolio
                      </div>
                    </div>
                  )}
                  
                  {/* Project Image with Zoom Effect */}
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    {project.isProfile ? (
                      <div className="w-full h-full bg-gradient-to-br from-[#7cff67]/20 to-[#5227FF]/20 flex items-center justify-center">
                        <img
                          src={project.image}
                          alt={project.name}
                          className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-[#7cff67] shadow-2xl"
                        />
                      </div>
                    ) : (
                      <motion.img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute bottom-3 left-3">
                      <div className={`px-2 py-1 rounded-lg bg-black/60 backdrop-blur-sm border border-[#7cff67]/30 text-[10px] sm:text-xs text-[#7cff67]`}>
                        {project.category}
                      </div>
                    </div>
                    
                    {/* Icon Overlay */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="absolute top-3 left-3"
                    >
                      <div className={`p-1.5 sm:p-2 rounded-lg bg-black/60 backdrop-blur-sm border border-[#7cff67]/30`}>
                        <project.icon className="text-base sm:text-xl" style={{ color: project.color }} />
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-4 sm:p-6">
                    {/* Title and Year */}
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-white group-hover:text-[#7cff67] transition line-clamp-1">
                        {project.name}
                      </h3>
                      <span className="text-[10px] sm:text-xs text-gray-500 font-mono flex items-center gap-1 whitespace-nowrap">
                        <HiCalendar className="text-[8px] sm:text-[10px]" />
                        {project.year}
                      </span>
                    </div>
                    
                    {/* Tagline */}
                    <p className="text-[#7cff67]/70 text-xs sm:text-sm mb-2 line-clamp-1">
                      {project.tagline}
                    </p>
                    
                    {/* Description */}
                    <p className="text-gray-400 text-xs sm:text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.slice(0, 4).map((tech, i) => (
                        <span
                          key={i}
                          className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-[9px] sm:text-xs rounded-full bg-[#7cff67]/10 text-[#7cff67] border border-[#7cff67]/20"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-[9px] sm:text-xs rounded-full bg-[#7cff67]/10 text-[#7cff67]">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-2 mb-4 text-[10px] sm:text-xs text-gray-500">
                      {Object.entries(project.stats).slice(0, 4).map(([key, value], i) => (
                        <div key={i} className="flex items-center gap-1">
                          {key === 'users' && <HiUsers className="text-[#7cff67] text-[10px]" />}
                          {key === 'rating' && <HiStar className="text-yellow-500 text-[10px]" />}
                          {key === 'accuracy' && <HiChartBar className="text-[#7cff67] text-[10px]" />}
                          {key === 'response' && <HiClock className="text-[#7cff67] text-[10px]" />}
                          {!['users', 'rating', 'accuracy', 'response'].includes(key) && 
                           <HiCheck className="text-[#7cff67] text-[10px]" />}
                          <span className="truncate">{typeof value === 'string' ? value : `${value}`}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Links */}
                    <div className="flex gap-2 pt-2 border-t border-[#7cff67]/10">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-gradient-to-r from-[#7cff67] to-[#5227FF] text-black text-[10px] sm:text-xs font-semibold flex items-center justify-center gap-1 hover:shadow-lg hover:shadow-[#7cff67]/30 transition-all duration-300"
                      >
                        <HiExternalLink className="text-[10px] sm:text-xs" />
                        Live
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg border border-[#7cff67]/30 text-[#7cff67] text-[10px] sm:text-xs font-semibold flex items-center justify-center gap-1 hover:bg-[#7cff67]/10 hover:border-[#7cff67] transition-all duration-300"
                      >
                        <FaGithub className="text-[10px] sm:text-xs" />
                        Code
                      </motion.a>
                    </div>
                  </div>
                  
                  {/* Corner Effects */}
                  <div className="absolute top-2 sm:top-3 left-2 sm:left-3 w-3 sm:w-4 h-3 sm:h-4 border-t-2 border-l-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-2 sm:top-3 right-2 sm:right-3 w-3 sm:w-4 h-3 sm:h-4 border-t-2 border-r-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 w-3 sm:w-4 h-3 sm:h-4 border-b-2 border-l-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 w-3 sm:w-4 h-3 sm:h-4 border-b-2 border-r-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl text-white mb-2">No projects found</h3>
            <p className="text-gray-400">Try adjusting your search or filter</p>
            <button
              onClick={() => { setFilter('All'); setSearchTerm(''); }}
              className="mt-4 px-4 py-2 bg-[#7cff67]/20 text-[#7cff67] rounded-lg hover:bg-[#7cff67]/30 transition"
            >
              Clear filters
            </button>
          </motion.div>
        )}

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Basit-buriro"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 border-2 border-[#7cff67] text-[#7cff67] rounded-full font-semibold hover:bg-[#7cff67]/10 hover:shadow-lg hover:shadow-[#7cff67]/30 transition-all duration-300 group"
          >
            <FaGithub />
            View More on GitHub
            <HiArrowRight className="group-hover:translate-x-1 transition" />
          </motion.a>
        </motion.div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 640px) {
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
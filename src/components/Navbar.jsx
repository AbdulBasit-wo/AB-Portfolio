import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HiMenu, HiX, HiHome, HiBriefcase, HiUser, HiMail, 
  HiChip, HiBookOpen, HiDocumentText, HiStar, HiCode,
  HiSun, HiMoon, HiPhone, HiMail as HiMailIcon,
  HiTerminal, HiSparkles, HiGlobeAlt
} from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaYoutube, FaWhatsapp, FaRobot } from 'react-icons/fa';
import profilePic from '../assets/pic.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showSocialDropdown, setShowSocialDropdown] = useState(false);
  const [showContactDropdown, setShowContactDropdown] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const location = useLocation();

  // Navigation Links
  const navLinks = [
    { name: 'Home', path: '/', icon: HiHome, color: '#7cff67' },
    { name: 'Projects', path: '/projects', icon: HiBriefcase, color: '#5227FF' },
    { name: 'About', path: '/about', icon: HiUser, color: '#61DAFB' },
    { name: 'Skills', path: '/skills', icon: HiCode, color: '#7cff67' },
    { name: 'Services', path: '/services', icon: HiChip, color: '#5227FF' },
    { name: 'Blog', path: '/blog', icon: HiBookOpen, color: '#FFD700' },
    { name: 'Resume', path: '/resume', icon: HiDocumentText, color: '#7cff67' },
    { name: 'Testimonials', path: '/testimonials', icon: HiStar, color: '#FFD700' },
    { name: 'Contact', path: '/contact', icon: HiMail, color: '#5227FF' }
  ];

  // Social Media Links
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/Basit-buriro', icon: FaGithub, color: '#ffffff' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/abdul-basit-73449b37a/', icon: FaLinkedin, color: '#0077b5' },
    { name: 'Instagram', url: 'https://instagram.com/rehman1572006', icon: FaInstagram, color: '#e4405f' },
    { name: 'Facebook', url: 'https://facebook.com/abdulbasitburiro', icon: FaFacebook, color: '#1877f2' },
    { name: 'YouTube', url: 'https://youtube.com/@BasitBuriro', icon: FaYoutube, color: '#ff0000' },
    { name: 'WhatsApp', url: 'https://wa.me/923282570585', icon: FaWhatsapp, color: '#25d366' }
  ];

  // Contact Info
  const contactInfo = [
    { type: 'EMAIL', value: 'burirobasit691@gmail.com', icon: HiMailIcon, link: 'mailto:burirobasit691@gmail.com' },
    { type: 'PHONE', value: '+92 314 7135787', icon: HiPhone, link: 'tel:+923147135787' },
    { type: 'WHATSAPP', value: '+92 328 2570585', icon: FaWhatsapp, link: 'https://wa.me/923282570585' }
  ];

  // Apply dark mode to body
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#000000';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#ffffff';
    }
  }, [isDarkMode]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on route change
  useEffect(() => {
    setIsOpen(false);
    setShowSocialDropdown(false);
    setShowContactDropdown(false);
  }, [location]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setShowSocialDropdown(false);
        setShowContactDropdown(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const getAccentColor = () => isDarkMode ? '#7cff67' : '#5227FF';

  // Animation variants
  const linkVariants = {
    hover: {
      y: -3,
      scale: 1.05,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.3,
      rotate: 360,
      transition: { duration: 0.5, type: "spring", stiffness: 300 }
    }
  };

  const logoVariants = {
    hover: {
      scale: 1.05,
      rotate: 5,
      transition: { type: "spring", stiffness: 400 }
    }
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -15, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.25, type: "spring", stiffness: 400, damping: 25 }
    },
    exit: { 
      opacity: 0, 
      y: -10, 
      scale: 0.95,
      transition: { duration: 0.2 }
    }
  };

  const mobileItemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.03, type: "spring", stiffness: 200 }
    })
  };

  return (
    <>
      {/* Navbar Container */}
      <div className="fixed top-0 left-0 right-0 z-[100]">
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className={`transition-all duration-500 ${
            scrolled 
              ? `${isDarkMode ? 'bg-black/95' : 'bg-white/95'} backdrop-blur-xl shadow-2xl ${isDarkMode ? 'border-b border-[#7cff67]/30' : 'border-b border-[#5227FF]/30'}`
              : `${isDarkMode ? 'bg-black/80' : 'bg-white/80'} backdrop-blur-md`
          }`}
        >
          {/* Animated Gradient Line - Top */}
          <motion.div
            className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-${isDarkMode ? '[#7cff67]' : '[#5227FF]'} to-transparent`}
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16 sm:h-20">
              {/* Logo Section with Profile Picture */}
              <motion.div
                variants={logoVariants}
                whileHover="hover"
              >
                <Link to="/" className="flex items-center gap-3 group">
                  <div className="relative">
                    {/* Pulsing Glow Ring */}
                    <motion.div
                      className={`absolute inset-0 rounded-full ${isDarkMode ? 'bg-[#7cff67]' : 'bg-[#5227FF]'} blur-md`}
                      animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    {/* Rotating Ring */}
                    <motion.div
                      className="absolute inset-[-4px] rounded-full border-2 border-[#7cff67]/50"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    />
                    <div className="relative">
                      <img
                        src={profilePic}
                        alt="AB"
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-[#7cff67] shadow-lg"
                      />
                      {/* Robotic Eye Effect */}
                      <motion.div
                        className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-[#7cff67] rounded-full"
                        animate={{ scale: [1, 1.8, 1], opacity: [0, 1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        style={{ transform: 'translate(-50%, -50%)' }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-baseline gap-1">
                      <span className={`text-lg sm:text-xl md:text-2xl font-bold ${isDarkMode ? 'text-[#7cff67]' : 'text-[#5227FF]'} font-mono`}>
                        AB
                      </span>
                      <span className="text-[8px] sm:text-[10px] text-gray-500">_v2.0</span>
                    </div>
                    <p className={`text-[8px] sm:text-[10px] ${isDarkMode ? 'text-[#7cff67]/60' : 'text-[#5227FF]/60'} hidden sm:block font-mono`}>
                      &gt; system.ready()
                    </p>
                  </div>
                </Link>
              </motion.div>

              {/* Desktop Navigation - All Links */}
              <div className="hidden md:flex items-center gap-1 lg:gap-2">
                {navLinks.map((link, idx) => {
                  const Icon = link.icon;
                  const isActive = location.pathname === link.path;
                  return (
                    <motion.div
                      key={link.path}
                      variants={linkVariants}
                      whileHover="hover"
                      whileTap="tap"
                      onHoverStart={() => setHoveredLink(idx)}
                      onHoverEnd={() => setHoveredLink(null)}
                      className="relative"
                    >
                      <Link
                        to={link.path}
                        className={`relative px-2 lg:px-3 py-2 rounded-xl transition-all duration-300 flex items-center gap-1 lg:gap-2 text-xs lg:text-sm font-mono ${
                          isActive
                            ? isDarkMode
                              ? 'text-[#7cff67] bg-[#7cff67]/20 shadow-lg shadow-[#7cff67]/20'
                              : 'text-[#5227FF] bg-[#5227FF]/20 shadow-lg shadow-[#5227FF]/20'
                            : isDarkMode
                              ? 'text-gray-300 hover:text-[#7cff67] hover:bg-[#7cff67]/10'
                              : 'text-gray-600 hover:text-[#5227FF] hover:bg-[#5227FF]/10'
                        }`}
                      >
                        <motion.div
                          variants={iconVariants}
                          whileHover="hover"
                          onHoverStart={() => setHoveredIcon(idx)}
                          onHoverEnd={() => setHoveredIcon(null)}
                        >
                          <Icon className="text-sm lg:text-base" style={{ color: isActive ? (isDarkMode ? '#7cff67' : '#5227FF') : (hoveredIcon === idx ? (isDarkMode ? '#7cff67' : '#5227FF') : 'currentColor') }} />
                        </motion.div>
                        <span className="hidden lg:inline">{link.name}</span>
                        <span className="lg:hidden text-[10px] font-bold">{link.name.substring(0, 2)}</span>
                      </Link>
                      
                      {/* Active Indicator with Glow */}
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className={`absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-${isDarkMode ? '[#7cff67]' : '[#5227FF]'} to-${isDarkMode ? '[#5227FF]' : '[#7cff67]'} rounded-full`}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                      
                      {/* Digital Data Stream on Hover */}
                      {hoveredLink === idx && !isActive && (
                        <motion.div
                          className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-0.5 h-1 bg-[#7cff67] rounded-full"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 8, opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Right Side Icons */}
              <div className="flex items-center gap-1 sm:gap-2">
                {/* System Status with Pulse */}
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="hidden sm:flex items-center gap-1 px-2 py-1 rounded-lg bg-[#7cff67]/10 border border-[#7cff67]/30"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#7cff67] animate-pulse" />
                  <span className={`text-[8px] sm:text-[10px] font-mono ${isDarkMode ? 'text-[#7cff67]' : 'text-[#5227FF]'}`}>
                    SYSTEM ONLINE
                  </span>
                </motion.div>

                {/* Social Dropdown */}
                <div className="relative dropdown-container">
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowSocialDropdown(!showSocialDropdown);
                      setShowContactDropdown(false);
                    }}
                    className={`p-2 rounded-xl transition-all ${
                      isDarkMode ? 'bg-[#7cff67]/10 hover:bg-[#7cff67]/20' : 'bg-[#5227FF]/10 hover:bg-[#5227FF]/20'
                    } border border-[${isDarkMode ? '#7cff67' : '#5227FF'}]/30`}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <FaRobot className={`text-base sm:text-lg ${isDarkMode ? 'text-[#7cff67]' : 'text-[#5227FF]'}`} />
                    </motion.div>
                  </motion.button>
                  
                  <AnimatePresence>
                    {showSocialDropdown && (
                      <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className={`absolute right-0 mt-2 w-56 sm:w-64 ${
                          isDarkMode ? 'bg-black/95 border-[#7cff67]/30' : 'bg-white/95 border-[#5227FF]/30'
                        } backdrop-blur-xl border rounded-2xl shadow-2xl py-2 z-[200] overflow-hidden`}
                      >
                        {/* Glowing Top Border */}
                        <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-${isDarkMode ? '[#7cff67]' : '[#5227FF]'} to-transparent`} />
                        
                        <div className={`px-3 py-2 border-b ${isDarkMode ? 'border-[#7cff67]/20' : 'border-[#5227FF]/20'}`}>
                          <p className={`text-[10px] sm:text-xs font-mono ${isDarkMode ? 'text-[#7cff67]' : 'text-[#5227FF]'} flex items-center gap-2`}>
                            <HiGlobeAlt className="text-sm" />
                            &gt; NETWORK.SCAN()
                          </p>
                        </div>
                        {socialLinks.map((social, idx) => (
                          <motion.a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: idx * 0.03 }}
                            whileHover={{ x: 8, backgroundColor: isDarkMode ? 'rgba(124,255,103,0.1)' : 'rgba(82,39,255,0.1)' }}
                            className="flex items-center gap-3 px-3 py-2 transition-all group"
                          >
                            <motion.div
                              whileHover={{ scale: 1.2, rotate: 360 }}
                              transition={{ duration: 0.3 }}
                            >
                              <social.icon className="text-base sm:text-lg" style={{ color: social.color }} />
                            </motion.div>
                            <span className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} group-hover:text-[#7cff67]`}>
                              {social.name}
                            </span>
                          </motion.a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Contact Dropdown */}
                <div className="relative dropdown-container">
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowContactDropdown(!showContactDropdown);
                      setShowSocialDropdown(false);
                    }}
                    className={`p-2 rounded-xl transition-all ${
                      isDarkMode ? 'bg-[#7cff67]/10 hover:bg-[#7cff67]/20' : 'bg-[#5227FF]/10 hover:bg-[#5227FF]/20'
                    } border border-[${isDarkMode ? '#7cff67' : '#5227FF'}]/30`}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <HiTerminal className={`text-base sm:text-lg ${isDarkMode ? 'text-[#7cff67]' : 'text-[#5227FF]'}`} />
                    </motion.div>
                  </motion.button>
                  
                  <AnimatePresence>
                    {showContactDropdown && (
                      <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className={`absolute right-0 mt-2 w-64 sm:w-80 ${
                          isDarkMode ? 'bg-black/95 border-[#7cff67]/30' : 'bg-white/95 border-[#5227FF]/30'
                        } backdrop-blur-xl border rounded-2xl shadow-2xl py-2 z-[200] overflow-hidden`}
                      >
                        <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-${isDarkMode ? '[#7cff67]' : '[#5227FF]'} to-transparent`} />
                        
                        <div className={`px-3 py-2 border-b ${isDarkMode ? 'border-[#7cff67]/20' : 'border-[#5227FF]/20'}`}>
                          <p className={`text-[10px] sm:text-xs font-mono ${isDarkMode ? 'text-[#7cff67]' : 'text-[#5227FF]'} flex items-center gap-2`}>
                            <HiSparkles className="text-sm" />
                            &gt; CONTACT.INIT()
                          </p>
                        </div>
                        {contactInfo.map((info, idx) => (
                          <motion.a
                            key={info.type}
                            href={info.link}
                            target={info.type === 'WHATSAPP' ? '_blank' : '_self'}
                            rel="noopener noreferrer"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            whileHover={{ x: 8 }}
                            className="flex items-center gap-3 px-3 py-2 hover:bg-[#7cff67]/10 transition-all group"
                          >
                            <motion.div
                              whileHover={{ scale: 1.2, rotate: 360 }}
                              transition={{ duration: 0.3 }}
                            >
                              <info.icon className={`text-base sm:text-lg ${isDarkMode ? 'text-[#7cff67]' : 'text-[#5227FF]'}`} />
                            </motion.div>
                            <div>
                              <p className={`text-[10px] sm:text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                {info.type}
                              </p>
                              <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} group-hover:text-[#7cff67]`}>
                                {info.value}
                              </p>
                            </div>
                          </motion.a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Dark/Light Mode Toggle */}
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleDarkMode}
                  className={`p-2 rounded-xl transition-all ${
                    isDarkMode ? 'bg-[#7cff67]/10 hover:bg-[#7cff67]/20' : 'bg-[#5227FF]/10 hover:bg-[#5227FF]/20'
                  } border border-[${isDarkMode ? '#7cff67' : '#5227FF'}]/30`}
                >
                  <AnimatePresence mode="wait">
                    {isDarkMode ? (
                      <motion.div
                        key="sun"
                        initial={{ rotate: -180, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 180, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <HiSun className={`text-base sm:text-lg ${isDarkMode ? 'text-[#7cff67]' : 'text-[#5227FF]'}`} />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="moon"
                        initial={{ rotate: 180, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -180, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <HiMoon className={`text-base sm:text-lg ${isDarkMode ? 'text-[#7cff67]' : 'text-[#5227FF]'}`} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>

                {/* Mobile Menu Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`md:hidden p-2 rounded-xl ${
                    isDarkMode ? 'bg-[#7cff67]/10 hover:bg-[#7cff67]/20' : 'bg-[#5227FF]/10 hover:bg-[#5227FF]/20'
                  } border border-[${isDarkMode ? '#7cff67' : '#5227FF'}]/30`}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? (
                    <HiX className={`text-base sm:text-lg ${isDarkMode ? 'text-[#7cff67]' : 'text-[#5227FF]'}`} />
                  ) : (
                    <HiMenu className={`text-base sm:text-lg ${isDarkMode ? 'text-[#7cff67]' : 'text-[#5227FF]'}`} />
                  )}
                </motion.button>
              </div>
            </div>

            {/* Mobile Menu with Premium Animations */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, type: "spring", stiffness: 300, damping: 30 }}
                  className="md:hidden overflow-hidden"
                >
                  <div className={`py-4 space-y-1 border-t ${isDarkMode ? 'border-[#7cff67]/20' : 'border-[#5227FF]/20'}`}>
                    {navLinks.map((link, index) => {
                      const Icon = link.icon;
                      const isActive = location.pathname === link.path;
                      return (
                        <motion.div
                          key={link.path}
                          custom={index}
                          variants={mobileItemVariants}
                          initial="hidden"
                          animate="visible"
                          whileHover={{ x: 8 }}
                        >
                          <Link
                            to={link.path}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm ${
                              isActive
                                ? isDarkMode
                                  ? 'bg-gradient-to-r from-[#7cff67]/30 to-[#5227FF]/30 text-[#7cff67] border-l-4 border-[#7cff67]'
                                  : 'bg-gradient-to-r from-[#5227FF]/30 to-[#7cff67]/30 text-[#5227FF] border-l-4 border-[#5227FF]'
                                : isDarkMode
                                  ? 'text-gray-300 hover:bg-[#7cff67]/10 hover:text-[#7cff67]'
                                  : 'text-gray-600 hover:bg-[#5227FF]/10 hover:text-[#5227FF]'
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            <motion.div
                              whileHover={{ scale: 1.2, rotate: 360 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Icon className="text-lg" style={{ color: isActive ? (isDarkMode ? '#7cff67' : '#5227FF') : 'currentColor' }} />
                            </motion.div>
                            <span className="font-medium">{link.name}</span>
                            {isActive && (
                              <motion.div
                                className="ml-auto w-2 h-2 rounded-full bg-[#7cff67]"
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                              />
                            )}
                          </Link>
                        </motion.div>
                      );
                    })}
                    
                    {/* Social Links in Mobile */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className={`pt-4 mt-2 border-t ${isDarkMode ? 'border-[#7cff67]/20' : 'border-[#5227FF]/20'}`}
                    >
                      <p className={`text-[10px] font-mono px-4 mb-2 ${isDarkMode ? 'text-[#7cff67]/60' : 'text-[#5227FF]/60'} flex items-center gap-2`}>
                        <HiGlobeAlt className="text-xs" />
                        &gt; SOCIAL.LINKS()
                      </p>
                      <div className="flex flex-wrap gap-2 px-4">
                        {socialLinks.map((social, idx) => (
                          <motion.a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.4 + idx * 0.05, type: "spring" }}
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            className={`p-2 rounded-xl transition-all ${
                              isDarkMode ? 'bg-[#7cff67]/10 hover:bg-[#7cff67]/20' : 'bg-[#5227FF]/10 hover:bg-[#5227FF]/20'
                            } border border-[${isDarkMode ? '#7cff67' : '#5227FF'}]/30`}
                          >
                            <social.icon className="text-base" style={{ color: social.color }} />
                          </motion.a>
                        ))}
                      </div>
                    </motion.div>
                    
                    {/* Contact Info in Mobile */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className={`pt-4 mt-2 border-t ${isDarkMode ? 'border-[#7cff67]/20' : 'border-[#5227FF]/20'}`}
                    >
                      <p className={`text-[10px] font-mono px-4 mb-2 ${isDarkMode ? 'text-[#7cff67]/60' : 'text-[#5227FF]/60'} flex items-center gap-2`}>
                        <HiSparkles className="text-xs" />
                        &gt; CONTACT.INFO()
                      </p>
                      <div className="space-y-2 px-4 pb-2">
                        {contactInfo.map((info, idx) => (
                          <motion.a
                            key={info.type}
                            href={info.link}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.6 + idx * 0.05 }}
                            whileHover={{ x: 5 }}
                            className={`flex items-center gap-3 text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} hover:text-[#7cff67] transition-colors p-2 rounded-lg hover:bg-[#7cff67]/5`}
                          >
                            <motion.div
                              whileHover={{ scale: 1.2, rotate: 360 }}
                              transition={{ duration: 0.3 }}
                            >
                              <info.icon className={`text-base ${isDarkMode ? 'text-[#7cff67]' : 'text-[#5227FF]'}`} />
                            </motion.div>
                            <span className="break-all">{info.value}</span>
                          </motion.a>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Bottom Digital Glow */}
          <motion.div
            className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-${isDarkMode ? '[#7cff67]' : '[#5227FF]'} to-transparent`}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.nav>
      </div>

      {/* Spacer */}
      <div className="h-16 sm:h-20" />
    </>
  );
};

export default Navbar;
import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  HiDownload, HiMail, HiBriefcase, HiChip, HiCode, 
  HiSparkles, HiArrowRight, HiStar, HiTerminal,
  HiUserGroup, HiAcademicCap, HiLocationMarker,
  HiLightningBolt, HiChartBar
} from 'react-icons/hi';
import { FaReact, FaNodeJs, FaPython, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiTypescript, SiNextdotjs, SiFirebase } from 'react-icons/si';
import profilePic from '../assets/pic.png';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Create small floating bubbles (like language icons)
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    // Create 15-20 small floating bubbles
    const bubbleCount = 18;
    const newBubbles = [];
    for (let i = 0; i < bubbleCount; i++) {
      newBubbles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 20 + 8, // 8-28px small size
        durationX: Math.random() * 20 + 15,
        durationY: Math.random() * 20 + 15,
        delay: Math.random() * 10,
        opacity: Math.random() * 0.4 + 0.2,
        moveX: (Math.random() - 0.5) * 40,
        moveY: (Math.random() - 0.5) * 40,
      });
    }
    setBubbles(newBubbles);
  }, []);

  const roles = [
    'Full Stack Developer',
    'React Specialist',
    'AI Enthusiast',
    'Problem Solver',
    'Tech Innovator'
  ];

  // Typing Animation Effect
  useEffect(() => {
    const currentRole = roles[textIndex];
    
    if (isDeleting) {
      if (charIndex > 0) {
        setTimeout(() => setCharIndex(charIndex - 1), 80);
      } else {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % roles.length);
      }
    } else {
      if (charIndex < currentRole.length) {
        setTimeout(() => setCharIndex(charIndex + 1), 100);
      } else {
        setTimeout(() => setIsDeleting(true), 2000);
      }
    }
    
    setTypedText(currentRole.substring(0, charIndex));
  }, [charIndex, isDeleting, textIndex]);

  // Mouse move effect for 3D tilt
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), { stiffness: 200, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), { stiffness: 200, damping: 30 });

  const floatingIcons = [
    { icon: FaReact, color: '#61DAFB', delay: 0, x: '5%', y: '15%', size: 'text-4xl' },
    { icon: FaNodeJs, color: '#339933', delay: 2, x: '88%', y: '12%', size: 'text-4xl' },
    { icon: SiMongodb, color: '#47A248', delay: 4, x: '12%', y: '78%', size: 'text-4xl' },
    { icon: SiTailwindcss, color: '#06B6D4', delay: 1, x: '92%', y: '82%', size: 'text-4xl' },
    { icon: FaPython, color: '#3776AB', delay: 3, x: '78%', y: '45%', size: 'text-4xl' },
    { icon: SiTypescript, color: '#3178C6', delay: 5, x: '3%', y: '42%', size: 'text-3xl' }
  ];

  const techStack = [
    { name: 'React.js', icon: FaReact, color: '#61DAFB' },
    { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'Python', icon: FaPython, color: '#3776AB' }
  ];

  const stats = [
    { value: '2+', label: 'Years Experience', icon: HiChartBar, color: '#7cff67' },
    { value: '15+', label: 'Projects', icon: HiBriefcase, color: '#5227FF' },
    { value: '3', label: 'Certifications', icon: HiAcademicCap, color: '#FFD700' },
    { value: '100%', label: 'Commitment', icon: HiStar, color: '#7cff67' }
  ];

  // Icon animation variants
  const iconVariants = {
    hover: { 
      scale: 1.2,
      rotate: 360,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/30 to-black" />
        
        {/* Animated Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#7cff67]/20 to-[#5227FF]/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[#5227FF]/20 to-[#ff6b6b]/20 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -70, 0],
            y: [0, 70, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Small Floating Bubbles (Like Language Icons) */}
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full bg-gradient-to-r from-[#7cff67]/40 to-[#5227FF]/40 blur-sm"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
          }}
          animate={{
            x: [0, bubble.moveX, -bubble.moveX / 2, bubble.moveX / 2, 0],
            y: [0, bubble.moveY, -bubble.moveY / 2, bubble.moveY / 2, 0],
            opacity: [bubble.opacity, bubble.opacity + 0.2, bubble.opacity, bubble.opacity + 0.1, bubble.opacity],
            scale: [1, 1.2, 0.9, 1.1, 1],
          }}
          transition={{
            duration: bubble.durationX,
            delay: bubble.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Additional Glowing Particles */}
      {[...Array(60)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-[#7cff67]/40 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [null, -100, -200],
            x: [null, Math.random() * 80 - 40, Math.random() * 160 - 80],
            opacity: [0, 0.5, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 6 + 4,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "easeOut"
          }}
        />
      ))}

      {/* Digital Grid Overlay with Corner Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `repeating-linear-gradient(0deg, #7cff67 1px, transparent 1px)`,
          backgroundSize: '100% 50px',
          animation: 'moveVertical 20s linear infinite',
        }} />
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `repeating-linear-gradient(90deg, #7cff67 1px, transparent 1px)`,
          backgroundSize: '50px 100%',
          animation: 'moveHorizontal 20s linear infinite',
        }} />
      </div>

      {/* Floating Tech Icons with Icon Effects */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute hidden lg:block z-10"
          style={{ left: item.x, top: item.y }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, -20, 0],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: 6,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.div
            variants={iconVariants}
            whileHover="hover"
            className="cursor-pointer"
          >
            <item.icon className={`${item.size} opacity-40 hover:opacity-100 transition-opacity drop-shadow-lg`} style={{ color: item.color }} />
          </motion.div>
        </motion.div>
      ))}

      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          {/* Badge with Corner Effects */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative inline-block mb-6 group"
          >
            <div className="px-5 py-2 rounded-full bg-gradient-to-r from-[#7cff67]/20 to-[#5227FF]/20 border border-[#7cff67]/30 backdrop-blur-sm">
              <span className="text-[#7cff67] font-mono text-sm flex items-center gap-2">
                <HiLightningBolt className="animate-pulse" />
                AVAILABLE FOR WORK
                <div className="w-2 h-2 rounded-full bg-[#7cff67] animate-ping" />
              </span>
            </div>
            {/* Corner Effects */}
            <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>

          {/* Profile Image with 3D Tilt and Corner Effects */}
          <motion.div
            style={{ rotateX, rotateY }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
            className="relative inline-block mb-8 group z-20"
          >
            {/* Corner Effects */}
            <div className="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute -top-2 -right-2 w-5 h-5 border-t-2 border-r-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute -bottom-2 -left-2 w-5 h-5 border-b-2 border-l-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Outer Glow Rings */}
            <motion.div
              className="absolute inset-[-30px] rounded-full bg-gradient-to-r from-[#7cff67] via-[#5227FF] to-[#ff6b6b] opacity-40 blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute inset-[-20px] rounded-full border-2 border-[#7cff67]/50"
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-[-10px] rounded-full border border-[#5227FF]/50"
              animate={{ rotate: -360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Profile Image */}
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#7cff67] to-[#5227FF] blur-md animate-pulse" />
              <img
                src={profilePic}
                alt="Abdul Basit"
                className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover border-4 border-[#7cff67] shadow-2xl relative z-10"
              />
            </div>
            
            {/* Status Indicators with Icon Effects */}
            <motion.div
              variants={iconVariants}
              whileHover="hover"
              className="absolute -bottom-2 -right-2 w-5 h-5 bg-[#7cff67] rounded-full border-2 border-black shadow-lg cursor-pointer"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
            <motion.div
              variants={iconVariants}
              whileHover="hover"
              className="absolute -top-2 -left-2 w-4 h-4 bg-[#5227FF] rounded-full border-2 border-black shadow-lg cursor-pointer"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: 0.5 }}
            />
          </motion.div>

          {/* Name with Glow Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-4"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
              <span className="bg-gradient-to-r from-[#7cff67] via-[#7cff67] to-[#5227FF] bg-clip-text text-transparent inline-block relative">
                Abdul Basit
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#7cff67] to-[#5227FF] blur-2xl opacity-50"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </span>
            </h1>
          </motion.div>

          {/* Typing Animation Title with Corner Effects */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="relative inline-block mb-8 group"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-black/50 backdrop-blur-md border border-[#7cff67]/30 group">
              <HiTerminal className="text-[#7cff67] text-xl group-hover:rotate-12 transition" />
              <span className="text-xl md:text-2xl font-mono text-[#7cff67]">
                &gt; {typedText}
              </span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-[#7cff67] text-2xl"
              >
                |
              </motion.span>
            </div>
            {/* Corner Effects */}
            <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="max-w-4xl mx-auto mb-6"
          >
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              🎓 <span className="text-[#7cff67] font-semibold">3rd Year IT Student</span> at University of Sindh | 
              💻 <span className="text-[#7cff67] font-semibold">Full Stack Developer</span> with 2+ years experience | 
              🤝 Active <span className="text-[#7cff67] font-semibold">ITIAN IDIOTS</span> Team Member
            </p>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            🚀 <span className="text-white font-semibold">Featured Project:</span> {' '}
            <a 
              href="https://selfinder.online/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#7cff67] hover:underline font-semibold inline-flex items-center gap-1 group"
            >
              Selfinder
              <HiArrowRight className="group-hover:translate-x-1 transition" />
            </a>
            {' '}- A heart-centered platform helping people connect with their authentic selves.
          </motion.p>

          {/* Tech Stack with Icon Effects */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mb-10"
          >
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + i * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="group relative"
                >
                  <div className="px-4 py-2 rounded-full bg-gradient-to-r from-[#7cff67]/10 to-[#5227FF]/10 border border-[#7cff67]/30 hover:border-[#7cff67] transition-all duration-300 cursor-pointer">
                    <div className="flex items-center gap-2">
                      <motion.div
                        variants={iconVariants}
                        whileHover="hover"
                      >
                        <tech.icon className="text-sm" style={{ color: tech.color }} />
                      </motion.div>
                      <span className="text-sm text-gray-300 group-hover:text-[#7cff67] transition">{tech.name}</span>
                    </div>
                  </div>
                  {/* Corner Effects on Hover */}
                  <div className="absolute -top-0.5 -left-0.5 w-2 h-2 border-t border-l border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute -top-0.5 -right-0.5 w-2 h-2 border-t border-r border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons with Corner Effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-5 justify-center mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <Link
                to="/contact"
                className="relative px-8 py-4 bg-gradient-to-r from-[#7cff67] to-[#5227FF] text-black font-bold rounded-full flex items-center justify-center gap-2 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <HiMail className="group-hover:scale-110 transition" />
                  Get in Touch
                  <HiArrowRight className="group-hover:translate-x-1 transition" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#5227FF] to-[#7cff67] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
              </Link>
              {/* Corner Effects */}
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <Link
                to="/projects"
                className="px-8 py-4 border-2 border-[#7cff67] text-[#7cff67] font-bold rounded-full flex items-center justify-center gap-2 hover:bg-[#7cff67]/10 transition-all duration-300"
              >
                <HiBriefcase />
                Explore My Work
                <HiStar className="group-hover:rotate-12 transition" />
              </Link>
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <a
                href="#"
                className="px-8 py-4 border-2 border-gray-600 text-gray-400 font-bold rounded-full flex items-center justify-center gap-2 hover:border-[#7cff67] hover:text-[#7cff67] transition-all duration-300"
              >
                <HiDownload />
                Download CV
                <HiSparkles className="group-hover:scale-110 transition" />
              </a>
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-gray-600 opacity-0 group-hover:border-[#7cff67] group-hover:opacity-100 transition-all" />
              <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-gray-600 opacity-0 group-hover:border-[#7cff67] group-hover:opacity-100 transition-all" />
            </motion.div>
          </motion.div>

          {/* Stats Section with Corner Effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                <div className="text-center p-4 rounded-xl bg-black/40 backdrop-blur-sm border border-[#7cff67]/20 hover:border-[#7cff67]/40 transition-all duration-300">
                  <motion.div
                    variants={iconVariants}
                    whileHover="hover"
                    className="inline-block"
                  >
                    <stat.icon className="text-3xl mx-auto mb-2" style={{ color: stat.color }} />
                  </motion.div>
                  <div className="text-2xl md:text-3xl font-bold text-[#7cff67] mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
                {/* Corner Effects */}
                <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-[#7cff67]/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-[#7cff67]/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-[#7cff67]/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-[#7cff67]/50 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </motion.div>

          {/* Social Links with Icon Effects */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-12 flex justify-center gap-4"
          >
            {[
              { icon: FaGithub, url: 'https://github.com/Basit-buriro', color: '#ffffff' },
              { icon: FaLinkedin, url: 'https://www.linkedin.com/in/abdul-basit-73449b37a/', color: '#0077b5' },
              { icon: FaInstagram, url: 'https://instagram.com/rehman1572006', color: '#e4405f' },
              { icon: FaTwitter, url: 'https://twitter.com/', color: '#1DA1F2' }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
                className="p-3 rounded-full bg-[#7cff67]/10 hover:bg-[#7cff67]/20 border border-[#7cff67]/30 hover:border-[#7cff67] transition-all duration-300 group relative"
              >
                <social.icon className="text-xl text-gray-400 group-hover:text-[#7cff67] transition" style={{ color: social.color }} />
                {/* Corner Effects on Hover */}
                <div className="absolute -top-0.5 -left-0.5 w-2 h-2 border-t border-l border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute -top-0.5 -right-0.5 w-2 h-2 border-t border-r border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator with Corner Effects */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 group z-20"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] text-gray-500 font-mono tracking-wider group-hover:text-[#7cff67] transition">EXPLORE MORE</span>
          <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center relative group-hover:border-[#7cff67] transition">
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-[#7cff67] rounded-full mt-1"
            />
            <motion.div
              className="absolute inset-0 rounded-full border border-[#7cff67]/30"
              animate={{ scale: [1, 1.2, 1], opacity: [0, 0.5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </div>
        {/* Corner Effects */}
        <div className="absolute -top-2 -left-2 w-3 h-3 border-t border-l border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute -top-2 -right-2 w-3 h-3 border-t border-r border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
      </motion.div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes moveVertical {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
        }
        @keyframes moveHorizontal {
          0% { transform: translateX(0); }
          100% { transform: translateX(50px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
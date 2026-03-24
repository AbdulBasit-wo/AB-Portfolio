import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import profilePic from './assets/pic.png';
import LetterGlitchBackground from './components/LetterGlitchBackground';
import Skills from './pages/Skills';
import Blog from './pages/Blog';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import Resume from './pages/Resume';
// Professional Loading Screen with Custom Letter Glitch
const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [glitchText, setGlitchText] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);

  const techStack = [
    "REACT.JS",
    "NODE.JS", 
    "MONGODB",
    "TAILWIND",
    "AI INTEGRATION"
  ];

  const statusMessages = [
    { text: "INITIALIZING CORE SYSTEMS", icon: "⚡", progress: 5 },
    { text: "ESTABLISHING SECURE PROTOCOL", icon: "🔒", progress: 20 },
    { text: "AUTHENTICATING IDENTITY", icon: "✓", progress: 35 },
    { text: "LOADING PORTFOLIO DATABASE", icon: "📀", progress: 50 },
    { text: "OPTIMIZING PERFORMANCE", icon: "⚙️", progress: 65 },
    { text: "ACTIVATING NEURAL NETWORK", icon: "🧠", progress: 80 },
    { text: "SYSTEM READY", icon: "🚀", progress: 95 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + 1.5;
      });
    }, 30);

    const glitchInterval = setInterval(() => {
      const chars = "01!@#$%^&*()_+{}[]|;:,.<>?";
      let result = "";
      for (let i = 0; i < 32; i++) {
        result += chars[Math.floor(Math.random() * chars.length)];
      }
      setGlitchText(result);
    }, 80);

    const techInterval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % techStack.length);
    }, 800);

    return () => {
      clearInterval(interval);
      clearInterval(glitchInterval);
      clearInterval(techInterval);
    };
  }, [onComplete]);

  const currentStatus = statusMessages.find(s => progress >= s.progress) || statusMessages[statusMessages.length - 1];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black">
      {/* Custom Letter Glitch Background */}
      <LetterGlitchBackground
        glitchColors={["#5227FF", "#7cff67", "#ff6b6b"]}
        glitchSpeed={50}
        centerVignette={true}
        smooth={true}
      />
      
      {/* Dark Overlay for Better Text Readability */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Main Container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        
        {/* Profile Section */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0, rotateY: 180 }}
          animate={{ scale: 1, opacity: 1, rotateY: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="relative mb-8 md:mb-12"
        >
          {/* Outer Halo Ring */}
          <motion.div
            className="absolute inset-[-15px] rounded-full bg-gradient-to-r from-[#5227FF] via-[#7cff67] to-[#ff6b6b] opacity-50 blur-xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          {/* Rotating Rings */}
          <motion.div
            className="absolute inset-[-8px] rounded-full border-2 border-[#7cff67]/50"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-[-4px] rounded-full border border-[#7cff67]/30"
            animate={{ rotate: -360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Profile Image */}
          <div className="relative w-28 h-28 md:w-36 md:h-36 lg:w-48 lg:h-48 rounded-full overflow-hidden border-3 border-[#7cff67] shadow-2xl">
            <img
              src={profilePic}
              alt="Profile"
              className="w-full h-full object-cover"
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-[#7cff67]/0 via-[#7cff67]/20 to-[#7cff67]/0"
              animate={{ y: ["-100%", "100%"] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            />
          </div>
          
          {/* LED Indicators */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 md:w-2 md:h-2 bg-[#7cff67] rounded-full shadow-[0_0_8px_#7cff67]"
              style={{
                top: '50%',
                left: '50%',
                transform: `rotate(${i * 45}deg) translate(65px, 0)`,
                transformOrigin: '0 0'
              }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mb-6 md:mb-8"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-3 tracking-tight">
            <span className="bg-gradient-to-r from-[#5227FF] via-[#7cff67] to-[#ff6b6b] bg-clip-text text-transparent">
              Abdul-Basit
            </span>
          </h1>
          <div className="h-10 md:h-12">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-[#7cff67]/80 text-lg md:text-xl lg:text-2xl font-mono tracking-wider"
            >
              {techStack[activeIndex]} DEVELOPER
            </motion.div>
          </div>
        </motion.div>

        {/* Status Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="w-full max-w-sm md:max-w-md mb-6 md:mb-8"
        >
          <div className="bg-black/50 backdrop-blur-sm border border-[#7cff67]/30 rounded-2xl p-4 md:p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-3 md:mb-4">
              <div className="flex items-center gap-2">
                <span className="text-xl md:text-2xl">{currentStatus.icon}</span>
                <span className="text-[#7cff67] font-mono text-xs md:text-sm tracking-wider">
                  {currentStatus.text}
                </span>
              </div>
              <motion.div
                key={progress}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="text-[#7cff67] font-mono text-xl md:text-2xl font-bold"
              >
                {Math.floor(progress)}%
              </motion.div>
            </div>
            
            <div className="relative">
              <div className="h-1.5 md:h-2 bg-[#7cff67]/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#5227FF] via-[#7cff67] to-[#ff6b6b]"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.2 }}
                />
              </div>
            </div>
            
            <div className="mt-3 md:mt-4 space-y-1.5 md:space-y-2">
              {statusMessages.map((status, idx) => (
                <motion.div
                  key={idx}
                  initial={false}
                  animate={{
                    opacity: progress >= status.progress ? 1 : 0.3,
                    x: progress >= status.progress ? 0 : -5
                  }}
                  className="flex items-center gap-2 text-xs font-mono"
                >
                  <span className={`text-[#7cff67] ${progress >= status.progress ? 'opacity-100' : 'opacity-50'}`}>
                    {progress >= status.progress ? '✓' : '○'}
                  </span>
                  <span className="text-[#7cff67]/70 text-xs md:text-sm">{status.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Binary Stream */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-[#7cff67]/30 font-mono text-[10px] md:text-xs tracking-wider text-center px-4"
        >
          {glitchText}
        </motion.div>

        {/* Loading Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 md:mt-8 text-[#7cff67]/40 text-[10px] md:text-xs font-mono text-center max-w-md"
        >
          <span className="animate-pulse">▌</span> INITIALIZING SECURE CONNECTION <span className="animate-pulse">▐</span>
        </motion.div>

        {/* Decorative Corners */}
        <div className="absolute top-4 left-4 md:top-8 md:left-8 w-12 h-12 md:w-16 md:h-16">
          <div className="absolute top-0 left-0 w-8 md:w-12 h-0.5 bg-[#7cff67]" />
          <div className="absolute top-0 left-0 w-0.5 h-8 md:h-12 bg-[#7cff67]" />
        </div>
        <div className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 md:w-16 md:h-16">
          <div className="absolute top-0 right-0 w-8 md:w-12 h-0.5 bg-[#7cff67]" />
          <div className="absolute top-0 right-0 w-0.5 h-8 md:h-12 bg-[#7cff67]" />
        </div>
        <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 w-12 h-12 md:w-16 md:h-16">
          <div className="absolute bottom-0 left-0 w-8 md:w-12 h-0.5 bg-[#7cff67]" />
          <div className="absolute bottom-0 left-0 w-0.5 h-8 md:h-12 bg-[#7cff67]" />
        </div>
        <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-12 h-12 md:w-16 md:h-16">
          <div className="absolute bottom-0 right-0 w-8 md:w-12 h-0.5 bg-[#7cff67]" />
          <div className="absolute bottom-0 right-0 w-0.5 h-8 md:h-12 bg-[#7cff67]" />
        </div>
      </div>
    </div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [loading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <LoadingScreen onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>
      
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Router>
            <div className="min-h-screen bg-dark flex flex-col">
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/skills" element={<Skills />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/testimonials" element={<Testimonials />} />
                  <Route path="/resume" element={<Resume />} />
                  
                </Routes>
              </main>
              <Footer />
              <Toaster position="top-right" />
            </div>
          </Router>
        </motion.div>
      )}
    </>
  );
}

export default App;
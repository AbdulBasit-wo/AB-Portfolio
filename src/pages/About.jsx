import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/pic.png';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');
  const [bubbles, setBubbles] = useState([]);

  // Create floating bubbles
  useEffect(() => {
    const bubbleCount = 12;
    const newBubbles = [];
    for (let i = 0; i < bubbleCount; i++) {
      newBubbles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 28 + 18,
        duration: Math.random() * 18 + 12,
        delay: Math.random() * 5,
        opacity: Math.random() * 0.25 + 0.1,
        moveX: (Math.random() - 0.5) * 35,
        moveY: (Math.random() - 0.5) * 35,
      });
    }
    setBubbles(newBubbles);
  }, []);

  const skills = {
    frontend: [
      { name: 'React.js', level: 85, icon: '⚛️', color: '#61DAFB' },
      { name: 'Tailwind CSS', level: 85, icon: '🎨', color: '#06B6D4' },
      { name: 'JavaScript', level: 85, icon: '📜', color: '#F7DF1E' },
      { name: 'TypeScript', level: 75, icon: '📘', color: '#3178C6' }
    ],
    backend: [
      { name: 'Node.js', level: 85, icon: '🚀', color: '#339933' },
      { name: 'Python', level: 80, icon: '🐍', color: '#3776AB' },
      { name: 'Express.js', level: 85, icon: '⚡', color: '#ffffff' }
    ],
    database: [
      { name: 'MongoDB', level: 85, icon: '🍃', color: '#47A248' },
      { name: 'Firebase', level: 80, icon: '🔥', color: '#FFCA28' }
    ],
    tools: [
      { name: 'Git/GitHub', level: 90, icon: '📝', color: '#ffffff' },
      { name: 'VS Code', level: 95, icon: '💻', color: '#007ACC' }
    ]
  };

  const certifications = [
    { name: 'Full Stack Developer', issuer: 'Expert Academy', year: '2024', icon: '🎓', color: '#FFD700' },
    { name: 'Web & Mobile Development', issuer: 'SMIT', year: '2023', icon: '📱', color: '#7cff67' },
    { name: 'AI & Machine Learning', issuer: 'Mehran University', year: '2024', icon: '🤖', color: '#5227FF' },
    { name: 'Python for Data Science', issuer: 'University of Sindh', year: '2024', icon: '🐍', color: '#3776AB' }
  ];

  const achievements = [
    { title: 'Best Project Award', event: 'IT Exhibition 2024', desc: 'For Selfinder project', icon: '🏆', color: '#FFD700' },
    { title: 'Team Lead - ITIAN IDIOTS', event: '5+ Member Team', desc: 'Leading development team', icon: '👥', color: '#7cff67' },
    { title: 'Open Source Contributor', event: 'GitHub Projects', desc: '15+ contributions', icon: '🌟', color: '#ffffff' },
    { title: 'Hackathon Winner', event: 'CodeFest 2024', desc: '1st place in web development', icon: '⚡', color: '#5227FF' }
  ];

  return (
    <div className="relative bg-gradient-to-br from-purple-900 via-black to-blue-900 min-h-screen py-20 overflow-hidden">
      {/* Galaxy Stars */}
      <div className="absolute inset-0">
        {[...Array(150)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
          />
        ))}
      </div>

      {/* Floating Bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            className="absolute"
            style={{
              left: `${bubble.x}%`,
              top: `${bubble.y}%`,
              width: bubble.size,
              height: bubble.size,
            }}
            animate={{
              x: [0, bubble.moveX, -bubble.moveX / 2, bubble.moveX / 2, 0],
              y: [0, bubble.moveY, -bubble.moveY / 2, bubble.moveY / 2, 0],
              opacity: [0, bubble.opacity, bubble.opacity + 0.1, bubble.opacity, 0],
            }}
            transition={{
              duration: bubble.duration,
              delay: bubble.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="relative w-full h-full">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#7cff67] to-[#5227FF] blur-sm opacity-40" />
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#7cff67]">
                <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="relative text-center mb-12 group">
          <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            About <span className="text-[#7cff67]">Me</span>
          </h1>
          <p className="text-gray-300">Passionate Full Stack Developer</p>
        </div>

        {/* Profile Image */}
        <div className="relative flex justify-center mb-8 group">
          <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-[#7cff67] blur-md opacity-50 animate-pulse"></div>
            <img 
              src={profilePic} 
              alt="Abdul Basit" 
              className="w-32 h-32 rounded-full object-cover border-4 border-[#7cff67] relative z-10"
            />
          </div>
        </div>

        {/* Bio */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-gray-300 text-lg mb-4">
            I'm <span className="text-[#7cff67] font-bold">Abdul Basit</span>, a passionate Full Stack Developer 
            and 3rd-year IT student at University of Sindh.
          </p>
          <p className="text-gray-400">
            Currently leading development with ITIAN IDIOTS team on Selfinder project. 
            Based in Hyderabad, Pakistan.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
          {[
            { value: '2+', label: 'Years Experience', icon: '📅', color: '#7cff67' },
            { value: '20+', label: 'Projects', icon: '📁', color: '#5227FF' },
            { value: '4', label: 'Certifications', icon: '📜', color: '#FFD700' },
            { value: '10+', label: 'Technologies', icon: '💻', color: '#7cff67' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group text-center p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-[#7cff67]/30 hover:border-[#7cff67] transition-all"
            >
              <div className="absolute top-1 left-1 w-3 h-3 border-t border-l border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-1 right-1 w-3 h-3 border-t border-r border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-1 left-1 w-3 h-3 border-b border-l border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-1 right-1 w-3 h-3 border-b border-r border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="text-3xl mb-1"
              >
                {stat.icon}
              </motion.div>
              <div className="text-2xl font-bold text-[#7cff67]">{stat.value}</div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-2 justify-center mb-6">
            <button
              onClick={() => setActiveTab('skills')}
              className={`px-6 py-2 rounded-lg transition-all ${
                activeTab === 'skills' 
                  ? 'bg-gradient-to-r from-[#7cff67] to-[#5227FF] text-black font-bold shadow-lg' 
                  : 'bg-white/10 text-gray-300 hover:text-white'
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => setActiveTab('certifications')}
              className={`px-6 py-2 rounded-lg transition-all ${
                activeTab === 'certifications' 
                  ? 'bg-gradient-to-r from-[#7cff67] to-[#5227FF] text-black font-bold shadow-lg' 
                  : 'bg-white/10 text-gray-300 hover:text-white'
              }`}
            >
              Certifications
            </button>
            <button
              onClick={() => setActiveTab('achievements')}
              className={`px-6 py-2 rounded-lg transition-all ${
                activeTab === 'achievements' 
                  ? 'bg-gradient-to-r from-[#7cff67] to-[#5227FF] text-black font-bold shadow-lg' 
                  : 'bg-white/10 text-gray-300 hover:text-white'
              }`}
            >
              Achievements
            </button>
          </div>

          <div className="relative group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-[#7cff67]/30 hover:border-[#7cff67] transition-all">
            <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Skills Section */}
            {activeTab === 'skills' && (
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Technical Skills</h3>
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category} className="mb-4">
                    <h4 className="text-[#7cff67] font-semibold mb-2 capitalize">{category}</h4>
                    <div className="space-y-2">
                      {items.map((skill, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          whileHover={{ scale: 1.02, x: 5 }}
                          className="group-skill"
                        >
                          <div className="flex justify-between mb-1">
                            <div className="flex items-center gap-2">
                              <motion.span
                                whileHover={{ scale: 1.2, rotate: 360 }}
                                transition={{ duration: 0.3 }}
                                className="text-lg"
                              >
                                {skill.icon}
                              </motion.span>
                              <span className="text-sm text-gray-300">{skill.name}</span>
                            </div>
                            <span className="text-xs text-[#7cff67]">{skill.level}%</span>
                          </div>
                          <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: i * 0.1 }}
                              className="h-full bg-gradient-to-r from-[#7cff67] to-[#5227FF] rounded-full relative"
                            >
                              <motion.div
                                className="absolute inset-0 bg-white/30"
                                animate={{ x: ['-100%', '100%'] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                              />
                            </motion.div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Certifications Section */}
            {activeTab === 'certifications' && (
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Certifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {certifications.map((cert, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="relative group-cert p-3 rounded-lg bg-white/5 border border-[#7cff67]/30 hover:border-[#7cff67] transition-all cursor-pointer"
                    >
                      <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="flex items-start gap-3">
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className="text-3xl"
                        >
                          {cert.icon}
                        </motion.div>
                        <div>
                          <h4 className="font-semibold text-white text-sm">{cert.name}</h4>
                          <p className="text-xs text-[#7cff67]">{cert.issuer}</p>
                          <p className="text-xs text-gray-400">{cert.year}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Achievements Section */}
            {activeTab === 'achievements' && (
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Achievements</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {achievements.map((ach, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="relative group-ach text-center p-4 rounded-lg bg-white/5 border border-[#7cff67]/30 hover:border-[#7cff67] transition-all cursor-pointer"
                    >
                      <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl mb-2"
                      >
                        {ach.icon}
                      </motion.div>
                      <h4 className="font-semibold text-white text-sm">{ach.title}</h4>
                      <p className="text-xs text-gray-400">{ach.event}</p>
                      <p className="text-[10px] text-gray-500 mt-1">{ach.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Quote */}
        <div className="relative group text-center mt-12">
          <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <p className="text-gray-300 italic max-w-2xl mx-auto">
            "Building technology that matters, one line of code at a time."
          </p>
        </div>

        {/* Contact Info */}
        <div className="text-center mt-8">
          <div className="flex justify-center gap-6 flex-wrap">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }}>
                <svg className="w-4 h-4 text-[#7cff67]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </motion.div>
              Hyderabad, Pakistan
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }}>
                <svg className="w-4 h-4 text-[#7cff67]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </motion.div>
              burirobasit691@gmail.com
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }}>
                <svg className="w-4 h-4 text-[#7cff67]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </motion.div>
              +92 314 7135787
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mt-8">
          {[
            { icon: '🐙', url: 'https://github.com/Basit-buriro', name: 'GitHub' },
            { icon: '💼', url: 'https://www.linkedin.com/in/abdul-basit-73449b37a/', name: 'LinkedIn' },
            { icon: '📸', url: 'https://instagram.com/rehman1572006', name: 'Instagram' },
            { icon: '🐦', url: 'https://twitter.com/', name: 'Twitter' },
            { icon: '💬', url: 'https://wa.me/923282570585', name: 'WhatsApp' }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
              className="relative group p-3 rounded-full bg-[#7cff67]/10 hover:bg-[#7cff67]/20 border border-[#7cff67]/30 transition-all"
            >
              <span className="text-xl">{social.icon}</span>
              <div className="absolute -top-0.5 -left-0.5 w-2 h-2 border-t border-l border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute -top-0.5 -right-0.5 w-2 h-2 border-t border-r border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-[10px] text-gray-500 opacity-0 group-hover:opacity-100 whitespace-nowrap">
                {social.name}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaReact, FaNodeJs, FaPython, FaGitAlt, 
  FaDatabase, FaServer, FaMobile, FaFigma, FaGithub,
  FaLaptopCode
} from 'react-icons/fa';
import { 
  SiMongodb, SiTailwindcss, SiJavascript, SiTypescript, 
  SiPostgresql, SiExpress, SiFirebase, SiNextdotjs,
  SiRedux, SiDjango
} from 'react-icons/si';
import { 
  HiChip, HiCode, HiStar, HiAcademicCap, 
  HiBriefcase, HiCalendar, HiLocationMarker, 
  HiMail, HiPhone, HiUserGroup, HiTerminal,
  HiSparkles, HiLightningBolt, HiCog
} from 'react-icons/hi';

const Skills = () => {
  const frontendSkills = [
    { name: 'React.js', icon: FaReact, color: '#61DAFB', level: 85, description: 'Hooks, Redux, Next.js' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', level: 85, description: 'Responsive Design' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', level: 85, description: 'ES6+, Async/Await' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', level: 75, description: 'Type Safety' }
  ];

  const backendSkills = [
    { name: 'Node.js', icon: FaNodeJs, color: '#339933', level: 85, description: 'Express, REST APIs' },
    { name: 'Python', icon: FaPython, color: '#3776AB', level: 80, description: 'Flask, Django' },
    { name: 'Express.js', icon: SiExpress, color: '#ffffff', level: 85, description: 'Middleware, Routing' }
  ];

  const databaseSkills = [
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248', level: 85, description: 'Mongoose, Aggregation' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791', level: 75, description: 'SQL, Prisma' },
    { name: 'Firebase', icon: SiFirebase, color: '#FFCA28', level: 80, description: 'Auth, Firestore' }
  ];

  const toolsSkills = [
    { name: 'Git', icon: FaGitAlt, color: '#F05032', level: 90, description: 'Version Control' },
    { name: 'VS Code', icon: HiCode, color: '#007ACC', level: 95, description: 'IDE, Extensions' },
    { name: 'Figma', icon: FaFigma, color: '#F24E1E', level: 75, description: 'UI/UX Design' }
  ];

  const certifications = [
    {
      title: 'Certified Full Stack Developer',
      issuer: 'Expert Academy Hyderabad',
      year: '2024',
      icon: HiAcademicCap,
      color: '#FFD700'
    },
    {
      title: 'Web & Mobile Application Development',
      issuer: 'SMIT',
      year: '2023',
      icon: FaMobile,
      color: '#7cff67'
    },
    {
      title: 'AI Certification',
      issuer: 'Mehran University',
      year: '2024',
      icon: HiChip,
      color: '#5227FF'
    }
  ];

  const experiences = [
    {
      role: 'Full Stack Developer',
      company: 'ITIAN IDIOTS Team',
      period: '2023 - Present',
      description: 'Leading development of Selfinder platform. Managing team of 5 developers.',
      icon: HiBriefcase
    },
    {
      role: 'IT Student',
      company: 'University of Sindh',
      period: '2022 - Present',
      description: '3rd year student, maintaining 3.5+ CGPA.',
      icon: HiAcademicCap
    }
  ];

  const stats = [
    { value: '2+', label: 'Years Experience', icon: HiCalendar, color: '#7cff67' },
    { value: '15+', label: 'Projects', icon: HiBriefcase, color: '#5227FF' },
    { value: '3', label: 'Certifications', icon: HiAcademicCap, color: '#FFD700' },
    { value: '10+', label: 'Technologies', icon: HiCode, color: '#7cff67' }
  ];

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { y: -8, transition: { duration: 0.3 } }
  };

  const iconVariants = {
    hover: { 
      scale: 1.2,
      rotate: 360,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="py-20 bg-gradient-to-b from-black via-purple-950/20 to-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 relative">
            <div className="px-6 py-2 rounded-full bg-gradient-to-r from-[#7cff67]/20 to-[#5227FF]/20 border border-[#7cff67]/30 backdrop-blur-sm">
              <span className="text-[#7cff67] font-mono text-sm flex items-center gap-2">
                <HiTerminal className="animate-pulse" /> 
                technical_skills.load()
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-[#7cff67]"
                >
                  _
                </motion.span>
              </span>
            </div>
            {/* Corner Effects */}
            <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#7cff67]" />
            <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[#7cff67]" />
            <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[#7cff67]" />
            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[#7cff67]" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#7cff67] via-[#7cff67] to-[#5227FF] bg-clip-text text-transparent">
              Technical Arsenal
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Technologies and tools I master to build exceptional digital experiences
          </p>
        </motion.div>

        {/* Stats Section with Corner Effects */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative text-center p-6 rounded-xl bg-black/40 backdrop-blur-sm border border-[#7cff67]/20 hover:border-[#7cff67]/50 transition-all duration-300 group"
            >
              {/* Corner Effects */}
              <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-[#7cff67]/50 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-[#7cff67]/50 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-[#7cff67]/50 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-[#7cff67]/50 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <motion.div
                variants={iconVariants}
                whileHover="hover"
                className="inline-block"
              >
                <stat.icon className="text-3xl mx-auto mb-3" style={{ color: stat.color }} />
              </motion.div>
              <div className="text-2xl md:text-3xl font-bold text-[#7cff67] mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
              
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#7cff67]/0 to-[#5227FF]/0 group-hover:from-[#7cff67]/10 group-hover:to-[#5227FF]/10 transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Skills Grid with Card Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Frontend Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            className="relative bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-[#7cff67]/20 hover:border-[#7cff67]/50 transition-all duration-300 group"
          >
            {/* Corner Effects */}
            <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Header with Icon Effect */}
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                variants={iconVariants}
                whileHover="hover"
                className="p-3 rounded-lg bg-gradient-to-r from-[#7cff67]/20 to-[#5227FF]/20 group-hover:scale-110 transition-transform"
              >
                <FaReact className="text-2xl text-[#61DAFB]" />
              </motion.div>
              <div>
                <h3 className="text-xl font-semibold text-white">Frontend Development</h3>
                <p className="text-xs text-gray-500">Building responsive, interactive UIs</p>
              </div>
            </div>
            
            {/* Skills Progress Bars */}
            <div className="space-y-4">
              {frontendSkills.map((skill, idx) => (
                <div key={idx} className="group/skill">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        <skill.icon className="text-sm" style={{ color: skill.color }} />
                      </motion.div>
                      <span className="text-sm text-gray-300">{skill.name}</span>
                    </div>
                    <span className="text-xs text-[#7cff67] font-mono">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: idx * 0.1 }}
                      className="h-full bg-gradient-to-r from-[#7cff67] to-[#5227FF] rounded-full relative"
                    >
                      <div className="absolute inset-0 bg-white/30 animate-pulse" />
                    </motion.div>
                  </div>
                  <p className="text-[10px] text-gray-500 mt-1">{skill.description}</p>
                </div>
              ))}
            </div>
            
            {/* Digital Scan Line Effect */}
            <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#7cff67]/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </div>
          </motion.div>

          {/* Backend Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            className="relative bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-[#7cff67]/20 hover:border-[#7cff67]/50 transition-all duration-300 group"
          >
            <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="flex items-center gap-3 mb-6">
              <motion.div variants={iconVariants} whileHover="hover" className="p-3 rounded-lg bg-gradient-to-r from-[#7cff67]/20 to-[#5227FF]/20 group-hover:scale-110 transition-transform">
                <FaNodeJs className="text-2xl text-[#339933]" />
              </motion.div>
              <div>
                <h3 className="text-xl font-semibold text-white">Backend Development</h3>
                <p className="text-xs text-gray-500">Scalable server-side solutions</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {backendSkills.map((skill, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }}>
                        <skill.icon className="text-sm" style={{ color: skill.color }} />
                      </motion.div>
                      <span className="text-sm text-gray-300">{skill.name}</span>
                    </div>
                    <span className="text-xs text-[#7cff67]">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1 }}
                      className="h-full bg-gradient-to-r from-[#7cff67] to-[#5227FF] rounded-full"
                    />
                  </div>
                  <p className="text-[10px] text-gray-500 mt-1">{skill.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Database Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            className="relative bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-[#7cff67]/20 hover:border-[#7cff67]/50 transition-all duration-300 group"
          >
            <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="flex items-center gap-3 mb-6">
              <motion.div variants={iconVariants} whileHover="hover" className="p-3 rounded-lg bg-gradient-to-r from-[#7cff67]/20 to-[#5227FF]/20 group-hover:scale-110 transition-transform">
                <FaDatabase className="text-2xl text-[#47A248]" />
              </motion.div>
              <div>
                <h3 className="text-xl font-semibold text-white">Database</h3>
                <p className="text-xs text-gray-500">Efficient data management</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {databaseSkills.map((skill, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }}>
                        <skill.icon className="text-sm" style={{ color: skill.color }} />
                      </motion.div>
                      <span className="text-sm text-gray-300">{skill.name}</span>
                    </div>
                    <span className="text-xs text-[#7cff67]">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1 }}
                      className="h-full bg-gradient-to-r from-[#7cff67] to-[#5227FF] rounded-full"
                    />
                  </div>
                  <p className="text-[10px] text-gray-500 mt-1">{skill.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tools Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            className="relative bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-[#7cff67]/20 hover:border-[#7cff67]/50 transition-all duration-300 group"
          >
            <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="flex items-center gap-3 mb-6">
              <motion.div variants={iconVariants} whileHover="hover" className="p-3 rounded-lg bg-gradient-to-r from-[#7cff67]/20 to-[#5227FF]/20 group-hover:scale-110 transition-transform">
                <FaGitAlt className="text-2xl text-[#F05032]" />
              </motion.div>
              <div>
                <h3 className="text-xl font-semibold text-white">Tools & DevOps</h3>
                <p className="text-xs text-gray-500">Development tools & infrastructure</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {toolsSkills.map((skill, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }}>
                        <skill.icon className="text-sm" style={{ color: skill.color }} />
                      </motion.div>
                      <span className="text-sm text-gray-300">{skill.name}</span>
                    </div>
                    <span className="text-xs text-[#7cff67]">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1 }}
                      className="h-full bg-gradient-to-r from-[#7cff67] to-[#5227FF] rounded-full"
                    />
                  </div>
                  <p className="text-[10px] text-gray-500 mt-1">{skill.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Certifications with Card Effects */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-[#7cff67] to-[#5227FF] bg-clip-text text-transparent">
              Certifications
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative p-5 rounded-xl bg-black/40 backdrop-blur-sm border border-[#7cff67]/20 hover:border-[#7cff67]/50 transition-all duration-300 group"
              >
                <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[#7cff67]/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-[#7cff67]/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-[#7cff67]/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-[#7cff67]/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    className="p-2 rounded-lg bg-[#7cff67]/10"
                  >
                    <cert.icon className="text-2xl" style={{ color: cert.color }} />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-white">{cert.title}</h4>
                    <p className="text-sm text-[#7cff67]">{cert.issuer}</p>
                    <p className="text-xs text-gray-500 mt-1">{cert.year}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience with Card Effects */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-[#7cff67] to-[#5227FF] bg-clip-text text-transparent">
              Experience & Education
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative flex gap-4 p-5 rounded-xl bg-black/40 backdrop-blur-sm border border-[#7cff67]/20 hover:border-[#7cff67]/50 transition-all duration-300 group"
              >
                <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[#7cff67]/50 opacity-0 group-hover:opacity-100" />
                <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-[#7cff67]/50 opacity-0 group-hover:opacity-100" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-[#7cff67]/50 opacity-0 group-hover:opacity-100" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-[#7cff67]/50 opacity-0 group-hover:opacity-100" />
                
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  className="p-2 rounded-lg bg-[#7cff67]/10"
                >
                  <exp.icon className="text-xl text-[#7cff67]" />
                </motion.div>
                <div>
                  <h4 className="text-lg font-semibold text-white">{exp.role}</h4>
                  <p className="text-sm text-[#7cff67]">{exp.company}</p>
                  <p className="text-xs text-gray-500 mt-1">{exp.period}</p>
                  <p className="text-sm text-gray-400 mt-2">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* About Me with Corner Effects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-r from-[#7cff67]/5 to-[#5227FF]/5 rounded-2xl p-8 border border-[#7cff67]/20 group"
        >
          {/* Corner Effects */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#7cff67] opacity-50 group-hover:opacity-100 transition-opacity" />
          <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#7cff67] opacity-50 group-hover:opacity-100 transition-opacity" />
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#7cff67] opacity-50 group-hover:opacity-100 transition-opacity" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#7cff67] opacity-50 group-hover:opacity-100 transition-opacity" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
                <HiStar className="text-[#7cff67] animate-pulse" />
                About Abdul Basit
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I'm a passionate <span className="text-[#7cff67]">Full Stack Developer</span> and 
                  <span className="text-[#7cff67]"> 3rd-year IT student</span> at the 
                  <span className="text-[#7cff67]"> University of Sindh</span>. With over 2 years of experience, 
                  I've built 15+ projects.
                </p>
                <p>
                  Currently based in <span className="text-[#7cff67]">Hyderabad, Pakistan</span>, I'm leading development 
                  with the <span className="text-[#7cff67]">ITIAN IDIOTS</span> team. Our flagship project, 
                  <span className="text-[#7cff67]"> Selfinder</span>, helps people connect with their authentic selves.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
                <HiUserGroup className="text-[#7cff67] animate-pulse" />
                Quick Connect
              </h3>
              <div className="space-y-3">
                {[
                  { icon: HiLocationMarker, text: 'Hyderabad, Pakistan' },
                  { icon: HiMail, text: 'burirobasit691@gmail.com' },
                  { icon: HiPhone, text: '+92 314 7135787' },
                  { icon: FaGithub, text: 'Basit-buriro' }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#7cff67]/5 transition-all"
                  >
                    <item.icon className="text-[#7cff67] text-xl" />
                    <span className="text-gray-300">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#7cff67] to-[#5227FF] text-black font-bold rounded-full overflow-hidden hover:shadow-2xl hover:shadow-[#7cff67]/50 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              <HiMail className="group-hover:scale-110 transition" />
              Ready to Collaborate? Let's Connect
              <HiSparkles className="group-hover:rotate-12 transition" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#5227FF] to-[#7cff67] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
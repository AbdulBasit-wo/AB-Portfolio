import React, { useState } from 'react';
import profilePic from '../assets/pic.png';

const Resume = () => {
  const [activeSection, setActiveSection] = useState('about');

  // Personal Details
  const personalDetails = {
    name: 'Abdul Basit',
    title: 'Full Stack Developer',
    email: 'burirobasit691@gmail.com',
    phone: '+92 314 7135787',
    location: 'Hyderabad, Pakistan',
    website: 'basit.dev',
    github: 'Basit-buriro',
    linkedin: 'abdul-basit-73449b37a'
  };

  // About
  const about = `I'm a passionate Full Stack Developer and 3rd-year IT student at the University of Sindh. With over 2 years of experience, I've built 20+ projects ranging from e-commerce platforms to AI-integrated applications. Currently leading development with the ITIAN IDIOTS team on Selfinder project.`;

  // Experience
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'ITIAN IDIOTS Team',
      period: '2023 - Present',
      location: 'Hyderabad, Pakistan',
      achievements: [
        'Leading development of Selfinder platform with 500+ active users',
        'Managing a team of 5 developers using Agile methodology',
        'Implemented CI/CD pipeline reducing deployment time by 60%',
        'Built scalable REST APIs handling 10K+ requests/day'
      ]
    },
    {
      title: 'Freelance Full Stack Developer',
      company: 'Self-Employed',
      period: '2022 - Present',
      location: 'Remote',
      achievements: [
        'Delivered 15+ web applications for clients across 5 countries',
        'Achieved 100% client satisfaction rate with 5-star reviews',
        'Specialized in MERN stack and AI integration projects',
        'Provided technical consulting and code optimization services'
      ]
    }
  ];

  // Education
  const education = [
    {
      degree: 'Bachelor of Information Technology',
      institution: 'University of Sindh',
      period: '2022 - Present',
      location: 'Jamshoro, Pakistan',
      details: '3rd Year Student • CGPA: 3.5/4.0',
      courses: ['Data Structures', 'Web Development', 'Database Systems', 'AI Fundamentals']
    },
    {
      degree: 'Intermediate (Pre-Engineering)',
      institution: 'Government College Hyderabad',
      period: '2020 - 2022',
      location: 'Hyderabad, Pakistan',
      details: 'Grade: A (85%)',
      courses: ['Mathematics', 'Physics', 'Chemistry', 'Computer Science']
    },
    {
      degree: 'Matriculation (Science)',
      institution: 'Government High School',
      period: '2018 - 2020',
      location: 'Hyderabad, Pakistan',
      details: 'Grade: A+ (90%)',
      courses: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science']
    }
  ];

  // Skills
  const skills = [
    { name: 'React.js', level: 85, icon: '⚛️', category: 'Frontend' },
    { name: 'Next.js', level: 75, icon: '▲', category: 'Frontend' },
    { name: 'Tailwind CSS', level: 85, icon: '🎨', category: 'Frontend' },
    { name: 'JavaScript', level: 85, icon: '📜', category: 'Frontend' },
    { name: 'TypeScript', level: 75, icon: '📘', category: 'Frontend' },
    { name: 'Node.js', level: 85, icon: '🚀', category: 'Backend' },
    { name: 'Python', level: 80, icon: '🐍', category: 'Backend' },
    { name: 'Express.js', level: 85, icon: '⚡', category: 'Backend' },
    { name: 'MongoDB', level: 85, icon: '🍃', category: 'Database' },
    { name: 'PostgreSQL', level: 75, icon: '🐘', category: 'Database' },
    { name: 'Git/GitHub', level: 90, icon: '📝', category: 'Tools' },
    { name: 'Docker', level: 70, icon: '🐳', category: 'Tools' },
    { name: 'VS Code', level: 95, icon: '💻', category: 'Tools' }
  ];

  // Certifications
  const certifications = [
    { name: 'Certified Full Stack Developer', issuer: 'Expert Academy Hyderabad', year: '2024', icon: '🏆' },
    { name: 'Web & Mobile Application Development', issuer: 'SMIT (Saylani Mass IT Training)', year: '2023', icon: '📱' },
    { name: 'AI & Machine Learning Certification', issuer: 'Mehran University', year: '2024', icon: '🤖' },
    { name: 'Python for Data Science', issuer: 'University of Sindh', year: '2024', icon: '🐍' }
  ];

  // Projects
  const projects = [
    { name: 'Selfinder', tech: 'React, Node.js, MongoDB', description: 'Heart-centered platform for authentic living', link: 'https://selfinder.online' },
    { name: 'Portfolio 2024', tech: 'React, Tailwind, Framer Motion', description: 'Interactive portfolio with 3D animations', link: '#' },
    { name: 'E-Commerce Platform', tech: 'MERN Stack, Stripe', description: 'Full-featured e-commerce solution', link: '#' },
    { name: 'AI Content Generator', tech: 'Python, OpenAI API', description: 'AI-powered content creation tool', link: '#' }
  ];

  // Languages
  const languages = [
    { name: 'English', level: 'Professional Working', icon: '🇬🇧' },
    { name: 'Urdu', level: 'Native', icon: '🇵🇰' },
    { name: 'Sindhi', level: 'Native', icon: '🎯' }
  ];

  // Interests
  const interests = ['Open Source', 'AI/ML', 'Tech Writing', 'Hackathons', 'Teaching', 'Reading'];

  return (
    <div className="bg-gradient-to-br from-purple-950 via-black to-blue-950 min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header with Download Button */}
        <div className="flex justify-end mb-6">
          <a
            href="#"
            className="group inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-[#7cff67] to-[#5227FF] text-black font-semibold rounded-full hover:shadow-lg hover:shadow-[#7cff67]/50 transition-all duration-300 hover:scale-105 text-sm"
          >
            📥 Download CV (PDF)
          </a>
        </div>

        {/* CV Card */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-[#7cff67]/30 overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-[#7cff67]/20 to-[#5227FF]/20 p-8 border-b border-[#7cff67]/30">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#7cff67] to-[#5227FF] blur-md opacity-50 animate-pulse" />
                <img
                  src={profilePic}
                  alt={personalDetails.name}
                  className="w-28 h-28 rounded-full object-cover border-4 border-[#7cff67] relative z-10"
                />
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold text-white">{personalDetails.name}</h1>
                <p className="text-[#7cff67] text-lg mt-1">{personalDetails.title}</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-3 text-sm text-gray-300">
                  <span className="flex items-center gap-1">📧 {personalDetails.email}</span>
                  <span className="flex items-center gap-1">📞 {personalDetails.phone}</span>
                  <span className="flex items-center gap-1">📍 {personalDetails.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-1 p-4 border-b border-[#7cff67]/20 bg-black/30">
            {[
              { id: 'about', label: 'About', icon: '👤' },
              { id: 'experience', label: 'Experience', icon: '💼' },
              { id: 'education', label: 'Education', icon: '🎓' },
              { id: 'skills', label: 'Skills', icon: '💻' },
              { id: 'projects', label: 'Projects', icon: '📁' },
              { id: 'certifications', label: 'Certifications', icon: '🏆' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSection(tab.id)}
                className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 flex items-center gap-2 ${
                  activeSection === tab.id
                    ? 'bg-gradient-to-r from-[#7cff67] to-[#5227FF] text-black font-bold'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="p-6 md:p-8">
            {/* About Section */}
            {activeSection === 'about' && (
              <div className="space-y-6">
                <div className="relative group">
                  <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <span>👤</span> Professional Profile
                  </h2>
                  <p className="text-gray-300 leading-relaxed">{about}</p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <span>❤️</span> Interests & Hobbies
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {interests.map((interest, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-[#7cff67]/10 text-[#7cff67] text-sm border border-[#7cff67]/30">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <span>🌐</span> Languages
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {languages.map((lang, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-[#7cff67]/20">
                        <span className="text-2xl">{lang.icon}</span>
                        <div>
                          <p className="text-white font-medium">{lang.name}</p>
                          <p className="text-xs text-[#7cff67]">{lang.level}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <span>🔗</span> Connect
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    <a href="https://github.com/Basit-buriro" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-[#7cff67]/30 hover:bg-[#7cff67]/10 transition">
                      <span>🐙</span> GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/abdul-basit-73449b37a/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-[#7cff67]/30 hover:bg-[#7cff67]/10 transition">
                      <span>💼</span> LinkedIn
                    </a>
                    <a href="https://instagram.com/rehman1572006" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-[#7cff67]/30 hover:bg-[#7cff67]/10 transition">
                      <span>📸</span> Instagram
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Experience Section */}
            {activeSection === 'experience' && (
              <div className="space-y-6">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="relative group border-l-2 border-[#7cff67]/30 pl-4 ml-2 hover:border-[#7cff67] transition-all">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#7cff67]"></div>
                    <div className="mb-2">
                      <h3 className="text-lg font-bold text-white">{exp.title}</h3>
                      <p className="text-[#7cff67] text-sm">{exp.company}</p>
                      <div className="flex flex-wrap gap-3 text-xs text-gray-400 mt-1">
                        <span>📅 {exp.period}</span>
                        <span>📍 {exp.location}</span>
                      </div>
                    </div>
                    <ul className="space-y-1 mt-2">
                      {exp.achievements.map((ach, i) => (
                        <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                          <span className="text-[#7cff67]">▹</span>
                          {ach}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Education Section */}
            {activeSection === 'education' && (
              <div className="space-y-6">
                {education.map((edu, idx) => (
                  <div key={idx} className="relative group border-l-2 border-[#7cff67]/30 pl-4 ml-2 hover:border-[#7cff67] transition-all">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#7cff67]"></div>
                    <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                    <p className="text-[#7cff67] text-sm">{edu.institution}</p>
                    <div className="flex flex-wrap gap-3 text-xs text-gray-400 mt-1">
                      <span>📅 {edu.period}</span>
                      <span>📍 {edu.location}</span>
                    </div>
                    <p className="text-gray-300 text-sm mt-2">{edu.details}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {edu.courses?.map((course, i) => (
                        <span key={i} className="text-xs px-2 py-1 rounded-full bg-[#7cff67]/10 text-[#7cff67]">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Skills Section */}
            {activeSection === 'skills' && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {['Frontend', 'Backend', 'Database', 'Tools'].map((category) => (
                    <div key={category}>
                      <h3 className="text-lg font-bold text-white mb-3">{category}</h3>
                      <div className="space-y-3">
                        {skills.filter(s => s.category === category).map((skill, idx) => (
                          <div key={idx}>
                            <div className="flex justify-between mb-1">
                              <div className="flex items-center gap-2">
                                <span>{skill.icon}</span>
                                <span className="text-white text-sm">{skill.name}</span>
                              </div>
                              <span className="text-[#7cff67] text-sm">{skill.level}%</span>
                            </div>
                            <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-gradient-to-r from-[#7cff67] to-[#5227FF] rounded-full transition-all"
                                style={{ width: `${skill.level}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Projects Section */}
            {activeSection === 'projects' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((project, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white/5 border border-[#7cff67]/20 hover:border-[#7cff67] transition-all group">
                    <h3 className="font-bold text-white group-hover:text-[#7cff67] transition">{project.name}</h3>
                    <p className="text-xs text-gray-400 mt-1">{project.tech}</p>
                    <p className="text-sm text-gray-300 mt-2">{project.description}</p>
                    {project.link !== '#' && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-[#7cff67] mt-2 hover:underline">
                        🔗 View Project
                      </a>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Certifications Section */}
            {activeSection === 'certifications' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-[#7cff67]/20 hover:border-[#7cff67] transition-all group">
                    <span className="text-2xl">{cert.icon}</span>
                    <div>
                      <h3 className="font-semibold text-white text-sm group-hover:text-[#7cff67] transition">{cert.name}</h3>
                      <p className="text-xs text-[#7cff67] mt-1">{cert.issuer}</p>
                      <p className="text-xs text-gray-500 mt-1">{cert.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-gray-500 text-xs">
          <p>Available for opportunities | Updated March 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const Services = () => {
  const [stars, setStars] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Create stars
  useEffect(() => {
    const starCount = 150;
    const newStars = [];
    for (let i = 0; i < starCount; i++) {
      newStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        twinkle: Math.random() * 2 + 1,
      });
    }
    setStars(newStars);
  }, []);

  const services = [
    {
      id: 1,
      icon: '💻',
      title: 'Web Development',
      description: 'Custom, responsive, and high-performance websites and web applications using modern technologies.',
      features: ['React.js', 'Node.js', 'Tailwind CSS', 'MongoDB'],
      color: '#7cff67',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 2,
      icon: '📱',
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications for iOS and Android using React Native.',
      features: ['React Native', 'Cross-platform', 'Push Notifications', 'Offline Support'],
      color: '#61DAFB',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      icon: '🤖',
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by AI and ML algorithms.',
      features: ['OpenAI', 'Chatbots', 'Predictive Analytics', 'Computer Vision'],
      color: '#5227FF',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      id: 4,
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive, and user-centered designs that enhance user experience.',
      features: ['Figma', 'Prototyping', 'User Research', 'Wireframing'],
      color: '#FF6B6B',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      id: 5,
      icon: '⚡',
      title: 'Performance Optimization',
      description: 'Speed up your applications with advanced optimization techniques.',
      features: ['Lazy Loading', 'Code Splitting', 'Caching', 'CDN'],
      color: '#FFD700',
      gradient: 'from-yellow-500 to-amber-500'
    },
    {
      id: 6,
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Deploy and manage applications on cloud platforms.',
      features: ['AWS', 'Vercel', 'Netlify', 'Docker'],
      color: '#FF9900',
      gradient: 'from-orange-500 to-amber-500'
    }
  ];

  // 3D Card Component
  const Card3D = ({ children, service, index }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 300, damping: 30 });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 300, damping: 30 });
    
    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
      const mouseY = (e.clientY - rect.top) / rect.height - 0.5;
      x.set(mouseX);
      y.set(mouseY);
    };
    
    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };
    
    return (
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } }
        }}
        whileHover={{ y: -5 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY }}
        className="relative perspective"
      >
        <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-[#7cff67]/30 hover:border-[#7cff67] transition-all h-full">
          {/* 3D Shadow Effect */}
          <motion.div
            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${service.color}20, transparent 70%)`,
            }}
          />
          
          {/* Corner Effects */}
          <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Icon with 3D Hover */}
          <motion.div
            whileHover={{ scale: 1.2, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="text-5xl mb-4 inline-block"
          >
            {service.icon}
          </motion.div>
          
          {/* Title */}
          <motion.h3
            whileHover={{ x: 3 }}
            className="text-xl font-bold text-white mb-2 group-hover:text-[#7cff67] transition"
          >
            {service.title}
          </motion.h3>
          
          {/* Description */}
          <p className="text-gray-300 text-sm mb-3 leading-relaxed">
            {service.description}
          </p>
          
          {/* Features Tags */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {service.features.map((feature, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.05 }}
                className="px-2 py-0.5 text-[10px] rounded-full bg-[#7cff67]/20 text-[#7cff67] border border-[#7cff67]/30 cursor-pointer"
              >
                {feature}
              </motion.span>
            ))}
          </div>
          
          {/* Glow Effect on Hover */}
          <motion.div
            className="absolute inset-0 rounded-xl pointer-events-none"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{
              boxShadow: `0 0 30px ${service.color}40`,
            }}
          />
        </div>
      </motion.div>
    );
  };

  // 3D Process Step Component
  const ProcessStep3D = ({ step, icon, title, desc, index, color }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });
    
    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
      const mouseY = (e.clientY - rect.top) / rect.height - 0.5;
      x.set(mouseX);
      y.set(mouseY);
    };
    
    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 30, rotateX: -20 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
        whileHover={{ y: -3 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY }}
        className="relative perspective"
      >
        <div className="relative text-center p-5 rounded-xl bg-white/10 backdrop-blur-sm border border-[#7cff67]/30 hover:border-[#7cff67] transition-all h-full">
          {/* Corner Effects */}
          <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <motion.div
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="text-4xl mb-2 inline-block"
          >
            {icon}
          </motion.div>
          <div className="text-3xl font-bold text-[#7cff67]">{step}</div>
          <h3 className="font-semibold text-white mt-2">{title}</h3>
          <p className="text-xs text-gray-400 mt-1">{desc}</p>
          
          {/* Glow Effect */}
          <motion.div
            className="absolute inset-0 rounded-xl pointer-events-none"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{
              boxShadow: `0 0 20px ${color || '#7cff67'}40`,
            }}
          />
        </div>
      </motion.div>
    );
  };

  return (
    <div className="relative bg-gradient-to-br from-purple-950 via-black to-blue-950 min-h-screen py-20 overflow-hidden">
      {/* Twinkling Stars */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
            }}
            animate={{
              opacity: [star.opacity, star.opacity + 0.3, star.opacity],
            }}
            transition={{
              duration: star.twinkle,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Floating Particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#7cff67]/30 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [null, -100, -200],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeOut"
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        {/* Header with 3D Tilt */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative text-center mb-12 group"
        >
          {/* Corner Effects */}
          <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block mb-4"
          >
            <div className="px-5 py-2 rounded-full bg-gradient-to-r from-[#7cff67]/20 to-[#5227FF]/20 border border-[#7cff67]/30 backdrop-blur-sm">
              <span className="text-[#7cff67] font-mono text-sm flex items-center gap-2">
                💼
                services.provider()
                <motion.div
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="w-1.5 h-1.5 rounded-full bg-[#7cff67]"
                />
              </span>
            </div>
          </motion.div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#7cff67] to-[#5227FF] bg-clip-text text-transparent">
              What I Do
            </span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your needs
          </p>
        </motion.div>

        {/* Services Grid with 3D Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card3D key={service.id} service={service} index={index}>
              {service}
            </Card3D>
          ))}
        </div>

        {/* Process Section with 3D Steps */}
        <div className="mt-16">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            className="text-2xl md:text-3xl font-bold text-center mb-8"
          >
            <span className="bg-gradient-to-r from-[#7cff67] to-[#5227FF] bg-clip-text text-transparent">
              My Process
            </span>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { step: '01', title: 'Discovery', desc: 'Understand your needs', icon: '🔍', color: '#7cff67' },
              { step: '02', title: 'Planning', desc: 'Create roadmap', icon: '📋', color: '#5227FF' },
              { step: '03', title: 'Development', desc: 'Build with clean code', icon: '💻', color: '#FFD700' },
              { step: '04', title: 'Delivery', desc: 'Launch & support', icon: '🚀', color: '#FF6B6B' }
            ].map((step, index) => (
              <ProcessStep3D
                key={index}
                step={step.step}
                icon={step.icon}
                title={step.title}
                desc={step.desc}
                index={index}
                color={step.color}
              />
            ))}
          </div>
        </div>

        {/* CTA Section with 3D Hover */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1 }}
          className="relative group text-center mt-12"
        >
          {/* Corner Effects */}
          <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="max-w-2xl mx-auto p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-[#7cff67]/30"
          >
            <motion.h3
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-xl md:text-2xl font-bold text-white mb-3"
            >
              Ready to bring your idea to life?
            </motion.h3>
            <p className="text-gray-400 text-sm mb-5">
              Let's discuss your project and create something amazing together.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#7cff67] to-[#5227FF] text-black font-bold rounded-full hover:shadow-lg hover:shadow-[#7cff67]/30 transition-all duration-300"
              >
                Get in Touch
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-lg"
                >
                  🚀
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        .perspective {
          perspective: 1000px;
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
};

export default Services;
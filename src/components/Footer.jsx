import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // Navigation Links
  const navLinks = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'Projects', path: '/projects', icon: '📁' },
    { name: 'Skills', path: '/skills', icon: '💻' },
    { name: 'About', path: '/about', icon: '👤' },
    { name: 'Services', path: '/services', icon: '⚙️' },
    { name: 'Blog', path: '/blog', icon: '📝' },
    { name: 'Resume', path: '/resume', icon: '📄' },
    { name: 'Testimonials', path: '/testimonials', icon: '⭐' },
    { name: 'Contact', path: '/contact', icon: '📧' }
  ];

  // Services
  const services = [
    { name: 'Web Development', icon: '💻' },
    { name: 'Mobile Development', icon: '📱' },
    { name: 'AI Integration', icon: '🤖' },
    { name: 'UI/UX Design', icon: '🎨' },
    { name: 'Performance Optimization', icon: '⚡' },
    { name: 'Cloud Solutions', icon: '☁️' }
  ];

  // Quick Info
  const quickInfo = [
    { icon: '📍', text: 'Hyderabad, Pakistan', link: null },
    { icon: '📧', text: 'burirobasit691@gmail.com', link: 'mailto:burirobasit691@gmail.com' },
    { icon: '📞', text: '+92 314 7135787', link: 'tel:+923147135787' },
    { icon: '💬', text: '+92 328 2570585', link: 'https://wa.me/923282570585' }
  ];

  // Social Links
  const socialLinks = [
    { name: 'GitHub', icon: '🐙', url: 'https://github.com/Basit-buriro', color: '#ffffff', hoverColor: '#7cff67' },
    { name: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/abdul-basit-73449b37a/', color: '#0077b5', hoverColor: '#7cff67' },
    { name: 'Instagram', icon: '📸', url: 'https://instagram.com/rehman1572006', color: '#e4405f', hoverColor: '#7cff67' },
    { name: 'Twitter', icon: '🐦', url: '#', color: '#1DA1F2', hoverColor: '#7cff67' },
    { name: 'WhatsApp', icon: '💬', url: 'https://wa.me/923282570585', color: '#25d366', hoverColor: '#7cff67' },
    { name: 'Facebook', icon: '📘', url: 'https://facebook.com/abdulbasitburiro', color: '#1877f2', hoverColor: '#7cff67' }
  ];

  // Newsletter State
  const [email, setEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setNewsletterStatus('success');
      setEmail('');
      setIsSubmitting(false);
      setTimeout(() => setNewsletterStatus(null), 3000);
    }, 1000);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: { duration: 0.5, type: "spring", stiffness: 300 }
    }
  };

  const linkVariants = {
    hover: {
      x: 5,
      color: '#7cff67',
      transition: { duration: 0.2 }
    }
  };

  const socialVariants = {
    hover: {
      scale: 1.2,
      y: -5,
      transition: { duration: 0.3, type: "spring", stiffness: 400 }
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-purple-950 via-black to-blue-950 border-t border-[#7cff67]/20">
      {/* Animated Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7cff67] to-transparent">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="relative inline-block group">
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
              <h2 className="text-2xl font-bold">
                <span className="bg-gradient-to-r from-[#7cff67] to-[#5227FF] bg-clip-text text-transparent">
                  AB
                </span>
                <span className="text-white">.</span>
              </h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full Stack Developer passionate about building innovative web solutions 
              that make a difference. Available for freelance and full-time opportunities.
            </p>
            <div className="flex gap-3 pt-2">
              {socialLinks.slice(0, 4).map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={socialVariants}
                  whileHover="hover"
                  className="relative group"
                >
                  <div className="absolute inset-0 rounded-full bg-[#7cff67]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#7cff67]/20 transition-all border border-[#7cff67]/30 hover:border-[#7cff67]">
                    <span className="text-sm">{social.icon}</span>
                  </div>
                  <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-[10px] text-gray-500 opacity-0 group-hover:opacity-100 whitespace-nowrap">
                    {social.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            <div className="relative inline-block group">
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="text-[#7cff67]">🔗</span>
                Quick Links
              </h3>
            </div>
            <ul className="space-y-2">
              {navLinks.slice(0, 6).map((link) => (
                <motion.li key={link.name} variants={itemVariants}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#7cff67] transition-colors duration-300 flex items-center gap-2 text-sm group"
                  >
                    <motion.span
                      variants={iconVariants}
                      whileHover="hover"
                      className="text-sm"
                    >
                      {link.icon}
                    </motion.span>
                    <motion.span
                      variants={linkVariants}
                      whileHover="hover"
                      className="inline-block"
                    >
                      {link.name}
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            <div className="relative inline-block group">
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="text-[#7cff67]">⚙️</span>
                Services
              </h3>
            </div>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="text-gray-400 hover:text-[#7cff67] transition-colors duration-300 flex items-center gap-2 text-sm group"
                >
                  <motion.span
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm"
                  >
                    {service.icon}
                  </motion.span>
                  <span>{service.name}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Newsletter */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            <div className="relative inline-block group">
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="text-[#7cff67]">📧</span>
                Get in Touch
              </h3>
            </div>
            <ul className="space-y-2">
              {quickInfo.map((info, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="text-gray-400 text-sm group"
                >
                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.icon === '💬' ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-[#7cff67] transition-colors duration-300"
                    >
                      <motion.span
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                        className="text-sm"
                      >
                        {info.icon}
                      </motion.span>
                      <span>{info.text}</span>
                    </a>
                  ) : (
                    <span className="flex items-center gap-2">
                      <span className="text-sm">{info.icon}</span>
                      <span>{info.text}</span>
                    </span>
                  )}
                </motion.li>
              ))}
            </ul>

            {/* Newsletter */}
            <div className="pt-4">
              <div className="relative group">
                <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
                <h4 className="text-white text-sm font-semibold mb-2 flex items-center gap-2">
                  <span className="text-[#7cff67]">📬</span>
                  Newsletter
                </h4>
              </div>
              <p className="text-gray-400 text-xs mb-3">
                Get the latest updates and offers.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-3 py-2 text-sm rounded-lg bg-black/50 border border-[#7cff67]/30 text-white placeholder-gray-500 focus:outline-none focus:border-[#7cff67] transition-all"
                />
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-3 py-2 bg-gradient-to-r from-[#7cff67] to-[#5227FF] text-black text-sm font-semibold rounded-lg hover:shadow-lg transition-all"
                >
                  {isSubmitting ? '...' : 'Subscribe'}
                </motion.button>
              </form>
              {newsletterStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-xs mt-2"
                >
                  ✓ Subscribed successfully!
                </motion.p>
              )}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#7cff67]/20"></div>
          </div>
          <div className="relative flex justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="bg-gradient-to-r from-[#7cff67] to-[#5227FF] p-1 rounded-full"
            >
              <div className="bg-black rounded-full px-4 py-1">
                <span className="text-[#7cff67] text-sm">⚡</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-500 text-xs"
          >
            © {currentYear} Abdul Basit. All rights reserved.
          </motion.p>

          <div className="flex gap-6">
            <motion.a
              href="#"
              whileHover={{ color: '#7cff67' }}
              className="text-gray-500 text-xs hover:text-[#7cff67] transition"
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ color: '#7cff67' }}
              className="text-gray-500 text-xs hover:text-[#7cff67] transition"
            >
              Terms of Service
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ color: '#7cff67' }}
              className="text-gray-500 text-xs hover:text-[#7cff67] transition"
            >
              Sitemap
            </motion.a>
          </div>

          {/* All Social Links */}
          <div className="flex gap-3">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                className="relative group"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#7cff67]/20 transition-all border border-[#7cff67]/30 hover:border-[#7cff67]">
                  <span className="text-sm">{social.icon}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Made with love */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-6"
        >
          <p className="text-gray-600 text-[10px] flex items-center justify-center gap-1">
            <span>Made with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-red-500"
            >
              ❤️
            </motion.span>
            <span>by Abdul Basit</span>
            <span className="text-[#7cff67]">✦</span>
            <span>Full Stack Developer</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
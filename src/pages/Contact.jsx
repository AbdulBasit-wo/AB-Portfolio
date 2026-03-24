import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [stars, setStars] = useState([]);
  const [activeInput, setActiveInput] = useState(null);

  // Create stars background
  useEffect(() => {
    const starCount = 100;
    const newStars = [];
    for (let i = 0; i < starCount; i++) {
      newStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }
    setStars(newStars);
  }, []);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  // Contact Info
  const contactInfo = [
    { icon: '📧', label: 'Email', value: 'burirobasit691@gmail.com', link: 'mailto:burirobasit691@gmail.com', color: '#7cff67', delay: 0 },
    { icon: '📞', label: 'Phone', value: '+92 314 7135787', link: 'tel:+923147135787', color: '#5227FF', delay: 0.1 },
    { icon: '💬', label: 'WhatsApp', value: '+92 328 2570585', link: 'https://wa.me/923282570585', color: '#25d366', delay: 0.2 },
    { icon: '📍', label: 'Location', value: 'Hyderabad, Pakistan', link: null, color: '#FFD700', delay: 0.3 }
  ];

  // Social Links
  const socialLinks = [
    { icon: '🐙', url: 'https://github.com/Basit-buriro', color: '#ffffff', name: 'GitHub', delay: 0 },
    { icon: '💼', url: 'https://www.linkedin.com/in/abdul-basit-73449b37a/', color: '#0077b5', name: 'LinkedIn', delay: 0.1 },
    { icon: '📸', url: 'https://instagram.com/rehman1572006', color: '#e4405f', name: 'Instagram', delay: 0.2 },
    { icon: '🐦', url: '#', color: '#1DA1F2', name: 'Twitter', delay: 0.3 },
    { icon: '💬', url: 'https://wa.me/923282570585', color: '#25d366', name: 'WhatsApp', delay: 0.4 }
  ];

  // Availability
  const availability = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  return (
    <div className="bg-gradient-to-br from-purple-950 via-black to-blue-950 min-h-screen py-20 overflow-hidden">
      {/* Stars Background */}
      <div className="fixed inset-0 pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
            }}
          />
        ))}
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#7cff67]/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: Math.random() * 6 + 3,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header with Corner Effects */}
        <div className="relative text-center mb-12 group">
          <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <div className="inline-block mb-4">
            <div className="px-5 py-2 rounded-full bg-gradient-to-r from-[#7cff67]/20 to-[#5227FF]/20 border border-[#7cff67]/30 backdrop-blur-sm">
              <span className="text-[#7cff67] font-mono text-sm flex items-center gap-2">
                📧 contact.connect()
                <div className="w-1.5 h-1.5 rounded-full bg-[#7cff67] animate-ping" />
              </span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#7cff67] to-[#5227FF] bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Column - Contact Info */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: info.delay }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="relative group bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-[#7cff67]/30 hover:border-[#7cff67] transition-all"
                >
                  <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 rounded-lg bg-[#7cff67]/20 flex items-center justify-center text-2xl"
                    >
                      {info.icon}
                    </motion.div>
                    <div>
                      <p className="text-sm text-gray-400">{info.label}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          target={info.label === 'WhatsApp' ? '_blank' : '_self'}
                          rel="noopener noreferrer"
                          className="text-white font-medium hover:text-[#7cff67] transition"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Availability Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="relative group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-[#7cff67]/30 hover:border-[#7cff67] transition-all"
            >
              <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-[#7cff67]">⏰</span>
                Availability
              </h3>
              <div className="space-y-3">
                {availability.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">{item.day}</span>
                    <span className="text-[#7cff67] text-sm">{item.hours}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="relative group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-[#7cff67]/30 hover:border-[#7cff67] transition-all"
            >
              <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-[#7cff67]">🌐</span>
                Connect With Me
              </h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + social.delay }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    className="group relative p-3 rounded-full bg-[#7cff67]/10 hover:bg-[#7cff67]/20 border border-[#7cff67]/30 hover:border-[#7cff67] transition-all"
                  >
                    <span className="text-xl" style={{ color: social.color }}>{social.icon}</span>
                    <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-[10px] text-gray-500 opacity-0 group-hover:opacity-100 whitespace-nowrap">
                      {social.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-[#7cff67]/30 hover:border-[#7cff67] transition-all"
          >
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />

            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-[#7cff67]">✉️</span>
              Send a Message
            </h3>

            {/* Success/Error Message */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 p-3 rounded-lg bg-green-500/20 border border-green-500/50 text-green-400 text-sm flex items-center gap-2"
              >
                <span>✓</span>
                Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Field */}
              <div>
                <label className="block text-sm text-gray-300 mb-1 flex items-center gap-2">
                  <span className="text-[#7cff67]">👤</span>
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setActiveInput('name')}
                  onBlur={() => setActiveInput(null)}
                  className={`w-full px-4 py-3 rounded-lg bg-black/50 border ${
                    errors.name ? 'border-red-500' : activeInput === 'name' ? 'border-[#7cff67]' : 'border-[#7cff67]/30'
                  } text-white placeholder-gray-500 focus:outline-none transition-all`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm text-gray-300 mb-1 flex items-center gap-2">
                  <span className="text-[#7cff67]">📧</span>
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setActiveInput('email')}
                  onBlur={() => setActiveInput(null)}
                  className={`w-full px-4 py-3 rounded-lg bg-black/50 border ${
                    errors.email ? 'border-red-500' : activeInput === 'email' ? 'border-[#7cff67]' : 'border-[#7cff67]/30'
                  } text-white placeholder-gray-500 focus:outline-none transition-all`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Subject Field */}
              <div>
                <label className="block text-sm text-gray-300 mb-1 flex items-center gap-2">
                  <span className="text-[#7cff67]">📝</span>
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setActiveInput('subject')}
                  onBlur={() => setActiveInput(null)}
                  className={`w-full px-4 py-3 rounded-lg bg-black/50 border ${
                    errors.subject ? 'border-red-500' : activeInput === 'subject' ? 'border-[#7cff67]' : 'border-[#7cff67]/30'
                  } text-white placeholder-gray-500 focus:outline-none transition-all`}
                  placeholder="Project Inquiry"
                />
                {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm text-gray-300 mb-1 flex items-center gap-2">
                  <span className="text-[#7cff67]">💬</span>
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setActiveInput('message')}
                  onBlur={() => setActiveInput(null)}
                  className={`w-full px-4 py-3 rounded-lg bg-black/50 border ${
                    errors.message ? 'border-red-500' : activeInput === 'message' ? 'border-[#7cff67]' : 'border-[#7cff67]/30'
                  } text-white placeholder-gray-500 focus:outline-none transition-all resize-none`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
                  isSubmitting
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-[#7cff67] to-[#5227FF] text-black hover:shadow-lg hover:shadow-[#7cff67]/30'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <span>📤</span>
                    Send Message
                  </>
                )}
              </motion.button>
            </form>

            {/* Response Time Note */}
            <p className="text-center text-xs text-gray-500 mt-4 flex items-center justify-center gap-1">
              <span className="text-[#7cff67]">⏰</span>
              I typically respond within 24 hours
            </p>
          </motion.div>
        </div>

        {/* Map Section - Simple static map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 max-w-6xl mx-auto"
        >
          <div className="relative group bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-[#7cff67]/30 hover:border-[#7cff67] transition-all">
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center justify-center gap-2">
                <span className="text-[#7cff67]">📍</span>
                Location Map
              </h3>
              <div className="h-64 rounded-lg overflow-hidden bg-gradient-to-br from-purple-900 to-blue-900 flex items-center justify-center flex-col">
                <span className="text-6xl mb-3">📍</span>
                <p className="text-white font-semibold">Hyderabad, Pakistan</p>
                <p className="text-gray-400 text-sm mt-2">Sindh, Pakistan</p>
                <a 
                  href="https://maps.google.com/?q=Hyderabad,Pakistan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 text-[#7cff67] text-sm hover:underline"
                >
                  View on Google Maps →
                </a>
              </div>
              <p className="text-gray-400 text-sm mt-3">
                Available for remote work worldwide
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
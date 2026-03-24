import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Testimonials = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Different avatars for each client
  const avatars = [
    'https://randomuser.me/api/portraits/women/68.jpg',
    'https://randomuser.me/api/portraits/men/32.jpg',
    'https://randomuser.me/api/portraits/women/45.jpg',
    'https://randomuser.me/api/portraits/men/75.jpg',
    'https://randomuser.me/api/portraits/women/22.jpg',
    'https://randomuser.me/api/portraits/men/91.jpg'
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'TechStart Solutions',
      avatar: avatars[0],
      testimonial: 'Working with Abdul Basit was an absolute pleasure. He delivered a complex web application ahead of schedule and exceeded all expectations.',
      rating: 5,
      date: 'March 2024',
      project: 'E-commerce Platform',
      category: 'web'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Product Manager',
      company: 'Innovate Labs',
      avatar: avatars[1],
      testimonial: 'Abdul is a true professional. He not only delivered high-quality code but also provided valuable insights that improved our overall architecture.',
      rating: 5,
      date: 'February 2024',
      project: 'Mobile App',
      category: 'mobile'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'CTO',
      company: 'AI Solutions',
      avatar: avatars[2],
      testimonial: 'The AI integration Abdul implemented transformed our business processes. His deep understanding of machine learning made the collaboration seamless.',
      rating: 5,
      date: 'January 2024',
      project: 'AI Integration',
      category: 'ai'
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Founder',
      company: 'Startup Hub',
      avatar: avatars[3],
      testimonial: 'Outstanding work! Abdul redesigned our entire platform and the results were phenomenal. User engagement increased by 150%.',
      rating: 5,
      date: 'December 2023',
      project: 'UI/UX Redesign',
      category: 'design'
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      role: 'Marketing Director',
      company: 'Digital Growth',
      avatar: avatars[4],
      testimonial: 'The website Abdul built for us is fast, responsive, and looks amazing on all devices. His attention to detail is exceptional.',
      rating: 5,
      date: 'November 2023',
      project: 'Website',
      category: 'web'
    },
    {
      id: 6,
      name: 'James Wilson',
      role: 'Technical Lead',
      company: 'DevOps Pro',
      avatar: avatars[5],
      testimonial: "Abdul's backend architecture is rock solid. He optimized our API performance by 300% and implemented best practices.",
      rating: 5,
      date: 'October 2023',
      project: 'API Optimization',
      category: 'backend'
    }
  ];

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'ai', label: 'AI/ML' },
    { id: 'design', label: 'Design' },
    { id: 'backend', label: 'Backend' }
  ];

  const filteredTestimonials = selectedFilter === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.category === selectedFilter);

  const stats = [
    { value: '50+', label: 'Happy Clients', icon: '👥', color: '#7cff67' },
    { value: '100+', label: 'Projects Completed', icon: '💼', color: '#5227FF' },
    { value: '98%', label: 'Client Satisfaction', icon: '⭐', color: '#FFD700' },
    { value: '24/7', label: 'Support Available', icon: '⚡', color: '#7cff67' }
  ];

  return (
    <div className="bg-gradient-to-br from-purple-950 via-black to-blue-950 min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header Section with Corner Effects */}
        <div className="relative text-center mb-12 group">
          <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="inline-block mb-4">
            <div className="px-5 py-2 rounded-full bg-gradient-to-r from-[#7cff67]/20 to-[#5227FF]/20 border border-[#7cff67]/30 backdrop-blur-sm">
              <span className="text-[#7cff67] font-mono text-sm flex items-center gap-2">
                <span className="text-yellow-400">⭐</span>
                client.testimonials()
                <span className="w-1.5 h-1.5 rounded-full bg-[#7cff67] animate-ping" />
              </span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#7cff67] to-[#5227FF] bg-clip-text text-transparent">
              What Clients Say
            </span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg">
            Here's what my amazing clients have to say about working with me
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="relative group text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-[#7cff67]/30 hover:border-[#7cff67] transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="text-4xl mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-[#7cff67]">{stat.value}</div>
              <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedFilter(cat.id)}
              className={`px-5 py-2 rounded-full text-sm transition-all duration-300 hover:scale-105 ${
                selectedFilter === cat.id
                  ? 'bg-gradient-to-r from-[#7cff67] to-[#5227FF] text-black font-bold shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:text-white border border-[#7cff67]/30 hover:border-[#7cff67]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-[#7cff67]/30 hover:border-[#7cff67] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="text-4xl text-[#7cff67]/30 mb-3 transition-transform duration-300 group-hover:scale-110">"</div>

              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-lg">★</span>
                ))}
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                "{testimonial.testimonial.substring(0, 120)}..."
              </p>

              <div className="flex items-center gap-3 mb-3">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#7cff67] to-[#5227FF] blur-md opacity-50 transition-opacity duration-300 group-hover:opacity-100" />
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-[#7cff67] relative z-10 transition-all duration-300 group-hover:scale-110"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm group-hover:text-[#7cff67] transition-colors duration-300">
                    {testimonial.name}
                  </h3>
                  <p className="text-xs text-gray-400">{testimonial.role}</p>
                  <p className="text-xs text-[#7cff67]/80">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-[#7cff67]/20">
                <span className="text-xs text-[#7cff67]">
                  📁 {testimonial.project}
                </span>
                <span className="text-xs text-gray-500 flex items-center gap-1">
                  <span>📅</span> {testimonial.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredTestimonials.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl text-white mb-2">No testimonials found</h3>
            <p className="text-gray-400">Try selecting a different category</p>
          </div>
        )}

        {/* Call to Action Section */}
        <div className="relative group text-center mt-16">
          <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-[#7cff67]/10 to-[#5227FF]/10 border border-[#7cff67]/30 backdrop-blur-sm transition-all duration-300 hover:scale-105">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
              Ready to become the next success story?
            </h3>
            <p className="text-gray-400 text-sm mb-5">
              Let's work together and create something amazing. Your story could be next!
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#7cff67] to-[#5227FF] text-black font-bold rounded-full hover:shadow-2xl hover:shadow-[#7cff67]/50 transition-all duration-300 hover:scale-105"
            >
              Start Your Project
              <span className="text-lg">🚀</span>
            </Link>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          {['Trustpilot', 'Google Reviews', 'Clutch.co', 'GoodFirms'].map((badge, i) => (
            <div
              key={i}
              className="text-gray-400 text-sm cursor-pointer transition-all duration-300 hover:text-[#7cff67] hover:scale-110"
            >
              ★ {badge}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
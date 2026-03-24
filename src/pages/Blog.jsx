import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  HiCalendar, HiClock, HiHeart, HiBookmark, 
  HiEye, HiSearch, HiX, HiArrowRight, HiStar,
  HiMail, HiTag, HiUserGroup, HiBookOpen,
  HiSparkles, HiTrendingUp, HiFire
} from 'react-icons/hi';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import profilePic from '../assets/pic.png';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [likedPosts, setLikedPosts] = useState({});
  const [bookmarkedPosts, setBookmarkedPosts] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [emailForNewsletter, setEmailForNewsletter] = useState('');
  const [showNewsletterSuccess, setShowNewsletterSuccess] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const posts = [
    {
      id: 1,
      title: 'Getting Started with React 18',
      excerpt: 'Learn the new features and improvements in React 18 including concurrent rendering, automatic batching, and transitions.',
      date: 'March 15, 2024',
      readTime: '5 min read',
      author: 'Abdul Basit',
      category: 'React',
      tags: ['React', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600',
      likes: 124,
      views: 1240,
      comments: 23,
      featured: true,
      trending: true
    },
    {
      id: 2,
      title: 'Mastering Tailwind CSS',
      excerpt: 'A comprehensive guide to building responsive and beautiful interfaces with Tailwind CSS utility classes.',
      date: 'March 10, 2024',
      readTime: '7 min read',
      author: 'Abdul Basit',
      category: 'CSS',
      tags: ['Tailwind CSS', 'CSS'],
      image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=600',
      likes: 89,
      views: 890,
      comments: 15,
      featured: false,
      trending: false
    },
    {
      id: 3,
      title: 'Node.js Best Practices',
      excerpt: 'Essential best practices for building scalable and secure Node.js applications.',
      date: 'March 5, 2024',
      readTime: '8 min read',
      author: 'Abdul Basit',
      category: 'Node.js',
      tags: ['Node.js', 'Backend'],
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600',
      likes: 156,
      views: 2100,
      comments: 32,
      featured: true,
      trending: true
    },
    {
      id: 4,
      title: 'AI in Web Development',
      excerpt: 'How artificial intelligence is transforming the way we build and interact with web applications.',
      date: 'February 28, 2024',
      readTime: '6 min read',
      author: 'Abdul Basit',
      category: 'AI',
      tags: ['AI', 'Machine Learning'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600',
      likes: 203,
      views: 3450,
      comments: 45,
      featured: false,
      trending: true
    },
    {
      id: 5,
      title: 'MongoDB Aggregation Pipeline',
      excerpt: 'Master complex data queries and transformations with MongoDB aggregation framework.',
      date: 'February 20, 2024',
      readTime: '9 min read',
      author: 'Abdul Basit',
      category: 'Database',
      tags: ['MongoDB', 'Database'],
      image: 'https://images.unsplash.com/photo-1623479322729-28b25c16b011?w=600',
      likes: 67,
      views: 560,
      comments: 12,
      featured: false,
      trending: false
    },
    {
      id: 6,
      title: 'Framer Motion Animations',
      excerpt: 'Create stunning animations in React with Framer Motion - from basic to advanced techniques.',
      date: 'February 15, 2024',
      readTime: '6 min read',
      author: 'Abdul Basit',
      category: 'React',
      tags: ['Framer Motion', 'Animations'],
      image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600',
      likes: 178,
      views: 2340,
      comments: 28,
      featured: false,
      trending: false
    }
  ];

  const categories = ['All', 'React', 'Node.js', 'AI', 'CSS', 'Database'];
  const itemsPerPage = 6;

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = posts.filter(post => post.featured);
  const trendingPosts = posts.filter(post => post.trending);
  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);
  const paginatedPosts = filteredPosts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleLike = (postId) => {
    setLikedPosts(prev => ({ ...prev, [postId]: !prev[postId] }));
    showToastMessage(prev[postId] ? 'Removed like' : 'Post liked!');
  };

  const handleBookmark = (postId) => {
    setBookmarkedPosts(prev => ({ ...prev, [postId]: !prev[postId] }));
    showToastMessage(prev[postId] ? 'Removed from reading list' : 'Added to reading list!');
  };

  const handleShare = (postId) => {
    const url = `${window.location.origin}/blog/${postId}`;
    navigator.clipboard.writeText(url);
    showToastMessage('Link copied to clipboard!');
  };

  const showToastMessage = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleNewsletterSubscribe = (e) => {
    e.preventDefault();
    if (emailForNewsletter) {
      setShowNewsletterSuccess(true);
      setEmailForNewsletter('');
      setTimeout(() => setShowNewsletterSuccess(false), 3000);
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-950 via-black to-blue-950 min-h-screen py-20">
      {/* Toast Notification */}
      {showToast && (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          className="fixed bottom-4 left-4 z-50 bg-black/90 backdrop-blur-sm border border-[#7cff67]/30 rounded-lg px-4 py-2 shadow-2xl"
        >
          <p className="text-[#7cff67] text-sm">{toastMessage}</p>
        </motion.div>
      )}

      {/* Newsletter Success Toast */}
      {showNewsletterSuccess && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          className="fixed bottom-4 right-4 z-50 bg-gradient-to-r from-[#7cff67] to-[#5227FF] rounded-lg px-4 py-2 shadow-2xl"
        >
          <p className="text-black font-semibold text-sm">✓ Subscribed successfully!</p>
        </motion.div>
      )}

      <div className="container mx-auto px-4">
        {/* Header with Corner Effects */}
        <div className="relative text-center mb-12 group">
          {/* Corner Effects */}
          <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="inline-block mb-4">
            <div className="px-5 py-2 rounded-full bg-gradient-to-r from-[#7cff67]/20 to-[#5227FF]/20 border border-[#7cff67]/30 backdrop-blur-sm">
              <span className="text-[#7cff67] font-mono text-sm flex items-center gap-2">
                📝 blog.articles()
                <motion.div
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="w-1.5 h-1.5 rounded-full bg-[#7cff67]"
                />
              </span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#7cff67] to-[#5227FF] bg-clip-text text-transparent">
              Blog
            </span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Thoughts, tutorials, and insights on web development
          </p>
        </div>

        {/* Stats Bar with Corner Effects */}
        <div className="relative group mb-8 max-w-6xl mx-auto">
          <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <div className="flex flex-wrap justify-between items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-[#7cff67]/30">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }}>
                  <HiBookOpen className="text-[#7cff67]" />
                </motion.div>
                <span className="text-white text-sm">{posts.length} Articles</span>
              </div>
              <div className="flex items-center gap-2">
                <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }}>
                  <HiUserGroup className="text-[#7cff67]" />
                </motion.div>
                <span className="text-white text-sm">1.2k+ Readers</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }}>
                <HiBookmark className="text-[#7cff67]" />
              </motion.div>
              <span className="text-white text-sm">Reading List ({Object.keys(bookmarkedPosts).length})</span>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-md mx-auto mb-8">
          <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-[#7cff67]/30 text-white placeholder-gray-400 focus:outline-none focus:border-[#7cff67]"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#7cff67]"
            >
              <HiX />
            </button>
          )}
        </div>

        {/* Categories with Icon Effects */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-[#7cff67] to-[#5227FF] text-black font-bold shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:text-white border border-[#7cff67]/30'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Featured Posts with Corner Effects */}
        {featuredPosts.length > 0 && searchTerm === '' && selectedCategory === 'All' && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <HiStar className="text-[#7cff67] animate-pulse" />
              Featured Articles
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {featuredPosts.map((post) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  onHoverStart={() => setHoveredCard(post.id)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="relative group bg-gradient-to-r from-[#7cff67]/10 to-[#5227FF]/10 rounded-xl overflow-hidden border border-[#7cff67]/30 hover:border-[#7cff67] transition-all"
                >
                  {/* Corner Effects */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                  <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                  <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                  
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-[#7cff67] to-[#5227FF] text-black font-bold">
                      Featured
                    </span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="h-48 overflow-hidden">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
                        <span className="flex items-center gap-1"><HiCalendar /> {post.date}</span>
                        <span className="flex items-center gap-1"><HiClock /> {post.readTime}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#7cff67] transition">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.slice(0, 2).map((tag, i) => (
                          <span key={i} className="px-2 py-1 text-xs rounded-full bg-[#7cff67]/20 text-[#7cff67]">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-4">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => handleLike(post.id)}
                          className="flex items-center gap-1 text-sm text-gray-400 hover:text-[#7cff67] transition"
                        >
                          {likedPosts[post.id] ? '❤️' : '🤍'} {post.likes + (likedPosts[post.id] ? 1 : 0)}
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => handleBookmark(post.id)}
                          className="flex items-center gap-1 text-sm text-gray-400 hover:text-[#7cff67] transition"
                        >
                          <HiBookmark /> {bookmarkedPosts[post.id] ? 'Saved' : 'Save'}
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => handleShare(post.id)}
                          className="flex items-center gap-1 text-sm text-gray-400 hover:text-[#7cff67] transition"
                        >
                          📤 Share
                        </motion.button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Glow Effect on Hover */}
                  {hoveredCard === post.id && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#7cff67]/0 via-[#7cff67]/10 to-[#5227FF]/10 pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Trending Section */}
        {trendingPosts.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <HiFire className="text-orange-500 animate-pulse" />
              <h2 className="text-xl font-bold text-white">Trending Now</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {trendingPosts.slice(0, 4).map((post) => (
                <motion.div
                  key={post.id}
                  whileHover={{ scale: 1.02 }}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 text-sm text-orange-300"
                >
                  🔥 {post.title.length > 30 ? post.title.substring(0, 30) + '...' : post.title}
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6 max-w-6xl mx-auto">
          <p className="text-gray-400 text-sm">
            Showing <span className="text-[#7cff67]">{paginatedPosts.length}</span> of <span className="text-[#7cff67]">{filteredPosts.length}</span> articles
          </p>
        </div>

        {/* Blog Posts Grid with Card Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {paginatedPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onHoverStart={() => setHoveredCard(post.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative group bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-[#7cff67]/30 hover:border-[#7cff67] transition-all duration-300"
            >
              {/* Corner Effects */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity z-10" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity z-10" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity z-10" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity z-10" />
              
              {/* Trending Badge */}
              {post.trending && (
                <div className="absolute top-3 right-3 z-10">
                  <span className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold flex items-center gap-1">
                    <HiFire className="text-xs" /> Trending
                  </span>
                </div>
              )}
              
              <div className="h-48 overflow-hidden">
                <motion.img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
                  <span className="flex items-center gap-1"><HiCalendar /> {post.date}</span>
                  <span className="flex items-center gap-1"><HiClock /> {post.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#7cff67] transition line-clamp-1">
                  {post.title}
                </h3>
                <p className="text-gray-300 text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.slice(0, 2).map((tag, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="px-2 py-1 text-xs rounded-full bg-[#7cff67]/20 text-[#7cff67] cursor-pointer"
                    >
                      #{tag}
                    </motion.span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3 text-gray-400">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleLike(post.id)}
                      className="flex items-center gap-1 hover:text-[#7cff67] transition"
                    >
                      {likedPosts[post.id] ? '❤️' : '🤍'} {post.likes + (likedPosts[post.id] ? 1 : 0)}
                    </motion.button>
                    <span className="flex items-center gap-1">💬 {post.comments}</span>
                    <span className="flex items-center gap-1"><HiEye /> {post.views}</span>
                  </div>
                  <span className="text-[#7cff67]">{post.category}</span>
                </div>
                <div className="mt-3 pt-3 border-t border-[#7cff67]/20 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <motion.img
                      src={profilePic}
                      alt={post.author}
                      className="w-6 h-6 rounded-full"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="text-xs text-gray-400">{post.author}</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleBookmark(post.id)}
                    className="text-gray-400 hover:text-[#7cff67] transition"
                  >
                    <HiBookmark className={bookmarkedPosts[post.id] ? 'text-[#7cff67]' : ''} />
                  </motion.button>
                </div>
              </div>
              
              {/* Glow Effect on Hover */}
              {hoveredCard === post.id && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#7cff67]/0 via-[#7cff67]/5 to-[#5227FF]/5 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {paginatedPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">No articles found. Try a different search term.</p>
          </div>
        )}

        {/* Pagination with Corner Effects */}
        {totalPages > 1 && (
          <div className="relative group flex justify-center gap-2 mt-12">
            <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 rounded-lg bg-white/10 text-gray-400 hover:bg-[#7cff67]/20 hover:text-[#7cff67] transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </motion.button>
            {[...Array(totalPages)].map((_, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 rounded-lg transition ${
                  currentPage === i + 1
                    ? 'bg-gradient-to-r from-[#7cff67] to-[#5227FF] text-black font-bold'
                    : 'bg-white/10 text-gray-400 hover:bg-[#7cff67]/20 hover:text-[#7cff67]'
                }`}
              >
                {i + 1}
              </motion.button>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 rounded-lg bg-white/10 text-gray-400 hover:bg-[#7cff67]/20 hover:text-[#7cff67] transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </motion.button>
          </div>
        )}

        {/* Sidebar with Corner Effects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
          {/* Popular Tags */}
          <div className="relative group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-[#7cff67]/30 hover:border-[#7cff67] transition-all">
            <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }}>
                <HiTag className="text-[#7cff67]" />
              </motion.div>
              Popular Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'JavaScript', 'Node.js', 'Tailwind CSS', 'AI', 'MongoDB'].map((tag) => (
                <motion.button
                  key={tag}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSearchTerm(tag)}
                  className="px-3 py-1 text-sm rounded-full bg-[#7cff67]/10 text-[#7cff67] hover:bg-[#7cff67]/20 transition"
                >
                  #{tag}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Recent Posts */}
          <div className="relative group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-[#7cff67]/30 hover:border-[#7cff67] transition-all">
            <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }}>
                <HiClock className="text-[#7cff67]" />
              </motion.div>
              Recent Posts
            </h3>
            <div className="space-y-3">
              {posts.slice(0, 4).map((post) => (
                <motion.div
                  key={post.id}
                  whileHover={{ x: 5 }}
                  className="p-2 rounded-lg hover:bg-white/5 transition cursor-pointer"
                >
                  <h4 className="text-sm font-medium text-white line-clamp-1">{post.title}</h4>
                  <p className="text-xs text-gray-400 mt-1">{post.date}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="relative group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-[#7cff67]/30 hover:border-[#7cff67] transition-all">
            <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#7cff67] opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }}>
                <HiMail className="text-[#7cff67]" />
              </motion.div>
              Newsletter
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Get the latest posts delivered to your inbox.
            </p>
            <form onSubmit={handleNewsletterSubscribe} className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                value={emailForNewsletter}
                onChange={(e) => setEmailForNewsletter(e.target.value)}
                className="flex-1 px-3 py-2 text-sm rounded-lg bg-black/50 border border-[#7cff67]/30 text-white placeholder-gray-500 focus:outline-none focus:border-[#7cff67]"
                required
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-4 py-2 bg-gradient-to-r from-[#7cff67] to-[#5227FF] text-black text-sm font-semibold rounded-lg hover:shadow-lg transition"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-[#7cff67]/20 max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <HiBookOpen className="text-[#7cff67]" />
                <span className="text-white text-sm">{posts.length} Articles</span>
              </div>
            </div>
            <div className="flex gap-3">
              {[
                { icon: FaGithub, url: 'https://github.com/Basit-buriro', color: '#ffffff' },
                { icon: FaTwitter, url: '#', color: '#1DA1F2' },
                { icon: FaLinkedin, url: 'https://www.linkedin.com/in/abdul-basit-73449b37a/', color: '#0077b5' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-400 hover:text-[#7cff67] transition"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Blog;
import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Articles.css';

export default function Articles() {
  // Sample article data - replace with real data/articles later
  const [articles] = useState([
    {
      id: 1,
      title: "Advanced Techniques in Cerebral Aneurysm Management",
      category: "Aneurysms",
      author: "Dr. Reese",
      date: "Nov 15, 2024",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80"
    },
    {
      id: 2,
      title: "Understanding Arteriovenous Malformations",
      category: "AVMs",
      author: "Dr. Reese",
      date: "Nov 10, 2024",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
    },
    {
      id: 3,
      title: "Stroke Prevention: Latest Research and Guidelines",
      category: "Stroke",
      author: "Dr. Reese",
      date: "Nov 5, 2024",
      image: "https://images.unsplash.com/photo-1581594549595-35f6edc7b762?w=800&q=80"
    },
    {
      id: 4,
      title: "Endovascular Approaches to Carotid Stenosis",
      category: "Interventional",
      author: "Dr. Reese",
      date: "Oct 28, 2024",
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80"
    },
    {
      id: 5,
      title: "Imaging Protocols for Neurovascular Assessment",
      category: "Imaging",
      author: "Dr. Reese",
      date: "Oct 20, 2024",
      image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&q=80"
    },
    {
      id: 6,
      title: "Complications in Flow Diverter Procedures",
      category: "Interventional",
      author: "Dr. Reese",
      date: "Oct 15, 2024",
      image: "https://images.unsplash.com/photo-1582560475093-ba66accbc424?w=800&q=80"
    },
    {
      id: 7,
      title: "Pediatric Neurovascular Disorders: A Comprehensive Review",
      category: "Pediatric",
      author: "Dr. Reese",
      date: "Oct 8, 2024",
      image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=800&q=80"
    },
    {
      id: 8,
      title: "Venous Sinus Thrombosis: Diagnosis and Treatment",
      category: "Venous",
      author: "Dr. Reese",
      date: "Sep 30, 2024",
      image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&q=80"
    },
    {
      id: 9,
      title: "3D Printing Applications in Neurovascular Surgery",
      category: "Technology",
      author: "Dr. Reese",
      date: "Sep 25, 2024",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80"
    }
  ]);

  const categories = ["All", "Aneurysms", "AVMs", "Stroke", "Interventional", "Imaging", "Pediatric", "Venous", "Technology"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredArticles = selectedCategory === "All" 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="articles-container">
      <Navbar />
      {/* Header */}
      <div className="articles-header">
        <div className="container">
          <h1 className="articles-title">Research Articles</h1>
          <p className="articles-subtitle">
            Explore our comprehensive collection of peer-reviewed neurovascular research and clinical insights
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="category-filter-section">
        <div className="container">
          <div className="category-filter">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="articles-grid-section">
        <div className="container">
          <div className="articles-grid">
            {filteredArticles.map((article) => (
              <div key={article.id} className="article-card">
                <div className="article-image-wrapper">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="article-image"
                  />
                  <div className="article-category-badge">{article.category}</div>
                </div>
                <div className="article-content">
                  <h3 className="article-title">{article.title}</h3>
                  <div className="article-meta">
                    <span className="article-author">{article.author}</span>
                    <span className="article-date">{article.date}</span>
                  </div>
                  <button className="article-read-more">
                    Read Article
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
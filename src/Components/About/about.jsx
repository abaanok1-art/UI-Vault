import React from 'react';
import { FiLayers, FiCode, FiZap, FiCheckCircle, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import './about.css';

export default function About({ showToast }) {
  const stats = [
    { label: 'Production Components', value: '300+' },
    { label: 'Theme Accents', value: 'Neon Cyber' },
    { label: 'Framework Engine', value: 'React 19 + Vite' },
    { label: 'Dependencies Required', value: 'Zero (0)' }
  ];

  const features = [
    {
      title: 'Interactive Control Matrix',
      description: 'Adjust glow colors, frosted glass opacity, borders, and animations in real-time before copying code.'
    },
    {
      title: 'One-Click Pure JSX & CSS',
      description: 'No bloated wrappers or obscure configurations. Copy exact React JSX and clean CSS variables ready to run.'
    },
    {
      title: 'Cyber Dark Mode First',
      description: 'Crafted specifically for modern software dashboards, AI platforms, and web applications.'
    }
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('moiiizyyy@gmail.com');
    if (showToast) showToast('✨ Email copied: moiiizyyy@gmail.com');
  };

  return (
    <div className="about-page-container">
      <div className="about-header">
        <div className="about-badge">🚀 The Vision</div>
        <h1 className="about-title">About UI Stash</h1>
        <p className="about-subtitle">
          An open, developer-first component ecosystem engineered for crafting stunning, futuristic interfaces with glassmorphic depth and neon luminescence.
        </p>
      </div>

      {/* Stats Bar */}
      <div className="stats-grid">
        {stats.map((item, idx) => (
          <div key={idx} className="stat-card">
            <span className="stat-value">{item.value}</span>
            <span className="stat-label">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Feature Section */}
      <div className="about-section">
        <h2 className="section-heading">Why Choose UI Stash?</h2>
        <div className="features-grid">
          {features.map((feat, idx) => (
            <div key={idx} className="feature-card">
              <div className="card-header-row">
                <FiCheckCircle className="about-check" />
                <h3 className="feature-title">{feat.title}</h3>
              </div>
              <p className="feature-desc">{feat.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Developer / Creator Card */}
      <div className="about-creator-card">
        <div className="creator-left">
          <div className="creator-avatar">AM</div>
          <div className="creator-info">
            <div className="creator-role-tag">Lead Creator & Architect</div>
            <h3 className="creator-name">Abdul Moiz</h3>
            <p className="creator-bio">
              Passionate Frontend Engineer & UI/UX Specialist crafting high-performance glassmorphic design systems and modern web interfaces.
            </p>
          </div>
        </div>

        <div className="creator-actions">
          <a
            href="https://wa.me/923340004884?text=Hi%20Abdul%20Moiz,%20I'm%20contacting%20you%20from%20UI%20Stash!"
            target="_blank"
            rel="noopener noreferrer"
            className="creator-wa-btn"
          >
            <FaWhatsapp />
            <span>Chat on WhatsApp (+92 3340004884)</span>
          </a>

          <a
            href="mailto:moiiizyyy@gmail.com"
            className="creator-email-btn"
            onClick={handleCopyEmail}
          >
            <FiMail />
            <span>moiiizyyy@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import { FiCopy, FiCheck, FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import './templates.css';

export default function Templates({ showToast }) {
  const [activeTab, setActiveTab] = useState('hero');
  const [accentColor, setAccentColor] = useState('#06b6d4');
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (id, codeSnippet) => {
    navigator.clipboard.writeText(codeSnippet);
    setCopiedId(id);
    if (showToast) showToast('✨ Template code copied to clipboard!');
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="templates-vault-page">
      <div className="templates-header">
        <h1>Full Layout Templates Stash</h1>
        <p>Production-grade Hero Sections, Pricing Tables, and Footers with modern cyber glassmorphism.</p>
      </div>

      {/* Template Category Selector */}
      <div className="templates-nav-bar">
        <div className="template-type-tabs">
          <button
            className={`type-btn ${activeTab === 'hero' ? 'active' : ''}`}
            onClick={() => setActiveTab('hero')}
          >
            🚀 Hero Sections (3)
          </button>
          <button
            className={`type-btn ${activeTab === 'pricing' ? 'active' : ''}`}
            onClick={() => setActiveTab('pricing')}
          >
            💎 Pricing Tables (3)
          </button>
          <button
            className={`type-btn ${activeTab === 'footer' ? 'active' : ''}`}
            onClick={() => setActiveTab('footer')}
          >
            ⚓ Footers (3)
          </button>
        </div>

        <div className="color-control">
          <label>Accent:</label>
          <input
            type="color"
            value={accentColor}
            onChange={(e) => setAccentColor(e.target.value)}
            className="color-picker"
          />
        </div>
      </div>

      {/* HERO SECTIONS */}
      {activeTab === 'hero' && (
        <div className="templates-list">
          {/* Hero 1: Cyber SaaS */}
          <div className="template-preview-card">
            <div className="tpl-card-top">
              <span>Cyberpunk SaaS Hero</span>
              <button
                className="copy-btn"
                onClick={() => handleCopy('hero-1', `/* Cyberpunk SaaS Hero JSX & CSS */\n<section className="cyber-hero">...</section>`)}
              >
                {copiedId === 'hero-1' ? <><FiCheck /> Copied</> : <><FiCopy /> Copy Section Code</>}
              </button>
            </div>
            <div className="tpl-stage">
              <div className="cyber-hero-preview" style={{ '--tpl-accent': accentColor }}>
                <div className="hero-pill-badge" style={{ borderColor: accentColor, color: accentColor }}>
                  ⚡ Next-Gen AI Infrastructure 2.0
                </div>
                <h2 className="hero-main-heading">
                  Architect Tomorrow's Apps with <span className="highlight-text" style={{ color: accentColor }}>Cyber Glass</span> UI
                </h2>
                <p className="hero-subtext">
                  Deploy ultra-fast dark mode components engineered with luminous neon highlights, backdrop blur vectors, and pure CSS variables.
                </p>
                <div className="hero-btn-row">
                  <button className="primary-hero-btn" style={{ background: accentColor, boxShadow: `0 0 20px ${accentColor}66` }}>
                    Get Started Free <FiArrowRight />
                  </button>
                  <button className="secondary-hero-btn" style={{ borderColor: accentColor }}>
                    Explore Documentation
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Hero 2: Minimal Glass */}
          <div className="template-preview-card">
            <div className="tpl-card-top">
              <span>Minimalist Glassmorphic Hero</span>
              <button
                className="copy-btn"
                onClick={() => handleCopy('hero-2', `/* Minimalist Glassmorphic Hero JSX */\n<section className="minimal-glass-hero">...</section>`)}
              >
                {copiedId === 'hero-2' ? <><FiCheck /> Copied</> : <><FiCopy /> Copy Section Code</>}
              </button>
            </div>
            <div className="tpl-stage">
              <div className="minimal-hero-preview glass-panel" style={{ borderColor: `${accentColor}44` }}>
                <h2 className="minimal-title">Crafted for Exceptional User Experiences</h2>
                <p className="minimal-desc">Elevate your digital products with meticulously balanced typography and frosted glass surfaces.</p>
                <div className="minimal-cta">
                  <input type="email" placeholder="Enter your work email..." className="minimal-input" />
                  <button className="minimal-btn" style={{ background: accentColor }}>Join Beta</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PRICING TABLES */}
      {activeTab === 'pricing' && (
        <div className="templates-list">
          <div className="template-preview-card">
            <div className="tpl-card-top">
              <span>3-Tier Cyber Pricing Matrix</span>
              <button
                className="copy-btn"
                onClick={() => handleCopy('pricing-1', `/* Pricing Matrix JSX */\n<div className="pricing-matrix">...</div>`)}
              >
                {copiedId === 'pricing-1' ? <><FiCheck /> Copied</> : <><FiCopy /> Copy Section Code</>}
              </button>
            </div>
            <div className="tpl-stage">
              <div className="pricing-grid">
                {/* Starter */}
                <div className="pricing-card">
                  <div className="plan-name">Starter</div>
                  <div className="plan-price">$0 <span>/ forever</span></div>
                  <p className="plan-desc">For hobbyists and individual developers starting out.</p>
                  <ul className="plan-features">
                    <li><FiCheckCircle style={{ color: accentColor }} /> 50+ Glass Components</li>
                    <li><FiCheckCircle style={{ color: accentColor }} /> Community Discord</li>
                    <li><FiCheckCircle style={{ color: accentColor }} /> Standard CSS Tokens</li>
                  </ul>
                  <button className="plan-btn" style={{ borderColor: accentColor }}>Get Started</button>
                </div>

                {/* Pro (Highlighted) */}
                <div className="pricing-card featured" style={{ borderColor: accentColor, boxShadow: `0 0 25px ${accentColor}33` }}>
                  <div className="featured-badge" style={{ background: accentColor }}>MOST POPULAR</div>
                  <div className="plan-name">Developer Pro</div>
                  <div className="plan-price">$29 <span>/ month</span></div>
                  <p className="plan-desc">Full access to 300+ components, templates, and Figma files.</p>
                  <ul className="plan-features">
                    <li><FiCheckCircle style={{ color: accentColor }} /> All 300+ UI Components</li>
                    <li><FiCheckCircle style={{ color: accentColor }} /> 15+ Complete Templates</li>
                    <li><FiCheckCircle style={{ color: accentColor }} /> Priority Support & Updates</li>
                    <li><FiCheckCircle style={{ color: accentColor }} /> Commercial License</li>
                  </ul>
                  <button className="plan-btn featured" style={{ background: accentColor }}>Upgrade to Pro</button>
                </div>

                {/* Enterprise */}
                <div className="pricing-card">
                  <div className="plan-name">Enterprise</div>
                  <div className="plan-price">$99 <span>/ month</span></div>
                  <p className="plan-desc">Dedicated infrastructure and custom component development.</p>
                  <ul className="plan-features">
                    <li><FiCheckCircle style={{ color: accentColor }} /> Unlimited Seats</li>
                    <li><FiCheckCircle style={{ color: accentColor }} /> Custom Tailored Designs</li>
                    <li><FiCheckCircle style={{ color: accentColor }} /> Dedicated Slack Channel</li>
                  </ul>
                  <button className="plan-btn" style={{ borderColor: accentColor }}>Contact Sales</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTERS */}
      {activeTab === 'footer' && (
        <div className="templates-list">
          <div className="template-preview-card">
            <div className="tpl-card-top">
              <span>Cyber Glass Multi-Column Footer</span>
              <button
                className="copy-btn"
                onClick={() => handleCopy('footer-1', `/* Cyber Footer JSX */\n<footer className="vault-footer">...</footer>`)}
              >
                {copiedId === 'footer-1' ? <><FiCheck /> Copied</> : <><FiCopy /> Copy Section Code</>}
              </button>
            </div>
            <div className="tpl-stage">
              <footer className="footer-preview glass-panel" style={{ borderColor: `${accentColor}33` }}>
                <div className="footer-cols">
                  <div className="footer-brand">
                    <h3 style={{ color: accentColor }}>UI-STASH</h3>
                    <p>Next-generation dark mode & glassmorphism React components for modern developers.</p>
                  </div>
                  <div className="footer-links-col">
                    <h4>Components</h4>
                    <a href="#buttons">Buttons</a>
                    <a href="#cards">Cards</a>
                    <a href="#accordions">Accordions</a>
                    <a href="#inputs">Inputs</a>
                  </div>
                  <div className="footer-links-col">
                    <h4>Resources</h4>
                    <a href="#docs">Documentation</a>
                    <a href="#theming">Theming System</a>
                    <a href="#templates">Templates</a>
                  </div>
                  <div className="footer-links-col">
                    <h4>Stay Updated</h4>
                    <p>Subscribe for newly added component releases.</p>
                    <div className="footer-sub-form">
                      <input type="email" placeholder="email@domain.com" />
                      <button style={{ background: accentColor }}>Join</button>
                    </div>
                  </div>
                </div>
                <div className="footer-bottom-row">
                  <span>© 2026 UI Stash. All rights reserved.</span>
                  <span>Built with React & Vite</span>
                </div>
              </footer>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

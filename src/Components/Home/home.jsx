import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCopy, FiCheck, FiLayers, FiCode, FiZap, FiSliders, FiShield } from 'react-icons/fi';
import './home.css';

export default function Home({ showToast }) {
  const [accentColor, setAccentColor] = useState('#06b6d4');
  const [btnText, setBtnText] = useState('Interactive Cyber Button');
  const [copiedCSS, setCopiedCSS] = useState(false);
  const [activeTab, setActiveTab] = useState('button');
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const cssSnippet = `/* UI Stash Glassmorphism Foundation */
:root {
  --vault-glass-bg: rgba(15, 23, 42, 0.75);
  --vault-border: rgba(6, 182, 212, 0.3);
  --vault-glow: 0 0 20px rgba(6, 182, 212, 0.35);
}

.vault-glass-card {
  background: var(--vault-glass-bg);
  border: 1px solid var(--vault-border);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-radius: 14px;
  box-shadow: var(--vault-glow);
  color: #f8fafc;
}`;

  const handleCopyCustomCSS = () => {
    const customCSS = `.custom-cyber-btn {\n  background: rgba(15, 23, 42, 0.85);\n  color: #ffffff;\n  border: 1px solid ${accentColor};\n  box-shadow: 0 0 16px ${accentColor}80;\n  padding: 12px 24px;\n  border-radius: 10px;\n  backdrop-filter: blur(12px);\n  cursor: pointer;\n  transition: all 0.25s ease;\n}\n.custom-cyber-btn:hover {\n  box-shadow: 0 0 25px ${accentColor};\n  transform: translateY(-2px);\n}`;
    navigator.clipboard.writeText(customCSS);
    setCopiedCSS(true);
    if (showToast) showToast('✨ Customizer CSS copied to clipboard!');
    setTimeout(() => setCopiedCSS(false), 2000);
  };

  const handleCopySnippet = () => {
    navigator.clipboard.writeText(cssSnippet);
    setCopiedSnippet(true);
    if (showToast) showToast('✨ Foundation CSS copied to clipboard!');
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <div className="home-container-root">
      {/* Hero Section */}
      <section className="home-hero-section">
        <div className="hero-badge-pill">
          <span className="badge-glow-dot"></span>
          <span>⚡ Next-Gen Cyber Glassmorphic UI Suite</span>
        </div>

        <h1 className="home-hero-heading">
          Build High-Performance React Apps with <span className="highlight-text">Luminous Glass</span>
        </h1>

        <p className="home-hero-description">
          A modern stash of 300+ copy-paste React components styled with dark frosted glass, neon cyan glow vectors, and zero external framework bloat.
        </p>

        <div className="home-hero-cta-group">
          <Link to="/buttons" className="hero-primary-link-btn">
            <span>Explore 300+ Components</span>
            <FiArrowRight />
          </Link>
          <Link to="/theming" className="hero-secondary-link-btn">
            <FiSliders />
            <span>Customize Theme</span>
          </Link>
        </div>

        {/* Quick Component Highlights Bar */}
        <div className="quick-category-strip">
          <Link to="/buttons" className="quick-tag">Buttons (60+)</Link>
          <Link to="/cards" className="quick-tag">Cards (40+)</Link>
          <Link to="/accordions" className="quick-tag">Accordions (50+)</Link>
          <Link to="/inputfields" className="quick-tag">Input Fields (60+)</Link>
          <Link to="/loaders&spinners" className="quick-tag">Loaders (32+)</Link>
          <Link to="/tabs" className="quick-tag">Tabs (30+)</Link>
          <Link to="/dropdowns" className="quick-tag">Dropdowns (30+)</Link>
          <Link to="/Navbars" className="quick-tag">Navbars (50+)</Link>
        </div>
      </section>

      {/* Interactive Sandbox Showcase */}
      <section className="home-sandbox-section">
        <div className="section-title-wrap">
          <h2 className="section-title">Interactive Component Sandbox</h2>
          <p className="section-subtitle">Test reactive component states and copy clean JSX with one click.</p>
        </div>

        <div className="sandbox-panel-card">
          <div className="sandbox-tab-header">
            <button
              className={`sandbox-tab-btn ${activeTab === 'button' ? 'active' : ''}`}
              onClick={() => setActiveTab('button')}
            >
              Interactive Button
            </button>
            <button
              className={`sandbox-tab-btn ${activeTab === 'card' ? 'active' : ''}`}
              onClick={() => setActiveTab('card')}
            >
              Glassmorphic Card
            </button>
            <button
              className={`sandbox-tab-btn ${activeTab === 'input' ? 'active' : ''}`}
              onClick={() => setActiveTab('input')}
            >
              Cyber Glow Input
            </button>
          </div>

          <div className="sandbox-stage-view">
            {activeTab === 'button' && (
              <div className="demo-stage-inner">
                <button
                  className="interactive-sandbox-btn"
                  style={{
                    borderColor: accentColor,
                    boxShadow: `0 0 20px ${accentColor}66`
                  }}
                >
                  {btnText}
                </button>
              </div>
            )}
            {activeTab === 'card' && (
              <div className="demo-stage-inner">
                <div
                  className="interactive-sandbox-card"
                  style={{ borderColor: `${accentColor}80` }}
                >
                  <span className="card-tag" style={{ color: accentColor }}>Cyber Pro</span>
                  <h3>Real-Time Glass Card</h3>
                  <p>Drop-in React component styled with backdrop blur layers and reactive borders.</p>
                  <button className="card-sample-btn" style={{ background: accentColor }}>
                    Explore Component
                  </button>
                </div>
              </div>
            )}
            {activeTab === 'input' && (
              <div className="demo-stage-inner">
                <div className="interactive-sandbox-input-box">
                  <input
                    type="text"
                    placeholder="Search database or enter command..."
                    className="sandbox-text-input"
                    style={{ borderColor: accentColor }}
                  />
                  <button className="sandbox-input-action-btn" style={{ background: accentColor }}>
                    Search
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Live Customizer Playground */}
      <section className="home-customizer-section">
        <div className="section-title-wrap">
          <h2 className="section-title">Live Design Token Playground</h2>
          <p className="section-subtitle">Tweak color tokens in real-time and export production CSS variables.</p>
        </div>

        <div className="customizer-playground-grid">
          <div className="playground-controls-box">
            <div className="control-item">
              <label>Button Display Text:</label>
              <input
                type="text"
                value={btnText}
                onChange={(e) => setBtnText(e.target.value)}
                className="playground-input"
              />
            </div>

            <div className="control-item">
              <label>Glow Accent Preset:</label>
              <div className="swatches-row">
                {[
                  { color: '#06b6d4', name: 'Cyan' },
                  { color: '#3b82f6', name: 'Blue' },
                  { color: '#a855f7', name: 'Purple' },
                  { color: '#ec4899', name: 'Pink' },
                  { color: '#10b981', name: 'Emerald' }
                ].map((s) => (
                  <button
                    key={s.color}
                    className={`color-swatch-circle ${accentColor === s.color ? 'active' : ''}`}
                    style={{ background: s.color }}
                    onClick={() => setAccentColor(s.color)}
                    title={s.name}
                  />
                ))}
              </div>
            </div>

            <button className="export-css-btn" onClick={handleCopyCustomCSS}>
              {copiedCSS ? <><FiCheck /> Copied Custom CSS!</> : <><FiCopy /> Copy Generated CSS</>}
            </button>
          </div>

          <div className="playground-stage-preview">
            <button
              className="playground-live-btn"
              style={{
                borderColor: accentColor,
                boxShadow: `0 0 25px ${accentColor}80`,
                color: '#ffffff'
              }}
            >
              {btnText}
            </button>
          </div>
        </div>
      </section>

      {/* Code Snippet Box */}
      <section className="home-snippet-section">
        <div className="snippet-card-wrap">
          <div className="snippet-top-bar">
            <span>Glassmorphic Foundation CSS</span>
            <button className="snippet-copy-btn" onClick={handleCopySnippet}>
              {copiedSnippet ? <><FiCheck /> Copied!</> : <><FiCopy /> Copy CSS</>}
            </button>
          </div>
          <pre className="snippet-code-content">
            <code>{cssSnippet}</code>
          </pre>
        </div>
      </section>

      {/* Feature Highlights Grid */}
      <section className="home-features-section">
        <div className="features-showcase-grid">
          <div className="feature-tile">
            <div className="feature-icon-badge"><FiZap /></div>
            <h3>Direct Copy & Paste</h3>
            <p>Zero dependencies or complex npm setups. Just grab clean JSX & CSS snippets and paste directly.</p>
          </div>
          <div className="feature-tile">
            <div className="feature-icon-badge"><FiLayers /></div>
            <h3>300+ Cyber Variations</h3>
            <p>From glass buttons and glow cards to multi-step templates and responsive cyber navbars.</p>
          </div>
          <div className="feature-tile">
            <div className="feature-icon-badge"><FiShield /></div>
            <h3>Production Tested</h3>
            <p>Engineered for speed, full cross-browser accessibility, smooth 60fps animations, and mobile responsiveness.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
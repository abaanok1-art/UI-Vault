import React, { useState } from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi';
import './navbarpage.css';

export default function NavbarVault({ showToast }) {
  const [config, setConfig] = useState({
    logoText: 'CyberVault',
    accentColor: '#06b6d4',
    linkCount: 4,
    showCTA: true,
    showSearch: true,
    radius: 12,
    blur: 16,
    filter: 'all'
  });

  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (id, code) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    if (showToast) showToast('✨ Navbar code copied to clipboard!');
    setTimeout(() => setCopiedId(null), 2000);
  };

  const navbarItems = Array.from({ length: 50 }, (_, index) => {
    const id = index + 1;
    const categories = ['glassmorphic', 'floating', 'minimal', 'neon', 'centered', 'split'];
    const category = categories[index % categories.length];

    return {
      id,
      title: `${category.charAt(0).toUpperCase() + category.slice(1)} Navbar #${id}`,
      category
    };
  });

  const filteredItems = config.filter === 'all'
    ? navbarItems
    : navbarItems.filter(item => item.category === config.filter);

  const linksList = ['Home', 'Products', 'Pricing', 'Docs', 'About', 'Contact'].slice(0, config.linkCount);

  return (
    <div className="navbar-vault-container">
      {/* Header Section */}
      <div className="navbar-vault-header">
        <h1>Navbar Vault (50+ Styles)</h1>
        <p>Real-time matrix for responsive, frosted glass, and floating cyber navigation bars.</p>
      </div>

      {/* Customizer Panel */}
      <div className="navbar-vault-customizer" style={{ borderColor: config.accentColor }}>
        <div className="customizer-grid">
          <div className="control-group">
            <label>Logo Text:</label>
            <input 
              type="text" 
              value={config.logoText} 
              onChange={(e) => setConfig({ ...config, logoText: e.target.value })} 
              className="text-input"
            />
          </div>

          <div className="control-group">
            <label>Glow Accent:</label>
            <input 
              type="color" 
              value={config.accentColor} 
              onChange={(e) => setConfig({ ...config, accentColor: e.target.value })} 
              className="color-picker"
            />
          </div>

          <div className="control-group">
            <label>Nav Links: {config.linkCount}</label>
            <input 
              type="range" 
              min="2" 
              max="6" 
              value={config.linkCount} 
              onChange={(e) => setConfig({ ...config, linkCount: Number(e.target.value) })} 
            />
          </div>

          <div className="control-group">
            <label>Radius: {config.radius}px</label>
            <input 
              type="range" 
              min="0" 
              max="30" 
              value={config.radius} 
              onChange={(e) => setConfig({ ...config, radius: Number(e.target.value) })} 
            />
          </div>

          <div className="control-group">
            <label>Glass Blur: {config.blur}px</label>
            <input 
              type="range" 
              min="0" 
              max="30" 
              value={config.blur} 
              onChange={(e) => setConfig({ ...config, blur: Number(e.target.value) })} 
            />
          </div>

          <div className="control-group checkbox-group">
            <label>
              <input 
                type="checkbox" 
                checked={config.showCTA} 
                onChange={(e) => setConfig({ ...config, showCTA: e.target.checked })} 
              />
              Show CTA Button
            </label>
          </div>

          <div className="control-group checkbox-group">
            <label>
              <input 
                type="checkbox" 
                checked={config.showSearch} 
                onChange={(e) => setConfig({ ...config, showSearch: e.target.checked })} 
              />
              Show Search Bar
            </label>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="filter-tabs">
          {['all', 'glassmorphic', 'floating', 'minimal', 'neon', 'centered', 'split'].map((type) => (
            <button
              key={type}
              className={`filter-btn ${config.filter === type ? 'active' : ''}`}
              style={{
                borderColor: config.filter === type ? config.accentColor : 'rgba(6, 182, 212, 0.2)',
                boxShadow: config.filter === type ? `0 0 10px ${config.accentColor}40` : 'none'
              }}
              onClick={() => setConfig({ ...config, filter: type })}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Navbars Grid */}
      <div className="navbars-grid">
        {filteredItems.map((item) => {
          const codeSnippet = `/* JSX */
<nav className="navbar-${item.category}">
  <div className="logo">${config.logoText}</div>
  <ul className="nav-links">
    ${linksList.map(link => `<li><a href="#${link.toLowerCase()}">${link}</a></li>`).join('\n    ')}
  </ul>
  ${config.showCTA ? `<button className="cta-btn">Get Started</button>` : ''}
</nav>`;

          return (
            <div key={item.id} className="navbar-card">
              <div className="card-header">
                <span>{item.title}</span>
                <button 
                  className="copy-btn"
                  onClick={() => handleCopy(item.id, codeSnippet)}
                  style={{ color: config.accentColor }}
                >
                  {copiedId === item.id ? <><FiCheck /> Copied</> : <><FiCopy /> Copy Code</>}
                </button>
              </div>

              <div className="card-preview">
                <nav 
                  className={`preview-nav nav-${item.category}`}
                  style={{
                    borderRadius: `${config.radius}px`,
                    backdropFilter: `blur(${config.blur}px)`,
                    WebkitBackdropFilter: `blur(${config.blur}px)`,
                    borderColor: item.category === 'neon' ? config.accentColor : 'rgba(6, 182, 212, 0.25)',
                    boxShadow: item.category === 'neon' ? `0 0 20px ${config.accentColor}44` : 'none'
                  }}
                >
                  {/* Logo */}
                  <div className="nav-logo" style={{ color: config.accentColor }}>
                    {config.logoText}
                  </div>

                  {/* Nav Links */}
                  <ul className="nav-links">
                    {linksList.map((link, idx) => (
                      <li key={idx}>
                        <a href="#preview" onClick={(e) => e.preventDefault()}>{link}</a>
                      </li>
                    ))}
                  </ul>

                  {/* Actions */}
                  <div className="nav-actions">
                    {config.showSearch && (
                      <input 
                        type="text" 
                        placeholder="Search..." 
                        className="nav-search-input"
                        style={{ borderColor: `${config.accentColor}66` }}
                      />
                    )}
                    {config.showCTA && (
                      <button 
                        className="nav-cta-btn"
                        style={{ backgroundColor: config.accentColor, boxShadow: `0 0 12px ${config.accentColor}66` }}
                      >
                        Get Started
                      </button>
                    )}
                  </div>
                </nav>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
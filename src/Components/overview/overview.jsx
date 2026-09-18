import React, { useState, useEffect } from 'react';
import { FiCopy, FiCheck, FiStar, FiZap, FiLayers, FiCode, FiSliders } from 'react-icons/fi';
import './overview.css';

export default function Overview({ showToast }) {
  const [copied, setCopied] = useState(false);
  const [stars, setStars] = useState(148);
  const [isStarred, setIsStarred] = useState(false);

  useEffect(() => {
    const savedStar = localStorage.getItem('uiVault_starred');
    if (savedStar === 'true') {
      setIsStarred(true);
      setStars((prev) => prev + 1);
    }
  }, []);

  const handleCopyCode = () => {
    const componentCode = `/* Glassmorphic Cyber Button */
.vault-cyber-btn {
  background: rgba(15, 23, 42, 0.75);
  color: #f8fafc;
  border: 1px solid rgba(6, 182, 212, 0.4);
  padding: 12px 24px;
  border-radius: 10px;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  cursor: pointer;
  font-weight: 600;
  transition: all 0.25s ease;
}

.vault-cyber-btn:hover {
  background: rgba(6, 182, 212, 0.2);
  color: #00f2fe;
  border-color: #06b6d4;
  box-shadow: 0 0 20px rgba(6, 182, 212, 0.5);
  transform: translateY(-2px);
}`;

    navigator.clipboard.writeText(componentCode);
    setCopied(true);
    if (showToast) showToast('✨ Sample code copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleStar = () => {
    if (isStarred) {
      setStars(stars - 1);
      setIsStarred(false);
      localStorage.setItem('uiVault_starred', 'false');
      if (showToast) showToast('⭐ Star removed.');
    } else {
      setStars(stars + 1);
      setIsStarred(true);
      localStorage.setItem('uiVault_starred', 'true');
      if (showToast) showToast('🌟 Thank you for starring UI Vault!');
    }
  };

  return (
    <div className="overview-page-root">
      <div className="overview-hero">
        <div className="overview-badge">📖 Getting Started Guide</div>
        <h1 className="hero-title">Welcome to UI Vault</h1>
        <p className="hero-subtitle">
          UI Vault is an open-source library of dark-mode glassmorphic React components.
          Zero dependencies, pure CSS variables, and complete design ownership.
        </p>

        {/* Action Buttons */}
        <div className="hero-actions">
          <button className="interactive-action-btn copy-action-btn" onClick={handleCopyCode}>
            <FiCopy />
            <span>Copy Base Component</span>
            <span className="action-badge">{copied ? 'Copied! ✓' : 'Copy'}</span>
          </button>

          <button
            className={`interactive-action-btn star-action-btn ${isStarred ? 'starred' : ''}`}
            onClick={handleStar}
          >
            <FiStar className={isStarred ? 'star-fill' : ''} />
            <span>Star on GitHub</span>
            <span className="action-badge">{stars}</span>
          </button>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="overview-features-grid">
        <div className="overview-card">
          <div className="card-icon-wrap"><FiZap /></div>
          <h3>⚡ Zero External Packages</h3>
          <p>Everything runs on pure React JSX and standard CSS variables. No bulky node module overhead.</p>
        </div>

        <div className="overview-card">
          <div className="card-icon-wrap"><FiLayers /></div>
          <h3>🎨 300+ Cyber Presets</h3>
          <p>Explore buttons, cards, accordions, inputs, loaders, navbars, tabs, dropdowns, and full templates.</p>
        </div>

        <div className="overview-card">
          <div className="card-icon-wrap"><FiSliders /></div>
          <h3>🎛️ Live Visual Customizers</h3>
          <p>Tweak glow colors, border radius, padding, blurs, and speeds live before grabbing the snippet.</p>
        </div>

        <div className="overview-card">
          <div className="card-icon-wrap"><FiCode /></div>
          <h3>💻 Full Source Code Ownership</h3>
          <p>Take the code and adjust the tokens directly in your project stylesheet to match your brand.</p>
        </div>
      </div>
    </div>
  );
}
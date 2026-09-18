import React, { useState } from 'react';
import { FiCopy, FiCheck, FiSliders } from 'react-icons/fi';
import './themeing.css';

export default function Theming({ showToast }) {
  const [copied, setCopied] = useState(false);
  const [activePreset, setActivePreset] = useState('cyan');
  const [customCyan, setCustomCyan] = useState('#06b6d4');
  const [customGlow, setCustomGlow] = useState('rgba(6, 182, 212, 0.4)');
  const [customBlur, setCustomBlur] = useState(14);

  const getCssVariables = () => `:root {
  /* Brand Glow Accents */
  --vault-accent: ${activePreset === 'cyan' ? customCyan : activePreset === 'purple' ? '#a855f7' : '#10b981'};
  --vault-glow: ${activePreset === 'cyan' ? customGlow : activePreset === 'purple' ? 'rgba(168, 85, 247, 0.4)' : 'rgba(16, 185, 129, 0.4)'};

  /* Glassmorphism Backgrounds */
  --vault-glass-bg: rgba(15, 23, 42, 0.75);
  --vault-glass-border: rgba(6, 182, 212, 0.25);
  --vault-blur: blur(${customBlur}px);

  /* Typography */
  --vault-text-primary: #f8fafc;
  --vault-text-secondary: #94a3b8;
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(getCssVariables());
    setCopied(true);
    if (showToast) showToast('✨ Theme tokens copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="theming-container">
      <div className="theming-header">
        <h1 className="theming-title">Theming & CSS Variables</h1>
        <p className="theming-subtitle">
          UI Stash is powered by native CSS design tokens. Paste these variables into your `index.css` to customize accent glow, glass blurs, and surface levels across all components.
        </p>
      </div>

      {/* Code Snippet Box */}
      <div className="code-box">
        <div className="code-box-header">
          <span>Global CSS Variables (:root)</span>
          <button className="copy-code-btn" onClick={handleCopy}>
            {copied ? <><FiCheck /> Copied!</> : <><FiCopy /> Copy CSS Variables</>}
          </button>
        </div>
        <pre className="code-box-body">
          <code>{getCssVariables()}</code>
        </pre>
      </div>

      {/* Preset Showcase */}
      <div className="theme-presets-section">
        <h2>Live Preset Explorer</h2>
        <p>Switch between vibrant cyber presets to preview reactive token styling:</p>

        <div className="preset-buttons">
          <button 
            className={`preset-btn cyan ${activePreset === 'cyan' ? 'active' : ''}`}
            onClick={() => setActivePreset('cyan')}
          >
            ⚡ Neon Cyan
          </button>
          <button 
            className={`preset-btn purple ${activePreset === 'purple' ? 'active' : ''}`}
            onClick={() => setActivePreset('purple')}
          >
            🔮 Cyber Purple
          </button>
          <button 
            className={`preset-btn emerald ${activePreset === 'emerald' ? 'active' : ''}`}
            onClick={() => setActivePreset('emerald')}
          >
            💎 Emerald Matrix
          </button>
        </div>

        {/* Live Preview Card */}
        <div className={`preview-glass-card theme-${activePreset}`}>
          <div className="preview-badge">Token Preview</div>
          <h3>Dynamic Theme Card</h3>
          <p>This component instantly reacts to your selected CSS token variables.</p>
          <button className="preview-action-btn">Interactive Trigger</button>
        </div>
      </div>
    </div>
  );
}
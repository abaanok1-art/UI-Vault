import React, { useState } from 'react';
import { FiCopy, FiCheck, FiBookOpen, FiTerminal, FiLayers } from 'react-icons/fi';
import './docs.css';

export default function Docs({ showToast }) {
  const [activeSection, setActiveSection] = useState('getting-started');
  const [copiedSection, setCopiedSection] = useState(null);

  const handleCopy = (secKey, text) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(secKey);
    if (showToast) showToast('✨ Code snippet copied to clipboard!');
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const importSnippet = `import React from "react";
import "./button.css";

export const CyberButton = () => {
  return (
    <button className="vault-cyber-btn">
      Launch Mission
    </button>
  );
};`;

  const cssThemeSnippet = `:root {
  --vault-bg: #070b14;
  --vault-accent: #06b6d4;
  --vault-glow: #00f2fe;
  --vault-card-bg: rgba(15, 23, 42, 0.75);
  --vault-blur: blur(14px);
}`;

  return (
    <div className="docs-page-container">
      {/* Docs Inner Sidebar */}
      <aside className="docs-sidebar">
        <h3 className="docs-sidebar-title">
          <FiBookOpen className="docs-icon" />
          <span>Documentation</span>
        </h3>
        <nav className="docs-nav">
          <button 
            className={`docs-nav-item ${activeSection === 'getting-started' ? 'active' : ''}`}
            onClick={() => setActiveSection('getting-started')}
          >
            Getting Started
          </button>
          <button 
            className={`docs-nav-item ${activeSection === 'usage' ? 'active' : ''}`}
            onClick={() => setActiveSection('usage')}
          >
            Component Integration
          </button>
          <button 
            className={`docs-nav-item ${activeSection === 'customization' ? 'active' : ''}`}
            onClick={() => setActiveSection('customization')}
          >
            CSS Tokens & Themes
          </button>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="docs-content">
        {activeSection === 'getting-started' && (
          <section className="docs-section">
            <h1 className="docs-heading">Getting Started with UI Stash</h1>
            <p className="docs-lead">
              UI Stash is a modern, modular component collection providing zero-dependency React components styled with dark glassmorphism and cyber neon aesthetics.
            </p>
            <div className="docs-card">
              <h3>⚡ 3 Simple Steps to Build:</h3>
              <ol className="docs-steps-list">
                <li>
                  <strong>Browse & Preview:</strong> Select components from the sidebar (Buttons, Cards, Loaders, Tabs, etc.).
                </li>
                <li>
                  <strong>Live Customization:</strong> Adjust colors, radius, padding, and blur using the interactive sliders.
                </li>
                <li>
                  <strong>Copy & Paste:</strong> Click <strong>Copy Code</strong> to grab the pure JSX and CSS directly into your project.
                </li>
              </ol>
            </div>
          </section>
        )}

        {activeSection === 'usage' && (
          <section className="docs-section">
            <h1 className="docs-heading">Component Integration</h1>
            <p className="docs-lead">Copy component JSX and styling definitions straight into your application repository.</p>
            
            <div className="docs-code-box">
              <div className="code-box-top">
                <span className="code-label"><FiTerminal /> React JSX Component Example</span>
                <button 
                  className="code-copy-btn"
                  onClick={() => handleCopy('import', importSnippet)}
                >
                  {copiedSection === 'import' ? <><FiCheck /> Copied</> : <><FiCopy /> Copy Code</>}
                </button>
              </div>
              <pre><code>{importSnippet}</code></pre>
            </div>
          </section>
        )}

        {activeSection === 'customization' && (
          <section className="docs-section">
            <h1 className="docs-heading">CSS Design Tokens</h1>
            <p className="docs-lead">Global variables to drop into your `index.css` or root stylesheet.</p>
            
            <div className="docs-code-box">
              <div className="code-box-top">
                <span className="code-label"><FiLayers /> Global :root Tokens</span>
                <button 
                  className="code-copy-btn"
                  onClick={() => handleCopy('theme', cssThemeSnippet)}
                >
                  {copiedSection === 'theme' ? <><FiCheck /> Copied</> : <><FiCopy /> Copy CSS</>}
                </button>
              </div>
              <pre><code>{cssThemeSnippet}</code></pre>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
import React, { useState } from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi';
import './loaders&spinners.css';

export default function Loaders({ showToast }) {
  const [config, setConfig] = useState({
    primaryColor: '#06b6d4',
    secondaryColor: '#3b82f6',
    speed: 1,
    size: 44,
    filter: 'all'
  });

  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (id, code) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    if (showToast) showToast('✨ Loader code copied to clipboard!');
    setTimeout(() => setCopiedId(null), 2000);
  };

  const loaderItems = Array.from({ length: 32 }, (_, index) => {
    const id = index + 1;
    const categories = ['spinners', 'pulse', 'dots', 'bars', 'orbit', 'glass'];
    const category = categories[index % categories.length];

    return {
      id,
      title: `${category.charAt(0).toUpperCase() + category.slice(1)} Loader #${id}`,
      category
    };
  });

  const filteredItems = config.filter === 'all'
    ? loaderItems
    : loaderItems.filter(item => item.category === config.filter);

  return (
    <div className="loaders-container">
      {/* Header Section */}
      <div className="loaders-header">
        <h1>Loaders & Spinners Vault (30+ Styles)</h1>
        <p>Real-time matrix for glowing cyber spinners, pulsing nodes, orbit rings, and wave bars.</p>
      </div>

      {/* Customizer Panel */}
      <div className="loaders-customizer" style={{ borderColor: config.primaryColor }}>
        <div className="customizer-grid">
          <div className="control-group">
            <label>Primary Color:</label>
            <input 
              type="color" 
              value={config.primaryColor} 
              onChange={(e) => setConfig({ ...config, primaryColor: e.target.value })} 
              className="color-picker"
            />
          </div>

          <div className="control-group">
            <label>Glow Accent:</label>
            <input 
              type="color" 
              value={config.secondaryColor} 
              onChange={(e) => setConfig({ ...config, secondaryColor: e.target.value })} 
              className="color-picker"
            />
          </div>

          <div className="control-group">
            <label>Speed: {config.speed}s</label>
            <input 
              type="range" 
              min="0.3" 
              max="3" 
              step="0.1" 
              value={config.speed} 
              onChange={(e) => setConfig({ ...config, speed: Number(e.target.value) })} 
            />
          </div>

          <div className="control-group">
            <label>Size: {config.size}px</label>
            <input 
              type="range" 
              min="20" 
              max="70" 
              value={config.size} 
              onChange={(e) => setConfig({ ...config, size: Number(e.target.value) })} 
            />
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="filter-tabs">
          {['all', 'spinners', 'pulse', 'dots', 'bars', 'orbit', 'glass'].map((type) => (
            <button
              key={type}
              className={`filter-btn ${config.filter === type ? 'active' : ''}`}
              style={{
                borderColor: config.filter === type ? config.primaryColor : 'rgba(6, 182, 212, 0.2)',
                boxShadow: config.filter === type ? `0 0 10px ${config.primaryColor}40` : 'none'
              }}
              onClick={() => setConfig({ ...config, filter: type })}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* 30+ Loaders Grid */}
      <div className="loaders-grid">
        {filteredItems.map((item) => {
          const codeSnippet = `/* JSX */\n<div className="loader-${item.category}"></div>\n\n/* CSS */\n.loader-${item.category} {\n  width: ${config.size}px;\n  height: ${config.size}px;\n  border: 3px solid rgba(255, 255, 255, 0.1);\n  border-top-color: ${config.primaryColor};\n  border-radius: 50%;\n  animation: spin ${config.speed}s linear infinite;\n}`;

          return (
            <div key={item.id} className="loader-card">
              <div className="card-header">
                <span>{item.title}</span>
                <button 
                  className="copy-btn"
                  onClick={() => handleCopy(item.id, codeSnippet)}
                  style={{ color: config.primaryColor }}
                >
                  {copiedId === item.id ? <><FiCheck /> Copied</> : <><FiCopy /> Copy Code</>}
                </button>
              </div>

              <div className="card-preview">
                {item.category === 'spinners' && (
                  <div 
                    className="spinner-ring"
                    style={{
                      width: `${config.size}px`,
                      height: `${config.size}px`,
                      border: `4px solid rgba(255, 255, 255, 0.1)`,
                      borderTop: `4px solid ${config.primaryColor}`,
                      borderRadius: '50%',
                      animationDuration: `${config.speed}s`,
                      filter: `drop-shadow(0 0 8px ${config.secondaryColor})`
                    }}
                  />
                )}

                {item.category === 'pulse' && (
                  <div 
                    className="pulse-node"
                    style={{
                      width: `${config.size}px`,
                      height: `${config.size}px`,
                      backgroundColor: config.primaryColor,
                      boxShadow: `0 0 25px ${config.secondaryColor}`,
                      borderRadius: '50%',
                      animationDuration: `${config.speed}s`
                    }}
                  />
                )}

                {item.category === 'dots' && (
                  <div className="dots-wave">
                    {[0, 1, 2].map(i => (
                      <span 
                        key={i} 
                        style={{
                          width: `${config.size / 3}px`,
                          height: `${config.size / 3}px`,
                          backgroundColor: config.primaryColor,
                          boxShadow: `0 0 10px ${config.secondaryColor}`,
                          borderRadius: '50%',
                          animationDuration: `${config.speed}s`,
                          animationDelay: `${i * 0.15}s`
                        }}
                      />
                    ))}
                  </div>
                )}

                {item.category === 'bars' && (
                  <div className="bars-wave">
                    {[0, 1, 2, 3].map(i => (
                      <span 
                        key={i} 
                        style={{
                          width: '6px',
                          height: `${config.size}px`,
                          backgroundColor: config.primaryColor,
                          boxShadow: `0 0 10px ${config.secondaryColor}`,
                          animationDuration: `${config.speed}s`,
                          animationDelay: `${i * 0.1}s`
                        }}
                      />
                    ))}
                  </div>
                )}

                {item.category === 'orbit' && (
                  <div 
                    className="orbit-ring"
                    style={{
                      width: `${config.size}px`,
                      height: `${config.size}px`,
                      borderColor: `${config.primaryColor}55`,
                      animationDuration: `${config.speed}s`
                    }}
                  >
                    <span style={{ backgroundColor: config.primaryColor, boxShadow: `0 0 12px ${config.secondaryColor}` }} />
                  </div>
                )}

                {item.category === 'glass' && (
                  <div 
                    className="glass-loader"
                    style={{
                      width: `${config.size}px`,
                      height: `${config.size}px`,
                      border: `3px solid rgba(255,255,255,0.2)`,
                      backdropFilter: 'blur(8px)',
                      borderColor: `${config.primaryColor}`,
                      boxShadow: `0 0 15px ${config.secondaryColor}66`,
                      animationDuration: `${config.speed}s`
                    }}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
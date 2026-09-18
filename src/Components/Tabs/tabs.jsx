import React, { useState } from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi';
import './tabs.css';

export default function Tabs({ showToast }) {
  const [accentColor, setAccentColor] = useState('#06b6d4');
  const [borderRadius, setBorderRadius] = useState(10);
  const [fontSize, setFontSize] = useState(14);
  const [paddingY, setPaddingY] = useState(10);
  const [activeTabCategory, setActiveTabCategory] = useState('All');
  const [copiedId, setCopiedId] = useState(null);

  // Active state for each tabs component demo
  const [activeTabMap, setActiveTabMap] = useState({});

  const categories = ['All', 'Glassmorphic', 'Neon Underline', 'Cyber Pill', 'Segmented', 'Gradient Border'];

  const tabList = [];
  const categoryNames = ['Glassmorphic', 'Neon Underline', 'Cyber Pill', 'Segmented', 'Gradient Border'];
  for (let i = 1; i <= 35; i++) {
    const cat = categoryNames[(i - 1) % categoryNames.length];
    tabList.push({
      id: `tab-variant-${i}`,
      title: `${cat} Tabs #${i}`,
      category: cat,
      items: ['Dashboard', 'Analytics', 'Settings', 'Integrations']
    });
  }

  const filteredTabs = activeTabCategory === 'All'
    ? tabList
    : tabList.filter(t => t.category === activeTabCategory);

  const handleTabClick = (tabId, item) => {
    setActiveTabMap(prev => ({ ...prev, [tabId]: item }));
  };

  const handleCopy = (tab) => {
    const snippet = `/* JSX */
<div className="vault-tabs-container">
  <div className="vault-tabs ${tab.category.toLowerCase().replace(/\\s+/g, '-')}">
    ${tab.items.map(item => `<button className="tab-btn" style={{ borderColor: '${accentColor}' }}>${item}</button>`).join('\\n    ')}
  </div>
</div>

/* CSS */
.vault-tabs {
  display: flex;
  gap: 8px;
  background: rgba(15, 23, 42, 0.7);
  padding: 6px;
  border-radius: ${borderRadius}px;
  border: 1px solid rgba(6, 182, 212, 0.25);
  backdrop-filter: blur(12px);
}
.tab-btn {
  padding: ${paddingY}px 18px;
  font-size: ${fontSize}px;
  color: #94a3b8;
  border-radius: ${Math.max(4, borderRadius - 2)}px;
  cursor: pointer;
  transition: all 0.25s ease;
}
.tab-btn.active {
  color: #ffffff;
  background: rgba(6, 182, 212, 0.2);
  border-color: ${accentColor};
  box-shadow: 0 0 12px ${accentColor}66;
}`;

    navigator.clipboard.writeText(snippet);
    setCopiedId(tab.id);
    if (showToast) showToast('✨ Tabs code copied to clipboard!');
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="tabs-vault-page">
      <div className="tabs-header">
        <h1>Tabs Stash (30+ Variations)</h1>
        <p>Interactive tab navigation bars with neon glow, glass pills, underlines, and live customizers.</p>
      </div>

      {/* Customizer */}
      <div className="tabs-customizer" style={{ borderColor: accentColor }}>
        <div className="customizer-grid">
          <div className="control-group">
            <label>Glow Accent:</label>
            <input
              type="color"
              value={accentColor}
              onChange={(e) => setAccentColor(e.target.value)}
              className="color-picker"
            />
            <span className="hex-tag">{accentColor}</span>
          </div>

          <div className="control-group">
            <label>Radius: {borderRadius}px</label>
            <input
              type="range"
              min="0"
              max="28"
              value={borderRadius}
              onChange={(e) => setBorderRadius(Number(e.target.value))}
            />
          </div>

          <div className="control-group">
            <label>Font Size: {fontSize}px</label>
            <input
              type="range"
              min="12"
              max="18"
              value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
            />
          </div>

          <div className="control-group">
            <label>Padding: {paddingY}px</label>
            <input
              type="range"
              min="6"
              max="18"
              value={paddingY}
              onChange={(e) => setPaddingY(Number(e.target.value))}
            />
          </div>
        </div>

        <div className="filter-tabs">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${activeTabCategory === cat ? 'active' : ''}`}
              style={{
                borderColor: activeTabCategory === cat ? accentColor : 'rgba(6, 182, 212, 0.2)',
                boxShadow: activeTabCategory === cat ? `0 0 10px ${accentColor}40` : 'none'
              }}
              onClick={() => setActiveTabCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Tabs Grid */}
      <div className="tabs-grid">
        {filteredTabs.map((tab) => {
          const activeItem = activeTabMap[tab.id] || tab.items[0];

          return (
            <div key={tab.id} className={`tab-card tab-card-${tab.category.toLowerCase().replace(/\s+/g, '-')}`}>
              <div className="tab-card-header">
                <span className="tab-category-badge">{tab.category}</span>
                <button
                  className="copy-btn"
                  onClick={() => handleCopy(tab)}
                  style={{ color: accentColor }}
                >
                  {copiedId === tab.id ? <><FiCheck /> Copied</> : <><FiCopy /> Copy Code</>}
                </button>
              </div>

              <div className="tab-preview-box">
                <div
                  className={`tab-nav-wrapper ${tab.category.toLowerCase().replace(/\\s+/g, '-')}`}
                  style={{ borderRadius: `${borderRadius}px` }}
                >
                  {tab.items.map((item) => {
                    const isActive = activeItem === item;
                    return (
                      <button
                        key={item}
                        className={`tab-item-btn ${isActive ? 'active' : ''}`}
                        onClick={() => handleTabClick(tab.id, item)}
                        style={{
                          padding: `${paddingY}px 16px`,
                          fontSize: `${fontSize}px`,
                          borderRadius: tab.category === 'Cyber Pill' ? '999px' : `${Math.max(4, borderRadius - 2)}px`,
                          borderColor: isActive ? accentColor : 'transparent',
                          color: isActive ? '#ffffff' : '#94a3b8',
                          background: isActive ? `${accentColor}25` : 'transparent',
                          boxShadow: isActive ? `0 0 14px ${accentColor}40` : 'none'
                        }}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>

                <div className="tab-content-preview">
                  Active Tab: <span style={{ color: accentColor, fontWeight: 700 }}>{activeItem}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

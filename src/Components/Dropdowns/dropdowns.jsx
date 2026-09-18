import React, { useState, useEffect, useRef } from 'react';
import { FiChevronDown, FiCheck, FiCopy, FiLayers, FiSettings, FiUser, FiLogOut } from 'react-icons/fi';
import './dropdowns.css';

export default function Dropdowns({ showToast }) {
  const [accentColor, setAccentColor] = useState('#06b6d4');
  const [borderRadius, setBorderRadius] = useState(10);
  const [blurAmount, setBlurAmount] = useState(14);
  const [activeCategory, setActiveCategory] = useState('All');
  const [openDropdowns, setOpenDropdowns] = useState({});
  const [copiedId, setCopiedId] = useState(null);
  const pageRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (pageRef.current && !e.target.closest('.dropdown-interactive-container')) {
        setOpenDropdowns({});
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const categories = ['All', 'Glass Select', 'Cyber Menu', 'Action Dropdown', 'Minimal Profile'];

  const dropdownList = [];
  const categoryNames = ['Glass Select', 'Cyber Menu', 'Action Dropdown', 'Minimal Profile'];
  for (let i = 1; i <= 32; i++) {
    const cat = categoryNames[(i - 1) % categoryNames.length];
    dropdownList.push({
      id: `dd-variant-${i}`,
      title: `${cat} #${i}`,
      category: cat,
      items: [
        { label: 'Account Profile', icon: <FiUser /> },
        { label: 'System Settings', icon: <FiSettings /> },
        { label: 'Active Projects', icon: <FiLayers /> },
        { label: 'Disconnect / Logout', icon: <FiLogOut /> }
      ]
    });
  }

  const toggleDropdown = (id, e) => {
    if (e) e.stopPropagation();
    setOpenDropdowns(prev => {
      // Toggle current, close others for clean stacking
      const isCurrentlyOpen = !!prev[id];
      return isCurrentlyOpen ? {} : { [id]: true };
    });
  };

  const filteredDropdowns = activeCategory === 'All'
    ? dropdownList
    : dropdownList.filter(d => d.category === activeCategory);

  const handleCopy = (dd) => {
    const snippet = `/* React JSX */
<div className="vault-dropdown-wrapper">
  <button className="dropdown-trigger-btn" style={{ borderColor: '${accentColor}' }}>
    <span>Select Option</span>
    <span className="arrow">▼</span>
  </button>
  <div className="dropdown-menu-list" style={{
    borderRadius: '${borderRadius}px',
    backdropFilter: 'blur(${blurAmount}px)',
    borderColor: '${accentColor}',
    zIndex: 9999
  }}>
    ${dd.items.map(item => `<div className="dropdown-menu-item">${item.label}</div>`).join('\\n    ')}
  </div>
</div>`;

    navigator.clipboard.writeText(snippet);
    setCopiedId(dd.id);
    if (showToast) showToast('✨ Dropdown code copied to clipboard!');
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="dropdowns-vault-page" ref={pageRef}>
      <div className="dropdowns-header">
        <h1>Dropdowns & Menus Stash (30+ Variations)</h1>
        <p>Glassmorphic select menus, cyberpunk actions, and animated popup triggers with high z-index depth.</p>
      </div>

      {/* Customizer */}
      <div className="dropdowns-customizer" style={{ borderColor: accentColor }}>
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
              max="24"
              value={borderRadius}
              onChange={(e) => setBorderRadius(Number(e.target.value))}
            />
          </div>

          <div className="control-group">
            <label>Glass Blur: {blurAmount}px</label>
            <input
              type="range"
              min="4"
              max="24"
              value={blurAmount}
              onChange={(e) => setBlurAmount(Number(e.target.value))}
            />
          </div>
        </div>

        <div className="filter-tabs">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              style={{
                borderColor: activeCategory === cat ? accentColor : 'rgba(6, 182, 212, 0.2)',
                boxShadow: activeCategory === cat ? `0 0 10px ${accentColor}40` : 'none'
              }}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Dropdown Grid */}
      <div className="dropdowns-grid">
        {filteredDropdowns.map((dd) => {
          const isOpen = !!openDropdowns[dd.id];

          return (
            <div 
              key={dd.id} 
              className={`dropdown-card dropdown-card-${dd.category.toLowerCase().replace(/\s+/g, '-')} ${isOpen ? 'dropdown-active' : ''}`}
              style={isOpen ? { zIndex: 100, position: 'relative' } : { position: 'relative', zIndex: 1 }}
            >
              <div className="dropdown-card-header">
                <span className="dd-category-badge">{dd.category}</span>
                <button
                  className="copy-btn"
                  onClick={() => handleCopy(dd)}
                  style={{ color: accentColor }}
                >
                  {copiedId === dd.id ? <><FiCheck /> Copied</> : <><FiCopy /> Copy Code</>}
                </button>
              </div>

              <div className="dropdown-preview-box">
                <div className="dropdown-interactive-container">
                  <button
                    className={`dropdown-trigger-btn ${isOpen ? 'is-open' : ''}`}
                    onClick={(e) => toggleDropdown(dd.id, e)}
                    style={{
                      borderRadius: `${borderRadius}px`,
                      borderColor: isOpen ? accentColor : 'rgba(6, 182, 212, 0.3)',
                      boxShadow: isOpen ? `0 0 14px ${accentColor}40` : 'none',
                      color: isOpen ? accentColor : '#ffffff'
                    }}
                  >
                    <span>Toggle {dd.title}</span>
                    <FiChevronDown className={`dd-icon ${isOpen ? 'open' : ''}`} />
                  </button>

                  {isOpen && (
                    <div
                      className="dropdown-menu-list"
                      style={{
                        borderRadius: `${borderRadius}px`,
                        backdropFilter: `blur(${blurAmount}px)`,
                        WebkitBackdropFilter: `blur(${blurAmount}px)`,
                        borderColor: accentColor,
                        boxShadow: `0 16px 40px rgba(0, 0, 0, 0.9), 0 0 20px ${accentColor}40`
                      }}
                    >
                      {dd.items.map((item, idx) => (
                        <div
                          key={idx}
                          className="dropdown-menu-item"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleDropdown(dd.id);
                            if (showToast) showToast(`Selected "${item.label}" from ${dd.title}`);
                          }}
                        >
                          <span className="item-icon" style={{ color: accentColor }}>{item.icon}</span>
                          <span>{item.label}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

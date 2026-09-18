import React, { useState } from 'react';
import { FiChevronDown, FiPlus, FiMinus, FiCopy, FiCheck, FiArrowRight } from 'react-icons/fi';
import './accordians.css';

export default function Accordions({ showToast }) {
  const [accentColor, setAccentColor] = useState('#06b6d4');
  const [borderRadius, setBorderRadius] = useState(10);
  const [borderWidth, setBorderWidth] = useState(1);
  const [blurAmount, setBlurAmount] = useState(12);
  const [fontSize, setFontSize] = useState(14);
  const [paddingVertical, setPaddingVertical] = useState(12);
  const [iconType, setIconType] = useState('chevron');
  const [allowMultiple, setAllowMultiple] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [openStates, setOpenStates] = useState({});
  const [copiedId, setCopiedId] = useState(null);

  const toggleAccordion = (accId, index) => {
    setOpenStates((prev) => {
      const currentOpen = prev[accId] || [];
      if (allowMultiple) {
        if (currentOpen.includes(index)) {
          return { ...prev, [accId]: currentOpen.filter((i) => i !== index) };
        } else {
          return { ...prev, [accId]: [...currentOpen, index] };
        }
      } else {
        return { ...prev, [accId]: currentOpen.includes(index) ? [] : [index] };
      }
    });
  };

  const categories = ['All', 'Glassmorphic', 'Neon Cyber', 'Minimal Dark', 'Card Style', 'Bordered Glow'];

  const generateAccordions = () => {
    const presets = [];
    const categoryList = ['Glassmorphic', 'Neon Cyber', 'Minimal Dark', 'Card Style', 'Bordered Glow'];
    
    for (let i = 1; i <= 52; i++) {
      const cat = categoryList[(i - 1) % categoryList.length];
      presets.push({
        id: `acc-variant-${i}`,
        title: `${cat} Variant #${i}`,
        category: cat,
        styleVariant: `accordion-style-${((i - 1) % 5) + 1}`,
        items: [
          { title: `Section 1: ${cat} Feature Architecture`, content: `Optimized React panel #${i}-A with backdrop frosted glass and zero external framework load.` },
          { title: `Section 2: Dynamic CSS Tokens`, content: `Full reactive CSS variable tokens with real-time accent glow and responsive typography.` },
          { title: `Section 3: Production Code Export`, content: `Grab pure JSX and stylesheet definitions ready to paste directly into your project.` }
        ]
      });
    }
    return presets;
  };

  const allAccordions = generateAccordions();

  const filteredAccordions = activeCategory === 'All'
    ? allAccordions
    : allAccordions.filter((a) => a.category === activeCategory);

  const handleCopyCode = (accId, items) => {
    const codeSnippet = `/* React JSX Snippet for ${accId} */
<div className="vault-accordion" style={{
  borderRadius: "${borderRadius}px",
  backdropFilter: "blur(${blurAmount}px)"
}}>
  ${items.map((item) => `
  <div className="accordion-item">
    <button 
      className="accordion-header"
      style={{
        padding: "${paddingVertical}px 16px",
        fontSize: "${fontSize}px",
        borderWidth: "${borderWidth}px",
        borderColor: "${accentColor}"
      }}
    >
      <span>${item.title}</span>
    </button>
    <div className="accordion-body">
      <p>${item.content}</p>
    </div>
  </div>`).join('')}
</div>`;

    navigator.clipboard.writeText(codeSnippet);
    setCopiedId(accId);
    if (showToast) showToast('✨ Accordion code copied to clipboard!');
    setTimeout(() => setCopiedId(null), 2000);
  };

  const renderIcon = (isOpen) => {
    if (iconType === 'plusminus') {
      return isOpen ? <FiMinus className="acc-icon" /> : <FiPlus className="acc-icon" />;
    }
    if (iconType === 'arrow') {
      return <FiArrowRight className={`acc-icon ${isOpen ? 'rotate-90' : ''}`} />;
    }
    return <FiChevronDown className={`acc-icon ${isOpen ? 'rotate-180' : ''}`} />;
  };

  return (
    <div className="accordions-container">
      <div className="accordions-header">
        <h1>Accordions Stash (50+ Variations)</h1>
        <p>Real-time matrix for dimensions, typography, glass blurs, and expand modes.</p>
      </div>

      {/* Customizer Control Panel */}
      <div className="accordions-customizer" style={{ borderColor: accentColor }}>
        <div className="customizer-grid">
          <div className="control-group">
            <label>Glow Accent:</label>
            <input 
              type="color" 
              value={accentColor} 
              onChange={(e) => setAccentColor(e.target.value)} 
              className="color-input"
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
            <label>Border: {borderWidth}px</label>
            <input 
              type="range" 
              min="1" 
              max="4" 
              value={borderWidth} 
              onChange={(e) => setBorderWidth(Number(e.target.value))} 
            />
          </div>

          <div className="control-group">
            <label>Glass Blur: {blurAmount}px</label>
            <input 
              type="range" 
              min="0" 
              max="20" 
              value={blurAmount} 
              onChange={(e) => setBlurAmount(Number(e.target.value))} 
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
            <label>Padding: {paddingVertical}px</label>
            <input 
              type="range" 
              min="6" 
              max="22" 
              value={paddingVertical} 
              onChange={(e) => setPaddingVertical(Number(e.target.value))} 
            />
          </div>

          <div className="control-group">
            <label>Icon Style:</label>
            <select 
              value={iconType} 
              onChange={(e) => setIconType(e.target.value)}
              className="select-input"
            >
              <option value="chevron">Chevron Arrow</option>
              <option value="plusminus">Plus / Minus</option>
              <option value="arrow">Right Arrow</option>
            </select>
          </div>

          <div className="control-group checkbox-group">
            <label>
              <input 
                type="checkbox" 
                checked={allowMultiple} 
                onChange={(e) => setAllowMultiple(e.target.checked)} 
              />
              Multi-Expand Mode
            </label>
          </div>
        </div>

        {/* Category Filters */}
        <div className="category-filters">
          {categories.map((cat) => (
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

      {/* Accordions Grid */}
      <div className="accordions-grid">
        {filteredAccordions.map((acc) => (
          <div 
            key={acc.id} 
            className={`accordion-card-wrapper ${acc.styleVariant}`}
            style={{
              borderRadius: `${borderRadius}px`,
              backdropFilter: `blur(${blurAmount}px)`,
              WebkitBackdropFilter: `blur(${blurAmount}px)`,
              borderWidth: `${borderWidth}px`,
              borderColor: 'rgba(6, 182, 212, 0.25)'
            }}
          >
            <div className="card-top-bar">
              <span className="category-badge">{acc.category}</span>
              <button 
                className="copy-btn"
                onClick={() => handleCopyCode(acc.id, acc.items)}
                style={{ color: accentColor }}
              >
                {copiedId === acc.id ? <><FiCheck /> Copied</> : <><FiCopy /> Copy Code</>}
              </button>
            </div>

            <div className="accordion-block">
              {acc.items.map((item, idx) => {
                const openList = openStates[acc.id] || [];
                const isOpen = openList.includes(idx);

                return (
                  <div 
                    key={idx} 
                    className={`accordion-item ${isOpen ? 'open' : ''} ${acc.styleVariant}`}
                    style={{ borderRadius: `${Math.max(4, borderRadius - 4)}px` }}
                  >
                    <button 
                      className="accordion-header"
                      onClick={() => toggleAccordion(acc.id, idx)}
                      style={{
                        padding: `${paddingVertical}px 16px`,
                        fontSize: `${fontSize}px`,
                        borderColor: isOpen ? accentColor : 'rgba(255, 255, 255, 0.08)',
                        borderWidth: `${borderWidth}px`,
                        color: isOpen ? accentColor : '#e2e8f0',
                        boxShadow: isOpen ? `0 0 12px ${accentColor}30` : 'none'
                      }}
                    >
                      <span>{item.title}</span>
                      {renderIcon(isOpen)}
                    </button>
                    {isOpen && (
                      <div className="accordion-body">
                        <p>{item.content}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
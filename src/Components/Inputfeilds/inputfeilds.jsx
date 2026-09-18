import React, { useState } from 'react';
import { FiCopy, FiCheck, FiEye, FiEyeOff, FiSearch, FiLock, FiMail, FiUser } from 'react-icons/fi';
import './inputfeilds.css';

export default function InputFields({ showToast }) {
  const [config, setConfig] = useState({
    color: '#06b6d4',
    radius: 8,
    padding: 12,
    fontSize: 14,
    filter: 'all'
  });

  const [copiedId, setCopiedId] = useState(null);
  const [showPasswordMap, setShowPasswordMap] = useState({});

  const togglePassword = (id) => {
    setShowPasswordMap(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCopy = (id, code) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    if (showToast) showToast('✨ Input code copied to clipboard!');
    setTimeout(() => setCopiedId(null), 2000);
  };

  const inputItems = Array.from({ length: 60 }, (_, index) => {
    const id = index + 1;
    const categories = ['glassmorphic', 'neon', 'minimal', 'floating', 'pill'];
    const category = categories[index % categories.length];
    const types = ['text', 'email', 'password', 'search'];
    const type = types[index % types.length];

    return {
      id,
      title: `${category.charAt(0).toUpperCase() + category.slice(1)} Input #${id}`,
      category,
      type,
      placeholder: `Enter ${type} #${id}...`
    };
  });

  const filteredItems = config.filter === 'all' 
    ? inputItems 
    : inputItems.filter(item => item.category === config.filter);

  return (
    <div className="input-fields-container">
      {/* Header Section */}
      <div className="inputs-header">
        <h1>Input Fields Stash (60+ Styles)</h1>
        <p>Real-time matrix for frosted glass forms, neon search inputs, and responsive text boxes.</p>
      </div>

      {/* Customizer Panel */}
      <div className="inputs-customizer" style={{ borderColor: config.color }}>
        <div className="customizer-grid">
          <div className="control-group">
            <label>Glow Accent:</label>
            <input 
              type="color" 
              value={config.color} 
              onChange={(e) => setConfig({ ...config, color: e.target.value })} 
              className="color-picker"
            />
            <span className="hex-label">{config.color}</span>
          </div>

          <div className="control-group">
            <label>Radius: {config.radius}px</label>
            <input 
              type="range" 
              min="0" 
              max="24" 
              value={config.radius} 
              onChange={(e) => setConfig({ ...config, radius: Number(e.target.value) })} 
            />
          </div>

          <div className="control-group">
            <label>Padding: {config.padding}px</label>
            <input 
              type="range" 
              min="6" 
              max="20" 
              value={config.padding} 
              onChange={(e) => setConfig({ ...config, padding: Number(e.target.value) })} 
            />
          </div>

          <div className="control-group">
            <label>Font Size: {config.fontSize}px</label>
            <input 
              type="range" 
              min="12" 
              max="18" 
              value={config.fontSize} 
              onChange={(e) => setConfig({ ...config, fontSize: Number(e.target.value) })} 
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="filter-tabs">
          {['all', 'glassmorphic', 'neon', 'minimal', 'floating', 'pill'].map((type) => (
            <button
              key={type}
              className={`filter-btn ${config.filter === type ? 'active' : ''}`}
              style={{
                borderColor: config.filter === type ? config.color : 'rgba(6, 182, 212, 0.2)',
                boxShadow: config.filter === type ? `0 0 10px ${config.color}40` : 'none'
              }}
              onClick={() => setConfig({ ...config, filter: type })}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Components Grid */}
      <div className="inputs-grid">
        {filteredItems.map((item) => {
          const isPassword = item.type === 'password';
          const isRevealed = !!showPasswordMap[item.id];
          const actualType = isPassword && isRevealed ? 'text' : item.type;

          const codeSnippet = `/* JSX */
<input 
  type="${item.type}" 
  className="${item.category}-input" 
  placeholder="${item.placeholder}" 
/>

/* CSS */
.${item.category}-input {
  background: rgba(15, 23, 42, 0.75);
  border: 1px solid ${config.color};
  padding: ${config.padding}px 16px;
  border-radius: ${item.category === 'pill' ? '999px' : `${config.radius}px`};
  font-size: ${config.fontSize}px;
  color: #ffffff;
  backdrop-filter: blur(12px);
  outline: none;
  transition: all 0.25s ease;
}
.${item.category}-input:focus {
  box-shadow: 0 0 15px ${config.color}80;
}`;

          return (
            <div key={item.id} className={`input-card input-card-${item.category}`}>
              <div className="card-top-bar">
                <span className="category-badge">{item.category}</span>
                <button 
                  className="copy-btn"
                  onClick={() => handleCopy(item.id, codeSnippet)}
                  style={{ color: config.color }}
                >
                  {copiedId === item.id ? <><FiCheck /> Copied</> : <><FiCopy /> Copy Code</>}
                </button>
              </div>

              <div className="input-control-container">
                {item.type === 'search' && <FiSearch className="field-icon prefix" style={{ color: config.color }} />}
                {item.type === 'email' && <FiMail className="field-icon prefix" style={{ color: config.color }} />}
                {item.type === 'password' && <FiLock className="field-icon prefix" style={{ color: config.color }} />}
                {item.type === 'text' && <FiUser className="field-icon prefix" style={{ color: config.color }} />}

                <input 
                  type={actualType} 
                  placeholder={item.placeholder} 
                  style={{
                    borderRadius: item.category === 'pill' ? '999px' : `${config.radius}px`,
                    padding: `${config.padding}px 14px`,
                    paddingLeft: '38px',
                    fontSize: `${config.fontSize}px`,
                    borderColor: item.category === 'neon' ? config.color : 'rgba(6, 182, 212, 0.3)',
                    boxShadow: item.category === 'neon' ? `0 0 14px ${config.color}40` : 'none',
                    outline: 'none'
                  }}
                />

                {isPassword && (
                  <button 
                    type="button"
                    className="password-toggle-btn"
                    onClick={() => togglePassword(item.id)}
                  >
                    {isRevealed ? <FiEyeOff /> : <FiEye />}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
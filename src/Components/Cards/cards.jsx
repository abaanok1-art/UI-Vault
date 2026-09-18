import React, { useState } from 'react';
import { FiCopy, FiCheck, FiLayers, FiShield, FiZap, FiActivity, FiCpu, FiTrendingUp, FiTerminal } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';
import './cards.css';

const CARDS_COLLECTION = [
  // 1. GLASSMORPHIC (10)
  {
    id: 'card-glass-1',
    name: 'Frosted Crystal Ice Card',
    category: 'Glassmorphic',
    tag: 'Acrylic Blur',
    icon: <HiSparkles />,
    snippet: `.card-frosted-crystal {
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.3);
}`
  },
  {
    id: 'card-glass-2',
    name: 'Smoky Obsidian Panel',
    category: 'Glassmorphic',
    tag: 'Obsidian',
    icon: <FiShield />,
    snippet: `.card-smoky-obsidian {
  background: rgba(10, 15, 28, 0.85);
  border: 1px solid rgba(6, 182, 212, 0.3);
  backdrop-filter: blur(14px);
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.7), inset 0 0 15px rgba(6, 182, 212, 0.15);
}`
  },
  {
    id: 'card-glass-3',
    name: 'Prismatic Mirror Card',
    category: 'Glassmorphic',
    tag: 'Prism Refraction',
    icon: <FiZap />,
    snippet: `.card-prismatic-mirror {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid transparent;
  background-image: linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.85)), linear-gradient(135deg, #00f2fe, #a855f7, #ec4899);
  background-origin: border-box;
  background-clip: padding-box, border-box;
}`
  },
  {
    id: 'card-glass-4',
    name: 'Aerogel Floating Surface',
    category: 'Glassmorphic',
    tag: 'Deep Float',
    icon: <FiLayers />,
    snippet: `.card-aerogel-float {
  background: rgba(15, 23, 42, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.8), 0 0 20px rgba(6, 182, 212, 0.2);
}`
  },
  {
    id: 'card-glass-5',
    name: 'Specular Sheen Card',
    category: 'Glassmorphic',
    tag: 'Gleam Reflection',
    icon: <HiSparkles />,
    snippet: `.card-specular-sheen {
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(6, 182, 212, 0.4);
  position: relative;
  overflow: hidden;
}`
  },
  {
    id: 'card-glass-6',
    name: 'Recessed Inset Well',
    category: 'Glassmorphic',
    tag: 'Inset Bevel',
    icon: <FiShield />,
    snippet: `.card-recessed-inset {
  background: rgba(4, 8, 18, 0.6);
  border: 1px solid rgba(6, 182, 212, 0.2);
  box-shadow: inset 0 4px 14px rgba(0, 0, 0, 0.8);
}`
  },
  {
    id: 'card-glass-7',
    name: 'Liquid Wave Container',
    category: 'Glassmorphic',
    tag: 'Liquid Sheen',
    icon: <FiActivity />,
    snippet: `.card-liquid-wave {
  background: linear-gradient(180deg, rgba(6, 182, 212, 0.15) 0%, rgba(15, 23, 42, 0.8) 100%);
  border: 1px solid rgba(6, 182, 212, 0.35);
}`
  },
  {
    id: 'card-glass-8',
    name: 'Frosted Emerald Matrix',
    category: 'Glassmorphic',
    tag: 'Emerald Glass',
    icon: <FiActivity />,
    snippet: `.card-frosted-emerald {
  background: rgba(6, 78, 59, 0.2);
  border: 1px solid rgba(16, 185, 129, 0.4);
  backdrop-filter: blur(14px);
  box-shadow: 0 0 20px rgba(16, 185, 129, 0.2);
}`
  },
  {
    id: 'card-glass-9',
    name: 'Amethyst Velvet Glass',
    category: 'Glassmorphic',
    tag: 'Velvet Purple',
    icon: <HiSparkles />,
    snippet: `.card-amethyst-velvet {
  background: rgba(88, 28, 135, 0.2);
  border: 1px solid rgba(168, 85, 247, 0.4);
  backdrop-filter: blur(16px);
  box-shadow: 0 0 25px rgba(168, 85, 247, 0.2);
}`
  },
  {
    id: 'card-glass-10',
    name: 'Diamond Facet Border',
    category: 'Glassmorphic',
    tag: 'Facet Polygon',
    icon: <FiShield />,
    snippet: `.card-diamond-facet {
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.2);
  clip-path: polygon(14px 0, calc(100% - 14px) 0, 100% 14px, 100% calc(100% - 14px), calc(100% - 14px) 100%, 14px 100%, 0 calc(100% - 14px), 0 14px);
}`
  },

  // 2. NEON GLOW (10)
  {
    id: 'card-neon-1',
    name: 'High Voltage Cyan Halo',
    category: 'Neon Glow',
    tag: 'Electric Cyan',
    icon: <FiZap />,
    snippet: `.card-voltage-cyan {
  background: #091122;
  border: 1px solid #00f2fe;
  box-shadow: 0 0 25px rgba(0, 242, 254, 0.45);
}`
  },
  {
    id: 'card-neon-2',
    name: 'Synthwave Magenta Pulse',
    category: 'Neon Glow',
    tag: 'Hot Pink Neon',
    icon: <FiActivity />,
    snippet: `.card-synthwave-magenta {
  background: #11091e;
  border: 1px solid #ec4899;
  box-shadow: 0 0 25px rgba(236, 72, 153, 0.45);
}`
  },
  {
    id: 'card-neon-3',
    name: 'Plasma Arc Dual-Tone',
    category: 'Neon Glow',
    tag: 'Plasma Dual',
    icon: <FiZap />,
    snippet: `.card-plasma-dual {
  background: #0c152a;
  border: 1px solid #06b6d4;
  box-shadow: -4px -4px 20px rgba(6, 182, 212, 0.3), 4px 4px 20px rgba(168, 85, 247, 0.3);
}`
  },
  {
    id: 'card-neon-4',
    name: 'Solar Ember Gold Flame',
    category: 'Neon Glow',
    tag: 'Molten Gold',
    icon: <FiZap />,
    snippet: `.card-solar-ember {
  background: #191004;
  border: 1px solid #f59e0b;
  box-shadow: 0 0 25px rgba(245, 158, 11, 0.4);
}`
  },
  {
    id: 'card-neon-5',
    name: 'Matrix Bio-Luminescence',
    category: 'Neon Glow',
    tag: 'Radioactive Green',
    icon: <FiTerminal />,
    snippet: `.card-matrix-bio {
  background: #04140b;
  border: 1px solid #10b981;
  box-shadow: 0 0 20px rgba(16, 185, 129, 0.4);
}`
  },
  {
    id: 'card-neon-6',
    name: 'Laser Tracker Outer Glow',
    category: 'Neon Glow',
    tag: 'Laser Track',
    icon: <FiActivity />,
    snippet: `.card-laser-tracker {
  background: rgba(15, 23, 42, 0.9);
  border: 2px solid #38bdf8;
  box-shadow: 0 0 30px rgba(56, 189, 248, 0.35);
}`
  },
  {
    id: 'card-neon-7',
    name: 'Ultraviolet Cyber Aura',
    category: 'Neon Glow',
    tag: 'UV Purple',
    icon: <HiSparkles />,
    snippet: `.card-uv-aura {
  background: #0f0b1a;
  border: 1px solid #a855f7;
  box-shadow: 0 0 30px rgba(168, 85, 247, 0.4);
}`
  },
  {
    id: 'card-neon-8',
    name: 'Dashed Strobe Perimeter',
    category: 'Neon Glow',
    tag: 'Dashed Strobe',
    icon: <FiActivity />,
    snippet: `.card-dashed-strobe {
  background: rgba(15, 23, 42, 0.85);
  border: 2px dashed #00f2fe;
  box-shadow: 0 0 15px rgba(0, 242, 254, 0.3);
}`
  },
  {
    id: 'card-neon-9',
    name: 'Glitch Chromatic Shift',
    category: 'Neon Glow',
    tag: 'Glitch Border',
    icon: <FiZap />,
    snippet: `.card-glitch-chroma {
  background: #0b1120;
  border: 1px solid #00f2fe;
  box-shadow: -3px 0 0 #ec4899, 3px 0 0 #00f2fe;
}`
  },
  {
    id: 'card-neon-10',
    name: 'Infinite Mirror Tunnel',
    category: 'Neon Glow',
    tag: 'Tunnel Depth',
    icon: <FiLayers />,
    snippet: `.card-mirror-tunnel {
  background: #060a14;
  border: 1px solid #00f2fe;
  box-shadow: inset 0 0 20px rgba(0, 242, 254, 0.4), 0 0 20px rgba(0, 242, 254, 0.4);
}`
  },

  // 3. CYBERPUNK HUD (10)
  {
    id: 'card-cyber-1',
    name: 'Hex 45° Chamfered Hull',
    category: 'Cyberpunk HUD',
    tag: 'Hex Polygon',
    icon: <FiCpu />,
    snippet: `.card-hex-hull {
  background: #0f172a;
  border: none;
  clip-path: polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px);
  box-shadow: inset 0 0 0 1px #00f2fe;
}`
  },
  {
    id: 'card-cyber-2',
    name: 'Terminal Output Console',
    category: 'Cyberpunk HUD',
    tag: 'Console Log',
    icon: <FiTerminal />,
    snippet: `.card-terminal-output {
  background: #030712;
  border-left: 4px solid #00f2fe;
  border-top: 1px solid #1f2937;
  border-right: 1px solid #1f2937;
  border-bottom: 1px solid #1f2937;
  font-family: monospace;
}`
  },
  {
    id: 'card-cyber-3',
    name: 'Radar HUD Scan Grid',
    category: 'Cyberpunk HUD',
    tag: 'Radar HUD',
    icon: <FiActivity />,
    snippet: `.card-radar-hud {
  background: radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, #0f172a 80%);
  border: 1px solid #06b6d4;
}`
  },
  {
    id: 'card-cyber-4',
    name: 'Tactical Caution Stripes',
    category: 'Cyberpunk HUD',
    tag: 'Hazard Tape',
    icon: <FiShield />,
    snippet: `.card-tactical-caution {
  background: repeating-linear-gradient(45deg, #0f172a, #0f172a 12px, rgba(234, 179, 8, 0.1) 12px, rgba(234, 179, 8, 0.1) 24px);
  border: 1px solid #eab308;
}`
  },
  {
    id: 'card-cyber-5',
    name: 'Mecha Armor Heavy Plate',
    category: 'Cyberpunk HUD',
    tag: 'Mecha Hull',
    icon: <FiCpu />,
    snippet: `.card-mecha-heavy {
  background: #1e293b;
  border: 2px solid #475569;
  box-shadow: 0 6px 0 #0f172a;
}`
  },
  {
    id: 'card-cyber-6',
    name: 'Telemetry Metric Live Feed',
    category: 'Cyberpunk HUD',
    tag: 'Live Metric',
    icon: <FiTrendingUp />,
    snippet: `.card-telemetry-feed {
  background: rgba(15, 23, 42, 0.9);
  border-top: 3px solid #10b981;
  border-left: 1px solid rgba(16, 185, 129, 0.3);
  border-right: 1px solid rgba(16, 185, 129, 0.3);
  border-bottom: 1px solid rgba(16, 185, 129, 0.3);
}`
  },
  {
    id: 'card-cyber-7',
    name: 'Sci-Fi Quantum Core Pod',
    category: 'Cyberpunk HUD',
    tag: 'Reactor Pod',
    icon: <FiZap />,
    snippet: `.card-quantum-pod {
  background: #090f1d;
  border: 1px solid #00f2fe;
  box-shadow: 0 0 30px rgba(0, 242, 254, 0.25);
}`
  },
  {
    id: 'card-cyber-8',
    name: 'Holo Wireframe Blueprint',
    category: 'Cyberpunk HUD',
    tag: 'Wireframe',
    icon: <FiLayers />,
    snippet: `.card-holo-wireframe {
  background: rgba(6, 182, 212, 0.05);
  border: 1px solid rgba(6, 182, 212, 0.4);
  background-size: 15px 15px;
}`
  },
  {
    id: 'card-cyber-9',
    name: 'Stealth Tactical Black',
    category: 'Cyberpunk HUD',
    tag: 'Tactical HUD',
    icon: <FiShield />,
    snippet: `.card-stealth-black {
  background: #080c14;
  border: 1px solid #1e293b;
  letter-spacing: 1px;
}`
  },
  {
    id: 'card-cyber-10',
    name: 'Cyber Chip Motherboard',
    category: 'Cyberpunk HUD',
    tag: 'PCB Traces',
    icon: <FiCpu />,
    snippet: `.card-cyber-chip {
  background: #021a14;
  border: 1px solid #10b981;
  box-shadow: 0 0 15px rgba(16, 185, 129, 0.25);
}`
  },

  // 4. MINIMAL DARK & GRADIENT (10)
  {
    id: 'card-grad-1',
    name: 'Aurora Borealis Mesh',
    category: 'Minimal Dark',
    tag: 'Aurora Mesh',
    icon: <HiSparkles />,
    snippet: `.card-aurora-mesh {
  background: linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(168, 85, 247, 0.15) 100%);
  border: 1px solid rgba(6, 182, 212, 0.35);
}`
  },
  {
    id: 'card-grad-2',
    name: 'Sunset Horizon Glow',
    category: 'Minimal Dark',
    tag: 'Sunset Aura',
    icon: <FiZap />,
    snippet: `.card-sunset-horizon {
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(236, 72, 153, 0.15));
  border: 1px solid rgba(236, 72, 153, 0.35);
}`
  },
  {
    id: 'card-grad-3',
    name: 'Minimal Clean Border',
    category: 'Minimal Dark',
    tag: 'Minimal Line',
    icon: <FiLayers />,
    snippet: `.card-minimal-clean {
  background: rgba(15, 23, 42, 0.65);
  border: 1px solid rgba(255, 255, 255, 0.08);
}`
  },
  {
    id: 'card-grad-4',
    name: 'Deep Navy Sub-Surface',
    category: 'Minimal Dark',
    tag: 'Deep Navy',
    icon: <FiShield />,
    snippet: `.card-deep-navy {
  background: #0b1329;
  border: 1px solid #1e3a8a;
}`
  },
  {
    id: 'card-grad-5',
    name: 'Emerald Matrix Node',
    category: 'Minimal Dark',
    tag: 'Emerald Node',
    icon: <FiActivity />,
    snippet: `.card-emerald-node {
  background: #031811;
  border: 1px solid rgba(16, 185, 129, 0.35);
}`
  },
  {
    id: 'card-grad-6',
    name: 'Dark Neu-morphic Bevel',
    category: 'Minimal Dark',
    tag: 'Neu-morphism',
    icon: <FiLayers />,
    snippet: `.card-neomorphic-bevel {
  background: #0b1120;
  border-radius: 16px;
  box-shadow: 6px 6px 16px #04070e, -6px -6px 16px #121b32;
}`
  },
  {
    id: 'card-grad-7',
    name: 'Molten Lava Horizon',
    category: 'Minimal Dark',
    tag: 'Molten Lava',
    icon: <FiZap />,
    snippet: `.card-molten-lava {
  background: linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(245, 158, 11, 0.15));
  border: 1px solid rgba(239, 68, 68, 0.4);
}`
  },
  {
    id: 'card-grad-8',
    name: 'Cyber Glass Capsule',
    category: 'Minimal Dark',
    tag: 'Pill Capsule',
    icon: <FiActivity />,
    snippet: `.card-glass-capsule {
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid #00f2fe;
  border-radius: 24px;
}`
  },
  {
    id: 'card-grad-9',
    name: 'Brushed Slate Titanium',
    category: 'Minimal Dark',
    tag: 'Titanium Slate',
    icon: <FiShield />,
    snippet: `.card-slate-titanium {
  background: linear-gradient(180deg, #1e293b, #0f172a);
  border: 1px solid #475569;
}`
  },
  {
    id: 'card-grad-10',
    name: 'Rainbow Border Track',
    category: 'Minimal Dark',
    tag: 'Rainbow Conic',
    icon: <HiSparkles />,
    snippet: `.card-rainbow-track {
  background: #0f172a;
  border: 2px solid transparent;
  background-image: linear-gradient(#0f172a, #0f172a), linear-gradient(135deg, #00f2fe, #a855f7, #ec4899);
  background-origin: border-box;
  background-clip: padding-box, border-box;
}`
  }
];

export default function Cards({ showToast }) {
  const [cardTitle, setCardTitle] = useState('Cyber Glass Architecture');
  const [cardDesc, setCardDesc] = useState('Deploy scalable, high-performance UI components styled with dark frosted glass dynamics.');
  const [glowColor, setGlowColor] = useState('#06b6d4');
  const [borderRadius, setBorderRadius] = useState(14);
  const [blurIntensity, setBlurIntensity] = useState(14);
  const [copiedId, setCopiedId] = useState(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Glassmorphic', 'Neon Glow', 'Cyberpunk HUD', 'Minimal Dark'];

  const handleCopyCode = (card) => {
    const codeSnippet = `/* JSX */
<div className="${card.id}">
  <div className="card-badge">${card.tag}</div>
  <h3>${cardTitle}</h3>
  <p>${cardDesc}</p>
  <button className="card-action-btn">Explore Component</button>
</div>

/* CSS: ${card.name} */
${card.snippet}

/* Base Dimensions */
.${card.id} {
  border-radius: ${borderRadius}px;
  padding: 24px;
  backdrop-filter: blur(${blurIntensity}px);
  -webkit-backdrop-filter: blur(${blurIntensity}px);
  color: #ffffff;
  transition: all 0.3s ease;
}`;

    navigator.clipboard.writeText(codeSnippet);
    setCopiedId(card.id);
    if (showToast) showToast(`✨ Copied [${card.name}] JSX & CSS!`);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredCards = filter === 'All' 
    ? CARDS_COLLECTION 
    : CARDS_COLLECTION.filter(c => c.category === filter);

  return (
    <div className="cards-page-container">
      <div className="cards-header">
        <h1 className="cards-title">Cards Stash (40+ Unique Styles)</h1>
        <p className="cards-subtitle">
          From frosted glass prisms to sci-fi chamfered HUD panels and neon telemetry pods.
        </p>

        {/* Customizer Controls */}
        <div className="cards-customizer-bar" style={{ borderColor: glowColor }}>
          <div className="customizer-group">
            <div className="customizer-field">
              <label>Title:</label>
              <input 
                type="text" 
                value={cardTitle} 
                onChange={(e) => setCardTitle(e.target.value)}
                className="customizer-input"
              />
            </div>

            <div className="customizer-field">
              <label>Description:</label>
              <input 
                type="text" 
                value={cardDesc} 
                onChange={(e) => setCardDesc(e.target.value)}
                className="customizer-input desc-input"
              />
            </div>

            <div className="customizer-field">
              <label>Glow Accent:</label>
              <div className="color-picker-wrapper">
                <input 
                  type="color" 
                  value={glowColor} 
                  onChange={(e) => setGlowColor(e.target.value)}
                  className="color-picker"
                />
                <span className="color-hex">{glowColor}</span>
              </div>
            </div>
          </div>

          <div className="customizer-group range-group">
            <div className="customizer-field slider-field">
              <label>Radius: {borderRadius}px</label>
              <input 
                type="range" min="0" max="30" 
                value={borderRadius} 
                onChange={(e) => setBorderRadius(Number(e.target.value))}
              />
            </div>

            <div className="customizer-field slider-field">
              <label>Blur: {blurIntensity}px</label>
              <input 
                type="range" min="0" max="25" 
                value={blurIntensity} 
                onChange={(e) => setBlurIntensity(Number(e.target.value))}
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="filter-tabs">
            {categories.map((cat) => (
              <button 
                key={cat}
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                style={{
                  borderColor: filter === cat ? glowColor : 'rgba(6, 182, 212, 0.2)',
                  boxShadow: filter === cat ? `0 0 10px ${glowColor}40` : 'none'
                }}
                onClick={() => setFilter(cat)}
              >
                {cat} {cat === 'All' ? `(${CARDS_COLLECTION.length})` : '(10)'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="cards-grid">
        {filteredCards.map((card, index) => (
          <div key={card.id} className="card-item-wrapper">
            <div 
              className={`vault-base-card ${card.id} card-visual-${(index % 5) + 1}`}
              style={{
                borderRadius: `${borderRadius}px`,
                backdropFilter: `blur(${blurIntensity}px)`,
                WebkitBackdropFilter: `blur(${blurIntensity}px)`
              }}
            >
              <div className="card-badge-row">
                <span className="card-badge" style={{ color: glowColor, borderColor: `${glowColor}66` }}>
                  {card.tag}
                </span>
                <span className="card-icon-tag">{card.icon}</span>
              </div>

              <h3 className="card-heading">{cardTitle}</h3>
              <p className="card-body-text">{cardDesc}</p>
              
              <div className="card-action-row">
                <button 
                  className="card-preview-btn"
                  style={{ borderColor: glowColor, color: glowColor }}
                >
                  Explore
                </button>
                <button 
                  className="copy-card-code-btn"
                  onClick={() => handleCopyCode(card)}
                  style={{ color: glowColor, borderColor: glowColor }}
                >
                  {copiedId === card.id ? <><FiCheck /> Copied</> : <><FiCopy /> Copy Code</>}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
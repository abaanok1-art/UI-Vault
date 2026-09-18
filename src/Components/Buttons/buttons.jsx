import React, { useState } from 'react';
import { FiCopy, FiCheck, FiArrowRight, FiPlay, FiZap, FiTerminal, FiRadio, FiCpu, FiShield, FiCrosshair, FiActivity } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';
import './buttons.css';

const BUTTONS_COLLECTION = [
  // 1. NEON & CYBER GLOW (10)
  {
    id: 'btn-neon-1',
    name: 'Cyber Glitch Neon',
    category: 'Neon & Glow',
    cssClass: 'btn-neon-glitch',
    tag: 'Glitch FX',
    icon: <FiZap />,
    customSnippet: `.btn-neon-glitch {
  background: #0f172a;
  color: #00f2fe;
  border: 1px solid #00f2fe;
  box-shadow: -2px -2px 0 #ec4899, 2px 2px 0 #00f2fe;
  transition: all 0.2s ease;
}
.btn-neon-glitch:hover {
  transform: skewX(-4deg) translateY(-2px);
  box-shadow: -4px -4px 15px #ec489980, 4px 4px 15px #00f2fe80;
}`
  },
  {
    id: 'btn-neon-2',
    name: 'Laser Beam Sweep',
    category: 'Neon & Glow',
    cssClass: 'btn-laser-sweep',
    tag: 'Animated Laser',
    icon: <FiActivity />,
    customSnippet: `.btn-laser-sweep {
  background: rgba(15, 23, 42, 0.9);
  color: #38bdf8;
  border: 1px solid rgba(56, 189, 248, 0.4);
  position: relative;
  overflow: hidden;
}
.btn-laser-sweep::before {
  content: '';
  position: absolute;
  top: 0; left: -100%; width: 100%; height: 2px;
  background: linear-gradient(90deg, transparent, #38bdf8, transparent);
  animation: laserSweep 2s infinite linear;
}`
  },
  {
    id: 'btn-neon-3',
    name: 'Plasma Radial Pulse',
    category: 'Neon & Glow',
    cssClass: 'btn-plasma-pulse',
    tag: 'Radial Pulse',
    icon: <FiRadio />,
    customSnippet: `.btn-plasma-pulse {
  background: rgba(6, 182, 212, 0.15);
  color: #22d3ee;
  border: 2px solid #06b6d4;
  box-shadow: 0 0 15px rgba(6, 182, 212, 0.5), inset 0 0 15px rgba(6, 182, 212, 0.3);
  animation: plasmaGlow 2.5s infinite ease-in-out;
}`
  },
  {
    id: 'btn-neon-4',
    name: 'Matrix Terminal Green',
    category: 'Neon & Glow',
    cssClass: 'btn-matrix-stream',
    tag: 'Matrix Green',
    icon: <FiTerminal />,
    customSnippet: `.btn-matrix-stream {
  background: #051009;
  color: #10b981;
  border: 1px solid #10b981;
  font-family: monospace;
  box-shadow: 0 0 12px rgba(16, 185, 129, 0.4);
}
.btn-matrix-stream:hover {
  background: #10b981;
  color: #022c22;
  box-shadow: 0 0 25px #10b981;
}`
  },
  {
    id: 'btn-neon-5',
    name: 'Electric Cyan Dual',
    category: 'Neon & Glow',
    cssClass: 'btn-electric-cyan',
    tag: 'High Voltage',
    icon: <FiZap />,
    customSnippet: `.btn-electric-cyan {
  background: #081226;
  color: #ffffff;
  border: 1px solid #00f2fe;
  outline: 2px solid rgba(0, 242, 254, 0.3);
  outline-offset: 3px;
  box-shadow: 0 0 20px rgba(0, 242, 254, 0.6);
}`
  },
  {
    id: 'btn-neon-6',
    name: 'Synthwave Hot Pink',
    category: 'Neon & Glow',
    cssClass: 'btn-synthwave-pink',
    tag: '80s Synthwave',
    icon: <HiSparkles />,
    customSnippet: `.btn-synthwave-pink {
  background: linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(168, 85, 247, 0.2));
  color: #f472b6;
  border: 1px solid #ec4899;
  box-shadow: 0 0 18px rgba(236, 72, 153, 0.5);
}`
  },
  {
    id: 'btn-neon-7',
    name: 'Solar Flare Gold',
    category: 'Neon & Glow',
    cssClass: 'btn-solar-flare',
    tag: 'Molten Ember',
    icon: <FiZap />,
    customSnippet: `.btn-solar-flare {
  background: rgba(245, 158, 11, 0.12);
  color: #fbbf24;
  border: 1px solid #f59e0b;
  box-shadow: 0 0 16px rgba(245, 158, 11, 0.4);
}`
  },
  {
    id: 'btn-neon-8',
    name: 'Hyper Violet Arc',
    category: 'Neon & Glow',
    cssClass: 'btn-hyper-violet',
    tag: 'Ultraviolet',
    icon: <FiRadio />,
    customSnippet: `.btn-hyper-violet {
  background: rgba(168, 85, 247, 0.15);
  color: #c084fc;
  border: 1px solid #a855f7;
  box-shadow: 0 0 20px rgba(168, 85, 247, 0.45);
}`
  },
  {
    id: 'btn-neon-9',
    name: 'Quantum Dual Orbit',
    category: 'Neon & Glow',
    cssClass: 'btn-quantum-orbit',
    tag: 'Orbit Points',
    icon: <FiActivity />,
    customSnippet: `.btn-quantum-orbit {
  background: #0b1329;
  color: #67e8f9;
  border: 1px solid rgba(103, 232, 249, 0.4);
  position: relative;
}`
  },
  {
    id: 'btn-neon-10',
    name: 'Cyber Strobe Wire',
    category: 'Neon & Glow',
    cssClass: 'btn-cyber-strobe',
    tag: 'Strobe Wire',
    icon: <FiZap />,
    customSnippet: `.btn-cyber-strobe {
  background: transparent;
  color: #38bdf8;
  border: 2px dashed #38bdf8;
  box-shadow: 0 0 12px rgba(56, 189, 248, 0.3);
}`
  },

  // 2. GLASSMORPHISM & LIQUID (10)
  {
    id: 'btn-glass-1',
    name: 'Frosted Crystal Ice',
    category: 'Glassmorphism',
    cssClass: 'btn-frosted-ice',
    tag: '20px Blur',
    icon: <HiSparkles />,
    customSnippet: `.btn-frosted-ice {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  color: #ffffff;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.3), 0 8px 32px rgba(0, 0, 0, 0.4);
}`
  },
  {
    id: 'btn-glass-2',
    name: 'Liquid Flow Pill',
    category: 'Glassmorphism',
    cssClass: 'btn-liquid-pill',
    tag: 'Liquid Sheen',
    icon: <FiActivity />,
    customSnippet: `.btn-liquid-pill {
  background: linear-gradient(180deg, rgba(6, 182, 212, 0.25) 0%, rgba(15, 23, 42, 0.6) 100%);
  border: 1px solid rgba(6, 182, 212, 0.4);
  border-radius: 999px;
  backdrop-filter: blur(14px);
  color: #e0f2fe;
}`
  },
  {
    id: 'btn-glass-3',
    name: 'Mirror Sheen Reflection',
    category: 'Glassmorphism',
    cssClass: 'btn-mirror-reflection',
    tag: 'Specular Sweep',
    icon: <HiSparkles />,
    customSnippet: `.btn-mirror-reflection {
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(6, 182, 212, 0.3);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(12px);
}`
  },
  {
    id: 'btn-glass-4',
    name: 'Smoky Obsidian Glass',
    category: 'Glassmorphism',
    cssClass: 'btn-deep-obsidian',
    tag: 'Dark Obsidian',
    icon: <FiShield />,
    customSnippet: `.btn-deep-obsidian {
  background: rgba(8, 12, 22, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6), inset 0 0 12px rgba(6, 182, 212, 0.2);
  color: #f1f5f9;
}`
  },
  {
    id: 'btn-glass-5',
    name: 'Prismatic Refraction',
    category: 'Glassmorphism',
    cssClass: 'btn-prismatic-glass',
    tag: 'Prism Edge',
    icon: <FiZap />,
    customSnippet: `.btn-prismatic-glass {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid transparent;
  background-image: linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), linear-gradient(90deg, #00f2fe, #a855f7, #ec4899);
  background-origin: border-box;
  background-clip: padding-box, border-box;
}`
  },
  {
    id: 'btn-glass-6',
    name: 'Bouncy Bubble Glass',
    category: 'Glassmorphism',
    cssClass: 'btn-bubble-morph',
    tag: 'Spring Morph',
    icon: <FiRadio />,
    customSnippet: `.btn-bubble-morph {
  background: rgba(6, 182, 212, 0.18);
  border: 1px solid rgba(6, 182, 212, 0.4);
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(6, 182, 212, 0.2);
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}`
  },
  {
    id: 'btn-glass-7',
    name: 'Frosted Status Jewel',
    category: 'Glassmorphism',
    cssClass: 'btn-frosted-badge',
    tag: 'Status Jewel',
    icon: <FiActivity />,
    customSnippet: `.btn-frosted-badge {
  background: rgba(15, 23, 42, 0.7);
  border: 1px solid rgba(6, 182, 212, 0.35);
  display: inline-flex;
  align-items: center;
  gap: 8px;
}`
  },
  {
    id: 'btn-glass-8',
    name: 'Inset Recessed Glass',
    category: 'Glassmorphism',
    cssClass: 'btn-glass-inset-card',
    tag: 'Inset Bevel',
    icon: <FiShield />,
    customSnippet: `.btn-glass-inset-card {
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(6, 182, 212, 0.2);
  box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.7), 0 0 10px rgba(6, 182, 212, 0.15);
}`
  },
  {
    id: 'btn-glass-9',
    name: 'Crystal Facet Chamfer',
    category: 'Glassmorphism',
    cssClass: 'btn-crystal-facet',
    tag: 'Facet Glass',
    icon: <HiSparkles />,
    customSnippet: `.btn-crystal-facet {
  background: rgba(15, 23, 42, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.2);
  clip-path: polygon(8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px), 0 8px);
}`
  },
  {
    id: 'btn-glass-10',
    name: 'Aerogel Floating Slab',
    category: 'Glassmorphism',
    cssClass: 'btn-ultra-glass-float',
    tag: 'Deep Float',
    icon: <FiShield />,
    customSnippet: `.btn-ultra-glass-float {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.7), 0 0 25px rgba(6, 182, 212, 0.2);
}`
  },

  // 3. CYBERPUNK & HUD (10)
  {
    id: 'btn-cyber-1',
    name: 'Hex 45° Chamfered',
    category: 'Cyberpunk & Tech',
    cssClass: 'btn-hex-chamfer',
    tag: 'Tech Clip-Path',
    icon: <FiCpu />,
    customSnippet: `.btn-hex-chamfer {
  background: #0f172a;
  color: #00f2fe;
  border: none;
  clip-path: polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px);
  box-shadow: inset 0 0 0 1px #00f2fe;
}`
  },
  {
    id: 'btn-cyber-2',
    name: 'Terminal Bracket Code',
    category: 'Cyberpunk & Tech',
    cssClass: 'btn-bracket-terminal',
    tag: '[ CMD_EXEC ]',
    icon: <FiTerminal />,
    customSnippet: `.btn-bracket-terminal {
  background: #050b14;
  color: #38bdf8;
  font-family: monospace;
  border-left: 3px solid #00f2fe;
  border-right: 3px solid #00f2fe;
  border-top: 1px solid rgba(0, 242, 254, 0.2);
  border-bottom: 1px solid rgba(0, 242, 254, 0.2);
}`
  },
  {
    id: 'btn-cyber-3',
    name: 'HUD Radar Scanline',
    category: 'Cyberpunk & Tech',
    cssClass: 'btn-hud-scanline',
    tag: 'Radar Scan',
    icon: <FiCrosshair />,
    customSnippet: `.btn-hud-scanline {
  background: rgba(6, 182, 212, 0.1);
  color: #22d3ee;
  border: 1px solid #06b6d4;
  position: relative;
  overflow: hidden;
}`
  },
  {
    id: 'btn-cyber-4',
    name: 'Caution Hazard Stripes',
    category: 'Cyberpunk & Tech',
    cssClass: 'btn-warning-hazard',
    tag: 'Hazard Tape',
    icon: <FiShield />,
    customSnippet: `.btn-warning-hazard {
  background: repeating-linear-gradient(45deg, #0f172a, #0f172a 10px, rgba(234, 179, 8, 0.15) 10px, rgba(234, 179, 8, 0.15) 20px);
  color: #eab308;
  border: 1px solid #eab308;
}`
  },
  {
    id: 'btn-cyber-5',
    name: 'Mecha Segmented Armor',
    category: 'Cyberpunk & Tech',
    cssClass: 'btn-mecha-armor',
    tag: 'Mecha Plates',
    icon: <FiCpu />,
    customSnippet: `.btn-mecha-armor {
  background: #1e293b;
  color: #f1f5f9;
  border: 2px solid #64748b;
  border-radius: 4px;
  box-shadow: 0 4px 0 #0f172a;
}`
  },
  {
    id: 'btn-cyber-6',
    name: 'Printed PCB Circuit',
    category: 'Cyberpunk & Tech',
    cssClass: 'btn-cyber-chip',
    tag: 'Circuit Node',
    icon: <FiCpu />,
    customSnippet: `.btn-cyber-chip {
  background: #021a15;
  color: #10b981;
  border: 1px solid #10b981;
  border-radius: 6px;
}`
  },
  {
    id: 'btn-cyber-7',
    name: 'Stealth Tactical Crosshair',
    category: 'Cyberpunk & Tech',
    cssClass: 'btn-stealth-tactical',
    tag: 'Tactical Aim',
    icon: <FiCrosshair />,
    customSnippet: `.btn-stealth-tactical {
  background: #090d16;
  color: #94a3b8;
  border: 1px solid #334155;
  letter-spacing: 2px;
}`
  },
  {
    id: 'btn-cyber-8',
    name: 'Holographic Isometric Grid',
    category: 'Cyberpunk & Tech',
    cssClass: 'btn-holo-grid',
    tag: 'Holo Grid',
    icon: <FiRadio />,
    customSnippet: `.btn-holo-grid {
  background: rgba(6, 182, 212, 0.08);
  color: #38bdf8;
  border: 1px solid rgba(56, 189, 248, 0.5);
  background-size: 10px 10px;
}`
  },
  {
    id: 'btn-cyber-9',
    name: 'Reactor Pulse Core',
    category: 'Cyberpunk & Tech',
    cssClass: 'btn-reactor-core',
    tag: 'Arc Reactor',
    icon: <FiZap />,
    customSnippet: `.btn-reactor-core {
  background: radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, #0f172a 70%);
  color: #ffffff;
  border: 1px solid #00f2fe;
}`
  },
  {
    id: 'btn-cyber-10',
    name: 'Binary Stream Decrypt',
    category: 'Cyberpunk & Tech',
    cssClass: 'btn-data-stream',
    tag: 'Binary Stream',
    icon: <FiTerminal />,
    customSnippet: `.btn-data-stream {
  background: #070e1c;
  color: #38bdf8;
  border: 1px solid #1e3a8a;
}`
  },

  // 4. GRADIENTS & SHIMMER (10)
  {
    id: 'btn-grad-1',
    name: 'Aurora Fluid Gradient',
    category: 'Gradients & Shimmer',
    cssClass: 'btn-aurora-borealis',
    tag: 'Aurora Wave',
    icon: <HiSparkles />,
    customSnippet: `.btn-aurora-borealis {
  background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #a855f7 100%);
  color: #ffffff;
  border: none;
  box-shadow: 0 4px 20px rgba(6, 182, 212, 0.5);
}`
  },
  {
    id: 'btn-grad-2',
    name: 'Cosmic Sunset Horizon',
    category: 'Gradients & Shimmer',
    cssClass: 'btn-cosmic-sunset',
    tag: 'Sunset Glow',
    icon: <FiZap />,
    customSnippet: `.btn-cosmic-sunset {
  background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 50%, #f97316 100%);
  color: #ffffff;
  border: none;
  box-shadow: 0 4px 20px rgba(236, 72, 153, 0.4);
}`
  },
  {
    id: 'btn-grad-3',
    name: 'Cyberpunk Neon Duality',
    category: 'Gradients & Shimmer',
    cssClass: 'btn-cyber-duality',
    tag: 'Cyan & Magenta',
    icon: <FiActivity />,
    customSnippet: `.btn-cyber-duality {
  background: linear-gradient(90deg, #00f2fe 0%, #ec4899 100%);
  color: #0b1120;
  font-weight: 800;
  border: none;
}`
  },
  {
    id: 'btn-grad-4',
    name: 'Endless Metallic Shimmer',
    category: 'Gradients & Shimmer',
    cssClass: 'btn-shimmer-sweep',
    tag: 'Shimmer Flow',
    icon: <HiSparkles />,
    customSnippet: `.btn-shimmer-sweep {
  background: linear-gradient(90deg, #0f172a 0%, #38bdf8 50%, #0f172a 100%);
  background-size: 200% auto;
  color: #ffffff;
  border: 1px solid #38bdf8;
  animation: shimmerMove 3s linear infinite;
}`
  },
  {
    id: 'btn-grad-5',
    name: 'Vaporwave Pastel Wave',
    category: 'Gradients & Shimmer',
    cssClass: 'btn-vaporwave-wave',
    tag: 'Vaporwave',
    icon: <FiRadio />,
    customSnippet: `.btn-vaporwave-wave {
  background: linear-gradient(135deg, #38bdf8 0%, #f472b6 100%);
  color: #0f172a;
  border: none;
  font-weight: 700;
}`
  },
  {
    id: 'btn-grad-6',
    name: 'Radioactive Toxic Emerald',
    category: 'Gradients & Shimmer',
    cssClass: 'btn-toxic-emerald',
    tag: 'Toxic Green',
    icon: <FiZap />,
    customSnippet: `.btn-toxic-emerald {
  background: linear-gradient(135deg, #10b981 0%, #84cc16 100%);
  color: #022c22;
  font-weight: 800;
  box-shadow: 0 0 20px rgba(16, 185, 129, 0.6);
}`
  },
  {
    id: 'btn-grad-7',
    name: 'Bioluminescent Abyss',
    category: 'Gradients & Shimmer',
    cssClass: 'btn-ocean-abyss',
    tag: 'Deep Azure',
    icon: <FiShield />,
    customSnippet: `.btn-ocean-abyss {
  background: linear-gradient(135deg, #1e3a8a 0%, #06b6d4 100%);
  color: #ffffff;
  border: 1px solid #00f2fe;
}`
  },
  {
    id: 'btn-grad-8',
    name: 'Molten Magma Core',
    category: 'Gradients & Shimmer',
    cssClass: 'btn-magma-burst',
    tag: 'Molten Gold',
    icon: <FiZap />,
    customSnippet: `.btn-magma-burst {
  background: linear-gradient(135deg, #ef4444 0%, #f59e0b 100%);
  color: #ffffff;
  border: none;
  box-shadow: 0 0 20px rgba(239, 68, 68, 0.5);
}`
  },
  {
    id: 'btn-grad-9',
    name: 'Rotating Rainbow Border',
    category: 'Gradients & Shimmer',
    cssClass: 'btn-rainbow-border-flow',
    tag: 'Conic Border',
    icon: <HiSparkles />,
    customSnippet: `.btn-rainbow-border-flow {
  background: #0f172a;
  color: #ffffff;
  position: relative;
  z-index: 1;
}`
  },
  {
    id: 'btn-grad-10',
    name: 'Brushed Titanium Chrome',
    category: 'Gradients & Shimmer',
    cssClass: 'btn-hyper-metallic',
    tag: 'Titanium',
    icon: <FiShield />,
    customSnippet: `.btn-hyper-metallic {
  background: linear-gradient(180deg, #94a3b8 0%, #334155 50%, #475569 100%);
  color: #ffffff;
  border: 1px solid #cbd5e1;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
}`
  },

  // 5. 3D & NEO-RETRO (10)
  {
    id: 'btn-3d-1',
    name: 'Arcade Physical Press',
    category: '3D & Neo-Retro',
    cssClass: 'btn-arcade-push',
    tag: 'Physical Press',
    icon: <FiPlay />,
    customSnippet: `.btn-arcade-push {
  background: #06b6d4;
  color: #ffffff;
  border: none;
  border-bottom: 5px solid #0891b2;
  box-shadow: 0 6px 15px rgba(6, 182, 212, 0.4);
  transition: all 0.1s ease;
}
.btn-arcade-push:active {
  transform: translateY(4px);
  border-bottom-width: 1px;
}`
  },
  {
    id: 'btn-3d-2',
    name: 'Beveled Titan Shield',
    category: '3D & Neo-Retro',
    cssClass: 'btn-beveled-titan',
    tag: 'Beveled 3D',
    icon: <FiShield />,
    customSnippet: `.btn-beveled-titan {
  background: linear-gradient(135deg, #1e293b, #0f172a);
  color: #38bdf8;
  border-top: 2px solid #38bdf8;
  border-left: 2px solid #38bdf8;
  border-right: 2px solid #082f49;
  border-bottom: 2px solid #082f49;
}`
  },
  {
    id: 'btn-3d-3',
    name: 'Cyber Dual Rocker',
    category: '3D & Neo-Retro',
    cssClass: 'btn-cyber-toggle',
    tag: 'Rocker Switch',
    icon: <FiRadio />,
    customSnippet: `.btn-cyber-toggle {
  background: #0f172a;
  border: 1px solid #334155;
  box-shadow: inset 0 3px 6px rgba(0,0,0,0.6);
  color: #00f2fe;
}`
  },
  {
    id: 'btn-3d-4',
    name: 'Isometric Layered Stack',
    category: '3D & Neo-Retro',
    cssClass: 'btn-layered-float',
    tag: 'Layered Float',
    icon: <FiShield />,
    customSnippet: `.btn-layered-float {
  background: #0e1726;
  color: #38bdf8;
  border: 1px solid #38bdf8;
  box-shadow: 4px 4px 0 #00f2fe, 8px 8px 0 rgba(0, 242, 254, 0.2);
}`
  },
  {
    id: 'btn-3d-5',
    name: 'Dark Neu-morphic Inset',
    category: '3D & Neo-Retro',
    cssClass: 'btn-neomorphic-inset',
    tag: 'Neu-morphism',
    icon: <FiRadio />,
    customSnippet: `.btn-neomorphic-inset {
  background: #0b1120;
  border-radius: 12px;
  box-shadow: 5px 5px 12px #04070d, -5px -5px 12px #121b33;
  color: #00f2fe;
}`
  },
  {
    id: 'btn-3d-6',
    name: 'Heavy Steel Plate',
    category: '3D & Neo-Retro',
    cssClass: 'btn-heavy-steel',
    tag: 'Bolt Rivets',
    icon: <FiShield />,
    customSnippet: `.btn-heavy-steel {
  background: #1e293b;
  color: #e2e8f0;
  border: 2px solid #475569;
  box-shadow: inset 0 0 10px rgba(0,0,0,0.8);
}`
  },
  {
    id: 'btn-3d-7',
    name: 'Stepped Shadow Stair',
    category: '3D & Neo-Retro',
    cssClass: 'btn-stepped-3d',
    tag: 'Stepped Shadow',
    icon: <FiPlay />,
    customSnippet: `.btn-stepped-3d {
  background: #3b82f6;
  color: #ffffff;
  border: none;
  box-shadow: 3px 3px 0 #1d4ed8, 6px 6px 0 #1e3a8a;
}`
  },
  {
    id: 'btn-3d-8',
    name: 'Glass Block Elevate',
    category: '3D & Neo-Retro',
    cssClass: 'btn-glass-elevate',
    tag: 'Elevated Block',
    icon: <HiSparkles />,
    customSnippet: `.btn-glass-elevate {
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid #00f2fe;
  box-shadow: 0 14px 28px rgba(0,0,0,0.6), 0 0 15px rgba(0, 242, 254, 0.3);
}`
  },
  {
    id: 'btn-3d-9',
    name: 'Tactile Membrane Key',
    category: '3D & Neo-Retro',
    cssClass: 'btn-tactile-membrane',
    tag: 'Embossed Key',
    icon: <FiTerminal />,
    customSnippet: `.btn-tactile-membrane {
  background: #0f172a;
  border: 2px solid #00f2fe;
  border-radius: 8px;
  box-shadow: inset 0 2px 4px rgba(255,255,255,0.2), 0 4px 8px rgba(0,0,0,0.5);
}`
  },
  {
    id: 'btn-3d-10',
    name: 'Segmented Pill Switch',
    category: '3D & Neo-Retro',
    cssClass: 'btn-pill-switch',
    tag: 'LED Pill',
    icon: <FiActivity />,
    customSnippet: `.btn-pill-switch {
  background: rgba(15, 23, 42, 0.85);
  border: 1px solid #10b981;
  border-radius: 999px;
  color: #10b981;
  box-shadow: 0 0 14px rgba(16, 185, 129, 0.3);
}`
  },

  // 6. MICRO-ANIMATIONS (10)
  {
    id: 'btn-anim-1',
    name: 'Border Perimeter Tracer',
    category: 'Micro-Animations',
    cssClass: 'btn-border-tracer',
    tag: 'Racing Light',
    icon: <FiActivity />,
    customSnippet: `.btn-border-tracer {
  background: #0f172a;
  color: #38bdf8;
  border: 1px solid rgba(56, 189, 248, 0.3);
  position: relative;
  overflow: hidden;
}`
  },
  {
    id: 'btn-anim-2',
    name: 'Magnetic Aura Expansion',
    category: 'Micro-Animations',
    cssClass: 'btn-magnetic-hover',
    tag: 'Magnetic Pulse',
    icon: <FiRadio />,
    customSnippet: `.btn-magnetic-hover {
  background: #06b6d4;
  color: #0b1120;
  font-weight: 700;
  border: none;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.btn-magnetic-hover:hover {
  transform: scale(1.06);
  box-shadow: 0 0 30px #06b6d4;
}`
  },
  {
    id: 'btn-anim-3',
    name: 'Expanding Laser Underline',
    category: 'Micro-Animations',
    cssClass: 'btn-expanding-underline',
    tag: 'Center Laser',
    icon: <FiZap />,
    customSnippet: `.btn-expanding-underline {
  background: rgba(15, 23, 42, 0.8);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
}`
  },
  {
    id: 'btn-anim-4',
    name: 'Concentric Ripple Echo',
    category: 'Micro-Animations',
    cssClass: 'btn-ripple-wave',
    tag: 'Ripple Waves',
    icon: <FiRadio />,
    customSnippet: `.btn-ripple-wave {
  background: #0f172a;
  color: #00f2fe;
  border: 1px solid #00f2fe;
  position: relative;
}`
  },
  {
    id: 'btn-anim-5',
    name: 'Arrow Rocket Launcher',
    category: 'Micro-Animations',
    cssClass: 'btn-arrow-launcher',
    tag: 'Launch Rocket',
    icon: <FiArrowRight />,
    customSnippet: `.btn-arrow-launcher {
  background: #3b82f6;
  color: #ffffff;
  border: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: gap 0.25s ease;
}
.btn-arrow-launcher:hover {
  gap: 16px;
  box-shadow: 0 0 20px #3b82f6;
}`
  },
  {
    id: 'btn-anim-6',
    name: 'Haptic Glitch Shake',
    category: 'Micro-Animations',
    cssClass: 'btn-shake-glitch',
    tag: 'Haptic Shudder',
    icon: <FiZap />,
    customSnippet: `.btn-shake-glitch:hover {
  animation: glitchShake 0.3s ease-in-out infinite;
}`
  },
  {
    id: 'btn-anim-7',
    name: 'Solid Fill Curtain Rise',
    category: 'Micro-Animations',
    cssClass: 'btn-fill-slide-up',
    tag: 'Curtain Fill',
    icon: <FiPlay />,
    customSnippet: `.btn-fill-slide-up {
  background: transparent;
  color: #00f2fe;
  border: 1px solid #00f2fe;
  position: relative;
  overflow: hidden;
  z-index: 1;
}`
  },
  {
    id: 'btn-anim-8',
    name: 'HUD Expanding Brackets',
    category: 'Micro-Animations',
    cssClass: 'btn-corner-expand',
    tag: '4-Corners Pop',
    icon: <FiCrosshair />,
    customSnippet: `.btn-corner-expand {
  background: rgba(15, 23, 42, 0.9);
  color: #38bdf8;
  border: none;
  position: relative;
}`
  },
  {
    id: 'btn-anim-9',
    name: 'Synchronized Breathing Aura',
    category: 'Micro-Animations',
    cssClass: 'btn-breathing-aura',
    tag: 'Breathing Aura',
    icon: <FiActivity />,
    customSnippet: `.btn-breathing-aura {
  background: rgba(15, 23, 42, 0.85);
  color: #a855f7;
  border: 1px solid #a855f7;
  animation: breathingGlow 3s infinite ease-in-out;
}`
  },
  {
    id: 'btn-anim-10',
    name: 'Sparkle Starburst Flare',
    category: 'Micro-Animations',
    cssClass: 'btn-sparkle-stars',
    tag: 'Starburst Spark',
    icon: <HiSparkles />,
    customSnippet: `.btn-sparkle-stars {
  background: linear-gradient(135deg, #06b6d4, #a855f7);
  color: #ffffff;
  border: none;
  box-shadow: 0 0 25px rgba(168, 85, 247, 0.5);
}`
  }
];

export default function Buttons({ showToast }) {
  const [customText, setCustomText] = useState('Launch Mission');
  const [glowColor, setGlowColor] = useState('#06b6d4');
  const [borderRadius, setBorderRadius] = useState(10);
  const [fontSize, setFontSize] = useState(14);
  const [paddingY, setPaddingY] = useState(12);
  const [paddingX, setPaddingX] = useState(24);
  const [copiedId, setCopiedId] = useState(null);
  const [filter, setFilter] = useState('All');

  const categories = [
    'All',
    'Neon & Glow',
    'Glassmorphism',
    'Cyberpunk & Tech',
    'Gradients & Shimmer',
    '3D & Neo-Retro',
    'Micro-Animations'
  ];

  const handleCopyCode = (btn) => {
    const codeSnippet = `/* JSX */
<button className="${btn.cssClass}">
  ${btn.icon ? `<span>` : ''}${customText}${btn.icon ? `</span>` : ''}
</button>

/* CSS: ${btn.name} */
${btn.customSnippet}

/* Base Dimensions */
.${btn.cssClass} {
  padding: ${paddingY}px ${paddingX}px;
  font-size: ${fontSize}px;
  border-radius: ${borderRadius}px;
  cursor: pointer;
}`;

    navigator.clipboard.writeText(codeSnippet);
    setCopiedId(btn.id);
    if (showToast) showToast(`✨ Copied [${btn.name}] unique JSX & CSS!`);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredButtons = filter === 'All' 
    ? BUTTONS_COLLECTION 
    : BUTTONS_COLLECTION.filter(b => b.category === filter);

  return (
    <div className="buttons-page-container">
      <div className="buttons-header">
        <h1 className="buttons-title">Buttons Stash (60+ Unique Styles)</h1>
        <p className="buttons-subtitle">
          Every button is uniquely crafted with distinct cyber shaders, neon glitches, glass physics, and 3D arcade dynamics.
        </p>

        {/* Customizer Panel */}
        <div className="button-customizer-bar" style={{ borderColor: glowColor }}>
          <div className="customizer-group">
            <div className="customizer-field">
              <label>Button Text:</label>
              <input 
                type="text" 
                value={customText} 
                onChange={(e) => setCustomText(e.target.value)}
                className="customizer-input text-input"
              />
            </div>

            <div className="customizer-field">
              <label>Accent Tone:</label>
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
                type="range" min="0" max="32" 
                value={borderRadius} 
                onChange={(e) => setBorderRadius(Number(e.target.value))}
              />
            </div>

            <div className="customizer-field slider-field">
              <label>Font Size: {fontSize}px</label>
              <input 
                type="range" min="11" max="18" 
                value={fontSize} 
                onChange={(e) => setFontSize(Number(e.target.value))}
              />
            </div>

            <div className="customizer-field slider-field">
              <label>Padding: {paddingY}px {paddingX}px</label>
              <input 
                type="range" min="6" max="22" 
                value={paddingY} 
                onChange={(e) => setPaddingY(Number(e.target.value))}
              />
            </div>
          </div>

          {/* Filter Tabs */}
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
                {cat} {cat === 'All' ? `(${BUTTONS_COLLECTION.length})` : '(10)'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Buttons Grid with Distinct Styles */}
      <div className="buttons-grid">
        {filteredButtons.map((btn) => (
          <div key={btn.id} className="button-card">
            <div className="card-top-info">
              <span className="btn-tag-badge">{btn.tag}</span>
              <span className="btn-category-label">{btn.category}</span>
            </div>

            <div className="button-card-preview">
              <button 
                className={`vault-styled-btn ${btn.cssClass}`}
                style={{
                  borderRadius: btn.cssClass.includes('pill') ? '999px' : `${borderRadius}px`,
                  fontSize: `${fontSize}px`,
                  padding: `${paddingY}px ${paddingX}px`
                }}
              >
                <span className="btn-icon-slot">{btn.icon}</span>
                <span>{customText}</span>
              </button>
            </div>

            <div className="button-card-footer">
              <span className="btn-name">{btn.name}</span>
              <button 
                className="copy-btn-action"
                onClick={() => handleCopyCode(btn)}
                style={{ color: glowColor, borderColor: glowColor }}
              >
                {copiedId === btn.id ? <><FiCheck /> Copied</> : <><FiCopy /> Copy Code</>}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
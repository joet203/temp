const fs = require('fs');

// Define the 4 themes
const themes = [
  {
    name: 'Charcoal + Electric Blue',
    bgStart: '#1a1a1a',
    bgMid: '#2d2d2d',
    primary: '#0ea5e9',
    secondary: '#38bdf8',
    fileName: 'theme1-charcoal-blue.svg'
  },
  {
    name: 'Black + Neon Terminal',
    bgStart: '#000000',
    bgMid: '#0a0a0a',
    primary: '#00ff41',
    secondary: '#00ffff',
    fileName: 'theme2-black-neon.svg'
  },
  {
    name: 'Slate + Orange Coral',
    bgStart: '#1e293b',
    bgMid: '#334155',
    primary: '#f97316',
    secondary: '#fb923c',
    fileName: 'theme3-slate-orange.svg'
  },
  {
    name: 'Navy + Ice Blue',
    bgStart: '#0c1e3d',
    bgMid: '#1e3a5f',
    primary: '#60a5fa',
    secondary: '#e0f2fe',
    fileName: 'theme4-navy-ice.svg'
  }
];

// Create SVG mockup for each theme (mobile view)
themes.forEach(theme => {
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="375" height="667" viewBox="0 0 375 667" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg-${theme.fileName}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${theme.bgStart};stop-opacity:1" />
      <stop offset="50%" style="stop-color:${theme.bgMid};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${theme.bgStart};stop-opacity:1" />
    </linearGradient>
    <linearGradient id="title-${theme.fileName}" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:${theme.primary};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${theme.secondary};stop-opacity:1" />
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="375" height="667" fill="url(#bg-${theme.fileName})"/>

  <!-- Header -->
  <text x="187.5" y="50" font-family="system-ui, -apple-system" font-size="24" font-weight="700" text-anchor="middle" fill="url(#title-${theme.fileName})" filter="url(#glow)">
    System Dashboard
  </text>
  <text x="187.5" y="72" font-family="system-ui, -apple-system" font-size="10" font-weight="600" letter-spacing="2" text-anchor="middle" fill="#888">
    REAL-TIME MONITORING
  </text>

  <!-- Theme Indicator -->
  <text x="187.5" y="100" font-family="system-ui, -apple-system" font-size="11" font-weight="600" text-anchor="middle" fill="#666">
    ${theme.name}
  </text>

  <!-- Client Info Card -->
  <g transform="translate(20, 120)">
    <rect width="335" height="220" rx="12" fill="${theme.bgStart}" fill-opacity="0.6" stroke="${theme.primary}" stroke-width="1" stroke-opacity="0.3"/>

    <text x="15" y="25" font-family="system-ui, -apple-system" font-size="14" font-weight="700" fill="${theme.primary}">
      💻 Client Information
    </text>
    <circle cx="310" cy="20" r="4" fill="${theme.primary}" opacity="0.8" filter="url(#glow)"/>

    <!-- Info rows -->
    <text x="15" y="55" font-family="system-ui, -apple-system" font-size="11" fill="#888">Browser</text>
    <text x="320" y="55" font-family="system-ui, -apple-system" font-size="11" font-weight="600" fill="#fff" text-anchor="end">Chrome</text>
    <line x1="15" y1="62" x2="320" y2="62" stroke="#fff" stroke-opacity="0.05"/>

    <text x="15" y="80" font-family="system-ui, -apple-system" font-size="11" fill="#888">Language</text>
    <text x="320" y="80" font-family="system-ui, -apple-system" font-size="11" font-weight="600" fill="#fff" text-anchor="end">en-US</text>
    <line x1="15" y1="87" x2="320" y2="87" stroke="#fff" stroke-opacity="0.05"/>

    <text x="15" y="105" font-family="system-ui, -apple-system" font-size="11" fill="#888">Screen</text>
    <text x="320" y="105" font-family="system-ui, -apple-system" font-size="11" font-weight="600" fill="#fff" text-anchor="end">375 x 667</text>
    <line x1="15" y1="112" x2="320" y2="112" stroke="#fff" stroke-opacity="0.05"/>

    <text x="15" y="130" font-family="system-ui, -apple-system" font-size="11" fill="#888">Pixel Ratio</text>
    <text x="320" y="130" font-family="system-ui, -apple-system" font-size="11" font-weight="600" fill="#fff" text-anchor="end">2x</text>
    <line x1="15" y1="137" x2="320" y2="137" stroke="#fff" stroke-opacity="0.05"/>

    <text x="15" y="155" font-family="system-ui, -apple-system" font-size="11" fill="#888">CPU Cores</text>
    <text x="320" y="155" font-family="system-ui, -apple-system" font-size="11" font-weight="600" fill="#fff" text-anchor="end">8</text>
    <line x1="15" y1="162" x2="320" y2="162" stroke="#fff" stroke-opacity="0.05"/>

    <text x="15" y="180" font-family="system-ui, -apple-system" font-size="11" fill="#888">Connection</text>
    <text x="320" y="180" font-family="system-ui, -apple-system" font-size="11" font-weight="600" fill="#fff" text-anchor="end">4g</text>
    <line x1="15" y1="187" x2="320" y2="187" stroke="#fff" stroke-opacity="0.05"/>

    <text x="15" y="205" font-family="system-ui, -apple-system" font-size="11" fill="#888">Platform</text>
    <text x="320" y="205" font-family="system-ui, -apple-system" font-size="11" font-weight="600" fill="#fff" text-anchor="end">Linux</text>
  </g>

  <!-- Server Info Card -->
  <g transform="translate(20, 360)">
    <rect width="335" height="220" rx="12" fill="${theme.bgStart}" fill-opacity="0.6" stroke="${theme.primary}" stroke-width="1" stroke-opacity="0.3"/>

    <text x="15" y="25" font-family="system-ui, -apple-system" font-size="14" font-weight="700" fill="${theme.primary}">
      🖥️ Server Information
    </text>
    <circle cx="310" cy="20" r="4" fill="${theme.primary}" opacity="0.8" filter="url(#glow)"/>

    <!-- Info rows -->
    <text x="15" y="55" font-family="system-ui, -apple-system" font-size="11" fill="#888">Platform</text>
    <text x="320" y="55" font-family="system-ui, -apple-system" font-size="11" font-weight="600" fill="#fff" text-anchor="end">linux (x64)</text>
    <line x1="15" y1="62" x2="320" y2="62" stroke="#fff" stroke-opacity="0.05"/>

    <text x="15" y="80" font-family="system-ui, -apple-system" font-size="11" fill="#888">CPU</text>
    <text x="320" y="80" font-family="system-ui, -apple-system" font-size="11" font-weight="600" fill="#fff" text-anchor="end">8 cores</text>
    <line x1="15" y1="87" x2="320" y2="87" stroke="#fff" stroke-opacity="0.05"/>

    <text x="15" y="105" font-family="system-ui, -apple-system" font-size="11" fill="#888">Memory</text>
    <text x="320" y="105" font-family="system-ui, -apple-system" font-size="11" font-weight="600" fill="#fff" text-anchor="end">2.5GB / 8GB</text>
    <line x1="15" y1="112" x2="320" y2="112" stroke="#fff" stroke-opacity="0.05"/>

    <text x="15" y="130" font-family="system-ui, -apple-system" font-size="11" fill="#888">Uptime</text>
    <text x="320" y="130" font-family="system-ui, -apple-system" font-size="11" font-weight="600" fill="#fff" text-anchor="end">2d 5h 23m</text>
    <line x1="15" y1="137" x2="320" y2="137" stroke="#fff" stroke-opacity="0.05"/>

    <text x="15" y="155" font-family="system-ui, -apple-system" font-size="11" fill="#888">Node</text>
    <text x="320" y="155" font-family="system-ui, -apple-system" font-size="11" font-weight="600" fill="#fff" text-anchor="end">v20.11.0</text>
    <line x1="15" y1="162" x2="320" y2="162" stroke="#fff" stroke-opacity="0.05"/>

    <text x="15" y="180" font-family="system-ui, -apple-system" font-size="11" fill="#888">Environment</text>
    <text x="320" y="180" font-family="system-ui, -apple-system" font-size="11" font-weight="600" fill="#fff" text-anchor="end">development</text>
  </g>

  <!-- Refresh Button -->
  <defs>
    <linearGradient id="btn-${theme.fileName}" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:${theme.primary};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${theme.secondary};stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect x="250" y="615" width="105" height="36" rx="18" fill="url(#btn-${theme.fileName})" filter="url(#glow)"/>
  <text x="302.5" y="638" font-family="system-ui, -apple-system" font-size="13" font-weight="700" text-anchor="middle" fill="#000">
    ↻ Refresh
  </text>
</svg>`;

  fs.writeFileSync(theme.fileName, svg);
  console.log(`Created ${theme.fileName}`);
});

console.log('\nAll mockup screenshots created successfully!');
console.log('Server is running at http://localhost:3000');
console.log('View preview at http://localhost:3000/preview.html');
console.log('View full dashboard at http://localhost:3000/theme-switcher.html');

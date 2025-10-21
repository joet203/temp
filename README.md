# System Environment Dashboard

A contemporary, dark-mode web application that displays real-time server and client environment information in a sleek, compact interface.

## Features

- **Client Information**: Browser details, screen resolution, viewport size, device capabilities, network connection, and more
- **Server Information**: CPU, memory, uptime, network interfaces, Node.js version, and system details
- **Modern UI**: Dark mode with gradient effects, smooth animations, and responsive design
- **Real-time Updates**: Refresh button to get the latest information
- **Responsive**: Works on desktop, tablet, and mobile devices

## Tech Stack

- **Frontend**: HTML5, CSS3 (with modern gradients and animations), Vanilla JavaScript
- **Backend**: Node.js with Express
- **Styling**: Contemporary dark mode with cyan/green gradient accents

## Installation

1. Install dependencies:
```bash
npm install
```

## Running the Application

Start the server:
```bash
npm start
```

Then open your browser and navigate to:
```
http://localhost:3000
```

## Environment Variables

- `PORT`: Server port (default: 3000)
- `NODE_ENV`: Environment mode (default: development)

## What Information is Displayed?

### Client Information
- Browser name and version
- Language and locale
- Online/offline status
- Screen resolution and viewport size
- Color depth and pixel ratio
- CPU cores and device memory
- Connection type and speed
- Platform and OS
- Local time and timezone

### Server Information
- Hostname
- Platform and architecture
- CPU model and core count
- Total and free memory
- System uptime
- Load average
- Node.js version
- Server time and timezone
- Environment mode
- Network interfaces and IP addresses

## Features

- **Pulsing Status Indicators**: Show active monitoring
- **Hover Effects**: Cards lift and glow on hover
- **Smooth Animations**: Fade-in effects on page load
- **Loading States**: Elegant spinners while data loads
- **Error Handling**: Graceful error messages if server data fails to load
- **Responsive Grid**: Automatically adjusts layout based on screen size

## Design

The design features:
- Deep blue/purple gradient background
- Glassmorphic cards with backdrop blur
- Cyan (#00d4ff) and green (#00ff88) gradient accents
- Smooth transitions and hover effects
- Contemporary typography
- Compact, information-dense layout

## Browser Support

Works on all modern browsers that support:
- ES6+ JavaScript
- CSS Grid and Flexbox
- CSS animations and gradients
- Navigator API

## License

MIT

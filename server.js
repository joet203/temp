const express = require('express');
const os = require('os');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(__dirname));

// Redirect root to theme switcher
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'theme-switcher.html'));
});

// API endpoint for server information
app.get('/api/server-info', (req, res) => {
  const serverInfo = {
    hostname: os.hostname(),
    platform: os.platform(),
    architecture: os.arch(),
    cpus: os.cpus().length,
    cpuModel: os.cpus()[0].model,
    totalMemory: `${(os.totalmem() / (1024 ** 3)).toFixed(2)} GB`,
    freeMemory: `${(os.freemem() / (1024 ** 3)).toFixed(2)} GB`,
    uptime: formatUptime(os.uptime()),
    nodeVersion: process.version,
    serverTime: new Date().toISOString(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    networkInterfaces: getNetworkInfo(),
    loadAverage: os.loadavg().map(avg => avg.toFixed(2)),
    tempDir: os.tmpdir(),
    homeDir: os.homedir(),
    env: {
      nodeEnv: process.env.NODE_ENV || 'development',
      port: PORT
    }
  };

  res.json(serverInfo);
});

// Helper function to format uptime
function formatUptime(seconds) {
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);

  return `${days}d ${hours}h ${minutes}m ${secs}s`;
}

// Helper function to get network interface info
function getNetworkInfo() {
  const interfaces = os.networkInterfaces();
  const result = {};

  for (const [name, addrs] of Object.entries(interfaces)) {
    result[name] = addrs
      .filter(addr => !addr.internal)
      .map(addr => ({
        address: addr.address,
        family: addr.family,
        mac: addr.mac
      }));
  }

  return result;
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

const os = require('os');

function getIPv4DefaultGateway() {
  const interfaces = os.networkInterfaces();
  for (const key in interfaces) {
    for (const iface of interfaces[key]) {
      if (!iface.internal && iface.family === 'IPv4' && iface.gateway) {
        return iface.gateway;
      }
    }
  }
  return '127.0.0.1';
}

module.exports = getIPv4DefaultGateway;
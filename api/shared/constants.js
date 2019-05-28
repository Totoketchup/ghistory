let dotenv = require('dotenv');
dotenv.config({ silent: true });
const env = process.env;

exports.GITHUB_CLIENT_ID = env.GITHUB_CLIENT_ID;
exports.GITHUB_CLIENT_SECRET = env.GITHUB_CLIENT_SECRET;
exports.PLATFORM = env.PLATFORM || 'http://127.0.0.1';
exports.BACKEND_PORT = env.BACKEND_PORT || '9001';
exports.FRONTEND_PORT = env.FRONTEND_PORT || '3000';
exports.BACKEND_ADDRESS = exports.PLATFORM + ':' + exports.BACKEND_PORT;
exports.FRONTEND_ADDRESS = exports.PLATFORM + ':' + exports.FRONTEND_PORT;

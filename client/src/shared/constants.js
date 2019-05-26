
const PLATFORM_NAME = process.env.REACT_APP_PLATFORM || 'localhost';
const BACKEND_PORT = '9001';
export const BACKEND_ROOT = PLATFORM_NAME + ':' + BACKEND_PORT

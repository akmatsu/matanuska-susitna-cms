import pino from 'pino';

// Logs go to stdout so Docker can collect and rotate them.
export const logger = pino({
  level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
});

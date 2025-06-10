import pino from 'pino';

export const logger = pino({
  level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',

  transport: {
    targets: [
      {
        target: 'pino/file',
        options: {
          destination: './logs/app.log',
          mkdir: true, // Automatically create the directory if it doesn't exist
        },
      },
    ],
  },
});

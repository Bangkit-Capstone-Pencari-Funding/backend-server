const app = require('./app');
const config = require('./config');
const logger = require('./config/logger');
const prisma = require('./utils/prisma');

let server;
async function init() {
  server = app.listen(config.port, () => {
    logger.info(`Listening on http://localhost:${config.port}`);
  });
}

init()
  
const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info('Server closed');
      prisma.$disconnect()
      process.exit(1);
    });
  } else {
    prisma.$disconnect()
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  logger.error(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  logger.info('SIGTERM received');
  if (server) {
    server.close();
  }
});

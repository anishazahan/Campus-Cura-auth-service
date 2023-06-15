import mongoose from 'mongoose';
import app from './app';
import config from './Config/index';
import { logger, errorlogger } from './shared/logger';
import { Server } from 'http';

process.on('uncaughtException', error => {
  errorlogger.error(error);
  process.exit(1);
});

let server: Server;

async function dbConnected() {
  try {
    await mongoose.connect(config.database_url as string);
    logger.info('Database Connected Successfully');

    server = app.listen(config.port, () => {
      logger.info(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    errorlogger.error('failed to database connected');
  }

  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        errorlogger.error(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

dbConnected();

process.on('SIGTERM', () => {
  logger.info('SIGTERM is received');
  if (server) {
    server.close();
  }
});

//   campusCura-auth-admin ,7JkFRBhivPXV3qr5

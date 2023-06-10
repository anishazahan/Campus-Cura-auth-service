import mongoose from 'mongoose'
import app from './app'
import config from './Config/index'
import { logger, errorlogger } from './shared/logger'

async function dbConnected() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('Database Connected Successfully')

    app.listen(config.port, () => {
      logger.info(`Example app listening on port ${config.port}`)
    })
  } catch (error) {
    errorlogger.error('failed to database connected')
  }
}

dbConnected()

//   campusCura-auth-admin ,7JkFRBhivPXV3qr5

import Keyv from '@keyvhq/core'
import KeyvRedis from '@keyvhq/redis'

import { isRedisEnabled, redisUrl, redisNamespace } from './config'

let db: Keyv

if (isRedisEnabled && redisUrl) {
  try {
    const keyvRedis = new KeyvRedis(redisUrl)
    db = new Keyv({ store: keyvRedis, namespace: redisNamespace || undefined })
    
    // Handle Redis connection errors gracefully
    db.on('error', (err) => {
      console.warn('Redis connection error:', err.message)
      console.warn('Consider checking your Redis credentials or disabling Redis in site.config.ts')
    })
  } catch (error) {
    console.warn('Failed to initialize Redis connection:', error.message)
    console.warn('Falling back to in-memory storage. Consider checking your Redis configuration.')
    db = new Keyv()
  }
} else {
  db = new Keyv()
}

export { db }

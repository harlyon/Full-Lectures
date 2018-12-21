module.exports = {
  ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 4000,
  URL: process.env.BASE_URL || 'http://localhost:4000',
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://harry:harry24680@ds033400.mlab.com:33400/newdb',
  JWT_SECRET: process.env.JWT_SECRET || 'secret1'
}
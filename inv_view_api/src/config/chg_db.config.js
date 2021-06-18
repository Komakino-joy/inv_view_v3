module.exports = {
  url: process.env.DEDICATED_CLIENT_DATABASE_URL,
  dialect: 'postgres',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}; 


module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "postgres",
    DB: "chegg_inventory",
    dialect: "postgres",
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }; 
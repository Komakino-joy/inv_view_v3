const dbConfig = require("../../config/chg_db.config");

const Sequelize = require("sequelize");

Sequelize.DATE.prototype._stringify = function _stringify(date, options) {
  return this._applyTimezone(date, options).format('YYYY-MM-DD HH:mm:ss.SSS');
};

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.not_putaway = require("./not_putaway.model.js")(sequelize, Sequelize);
db.empty_active_locations = require("./empty_active_locations.model.js")(sequelize, Sequelize);
db.transitional_inventory = require("./transitional_inventory.model")(sequelize, Sequelize);
db.counts = require("./counts.model")(sequelize, Sequelize);
db.adjustment_data = require("./adj_data.model")(sequelize, Sequelize);
db.on_hand_inventory_by_day = require("./daily_on_hand.model")(sequelize, Sequelize);



module.exports = db;
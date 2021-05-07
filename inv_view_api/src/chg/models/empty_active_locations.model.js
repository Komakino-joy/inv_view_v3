module.exports = (sequelize, Sequelize) => {
    const EmptyActiveLocations = sequelize.define("empty_active_locations", {
      
      aisle: {
        type: Sequelize.STRING
      },
      bay: {
        type: Sequelize.STRING
      },
      lvl: {
        type: Sequelize.STRING
      },
      pick_zone: {
        type: Sequelize.STRING
      },
      slot_type: {
        type: Sequelize.STRING
      },
      position: {
        type: Sequelize.STRING
      },      
      display_location: {
        type: Sequelize.STRING
      }
    }, 
    {
      freezeTableName: true
    },);
  
    return EmptyActiveLocations;
  };
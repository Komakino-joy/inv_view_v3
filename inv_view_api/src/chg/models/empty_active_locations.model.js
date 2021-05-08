module.exports = (sequelize, Sequelize) => {
    const EmptyActiveLocations = sequelize.define("empty_active_locations", {
      
      pick_zone: {
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
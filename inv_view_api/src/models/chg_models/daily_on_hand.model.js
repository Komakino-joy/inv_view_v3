module.exports = (sequelize, Sequelize) => {
    const DailyOnHand = sequelize.define("on_hand_inventory_by_day", {
      
      date_recorded: {
        type: Sequelize.DATE
      },
      units_on_hand: {
        type: Sequelize.INTEGER
      },
      transfer_pr: {
        type: Sequelize.INTEGER
      },
      return_pr: {
        type: Sequelize.INTEGER
      },
      damages: {
        type: Sequelize.INTEGER
      }
    }, 
    {
      freezeTableName: true
    },);
  
    return DailyOnHand;
  };
module.exports = (sequelize, Sequelize) => {
    const TransitionalInventory = sequelize.define("transitional_inventory", {
      
      on_hand_qty: {
        type: Sequelize.INTEGER
      },
      article: {
        type: Sequelize.STRING
      },     
      created_dttm: {
        type: Sequelize.DATE
      },
    }, 
    {
      freezeTableName: true
    },);
  
    return TransitionalInventory;
  };
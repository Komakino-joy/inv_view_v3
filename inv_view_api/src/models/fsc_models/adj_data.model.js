module.exports = (sequelize, Sequelize) => {
    const Adjustments = sequelize.define("adjustment_data", {
      
      user_id: {
        type: Sequelize.STRING
      }, 
      customer: {
        type: Sequelize.STRING
      },     
      qty: {
        type: Sequelize.INTEGER
      },
      unit_price: {
        type: Sequelize.INTEGER
      },
      sku: {
        type: Sequelize.STRING
      },    
      date_time: {
        type: Sequelize.DATE
      },    
      reason: {
        type: Sequelize.STRING
      }
    }, 
    {
      freezeTableName: true
    },);
  
    return Adjustments;
  };
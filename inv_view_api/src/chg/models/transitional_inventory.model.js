module.exports = (sequelize, Sequelize) => {
    const TransitionalInventory = sequelize.define("transitional_inventory", {
      
      company: {
        type: Sequelize.STRING
      },
      trans_inv_type: {
        type: Sequelize.STRING
      },
      on_hand_qty: {
        type: Sequelize.INTEGER
      },
      article: {
        type: Sequelize.STRING
      },
      article_description: {
        type: Sequelize.STRING
      },
      article_barcode: {
        type: Sequelize.STRING
      },      
      created_dttm: {
        type: Sequelize.DATE
      },
      last_updated_dttm: {
        type: Sequelize.DATE
      }
    }, 
    {
      freezeTableName: true
    },);
  
    return TransitionalInventory;
  };
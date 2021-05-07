module.exports = (sequelize, Sequelize) => {
    const Adjustments = sequelize.define("adjustment_data", {
      
      fc: {
        type: Sequelize.STRING
      },
      company: {
        type: Sequelize.STRING
      },
      tran_type: {
        type: Sequelize.STRING
      },
      tran_code: {
        type: Sequelize.STRING
      },
      actn_code: {
        type: Sequelize.STRING
      },
      pix_description: {
        type: Sequelize.STRING
      },      
      reason_code: {
        type: Sequelize.STRING
      },
      ilpn: {
        type: Sequelize.STRING
      },
      serial_number: {
        type: Sequelize.STRING
      },
      user_comments: {
        type: Sequelize.STRING
      },      
      user_id: {
        type: Sequelize.STRING
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      tran_number: {
        type: Sequelize.STRING
      },      
      qty: {
        type: Sequelize.INTEGER
      },
      sku: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },     
      date_time: {
        type: Sequelize.DATE
      }
    }, 
    {
      freezeTableName: true
    },);
  
    return Adjustments;
  };
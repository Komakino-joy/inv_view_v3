module.exports = (sequelize, Sequelize) => {
    const Counts = sequelize.define("counts", {
      
      location: {
        type: Sequelize.STRING
      },
      loc_type: {
        type: Sequelize.STRING
      },
      count_type: {
        type: Sequelize.STRING
      },
      count_description: {
        type: Sequelize.STRING
      },
      task: {
        type: Sequelize.STRING
      },
      lpn: {
        type: Sequelize.STRING
      },      
      item: {
        type: Sequelize.STRING
      },
      item_description: {
        type: Sequelize.STRING
      },
      item_velocity: {
        type: Sequelize.STRING
      },
      expected_qty: {
        type: Sequelize.STRING
      },      
      expected_cost: {
        type: Sequelize.STRING
      },
      counted_qty: {
        type: Sequelize.STRING
      },
      counted_cost: {
        type: Sequelize.STRING
      },
      variance_qty: {
        type: Sequelize.STRING
      },      
      variance_cost: {
        type: Sequelize.INTEGER
      },
      counted_dttm: {
        type: Sequelize.STRING
      },
      counted_by: {
        type: Sequelize.STRING
      },     
      reason_code: {
        type: Sequelize.STRING
      },     
      status: {
        type: Sequelize.STRING
      }
    }, 
    {
      freezeTableName: true
    },);
  
    return Counts;
  };
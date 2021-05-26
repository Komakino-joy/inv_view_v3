module.exports = (sequelize, Sequelize) => {
    const Counts = sequelize.define("counts", {
      customer: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      loc_type: {
        type: Sequelize.STRING
      },
      task: {
        type: Sequelize.STRING
      },      
      item: {
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
    }, 
    {
      freezeTableName: true
    },);
  
    return Counts;
  };
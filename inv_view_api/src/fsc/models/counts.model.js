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
        type: Sequelize.INTEGER
      },      
      expected_cost: {
        type: Sequelize.DOUBLE
      },
      counted_qty: {
        type: Sequelize.INTEGER
      },
      counted_cost: {
        type: Sequelize.DOUBLE
      },
      variance_qty: {
        type: Sequelize.INTEGER
      },      
      variance_cost: {
        type: Sequelize.DOUBLE
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
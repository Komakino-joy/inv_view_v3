module.exports = (sequelize, Sequelize) => {
    const Counts = sequelize.define("counts", {
      
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
        type: Sequelize.INTEGER
      },
      counted_qty: {
        type: Sequelize.INTEGER
      },
      counted_cost: {
        type: Sequelize.INTEGER
      },
      variance_qty: {
        type: Sequelize.INTEGER
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
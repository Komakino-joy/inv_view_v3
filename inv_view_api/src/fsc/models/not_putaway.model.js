module.exports = (sequelize, Sequelize) => {
    const NotPutaway = sequelize.define("not_putaway", {
      
      asn: {
        type: Sequelize.STRING
      },
      lpn_status: {
        type: Sequelize.STRING
      },
      lpn: {
        type: Sequelize.STRING
      },
      item_name: {
        type: Sequelize.STRING
      },
      company: {
        type: Sequelize.STRING
      },
      origin: {
        type: Sequelize.STRING
      },
      created_src: {
        type: Sequelize.STRING
      },
      num_of_days_created: {
        type: Sequelize.STRING
      },
      created_dttm: {
        type: Sequelize.STRING
      },

    }, 
    {
      freezeTableName: true
    },);
  
    return NotPutaway;
  };
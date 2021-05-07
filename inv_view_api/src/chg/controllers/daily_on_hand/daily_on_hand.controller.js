const sequelize = require('../../models/index');

const handleGetDailyOnHand= (req, res) => {
  sequelize.sequelize.query(`
        select * from on_hand_inventory_by_day order by date_recorded;
    `)
.then(results => res.status(200).send(results[1].rows))
.catch(error => res.status(400).send('Something went wrong.'));
};

const handleGetMaxDailyOnHand= (req, res) => {
    sequelize.sequelize.query(`
    SELECT MAX(date_recorded) FROM on_hand_inventory_by_day;
      `)
  .then(results => res.status(200).send(results[1].rows[0].max))
  .catch(error => res.status(400).send('Something went wrong.'));
  };


const insertNewDailyOnHand = (req, res) => {
    return sequelize.on_hand_inventory_by_day.create({
        date_recorded: req.body.date,
        units_on_hand: req.body.on_hand,
        transfer_pr: req.body.transfer,
        return_pr: req.body.return,
        damages: req.body.damage
    }).then(function (data) {
        if (data) {
            res.send(data);
        } else {
            res.status(400).send('Error in insert new record');
        }
  });
}

const deleteDailyOnHand = (req, res) => {
    console.log('I WANNA DESTROY!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    console.log(req.body)
    return sequelize.on_hand_inventory_by_day.destroy({
        where: { id : req.body.id }
    }).then(count => {
        if (!count) {
         return res.status(404).send({error: 'Record Does Not Exist'});
        }
        res.status(204).send()
  });
}

module.exports = {
    handleGetDailyOnHand,
    insertNewDailyOnHand,
    handleGetMaxDailyOnHand,
    deleteDailyOnHand
};
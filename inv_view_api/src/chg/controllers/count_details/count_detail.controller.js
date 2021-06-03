const knex_db = require('../../config/knex.db');

const handleGetCountsByDay = (req, res) => {
    knex_db.raw(`
    select 
    counted_dttm::date as counted_date_time, 
    count("id") as total_counts_performed, 
    count(distinct(counts.location)) as unique_locs_counted, 
    sum(expected_qty) as total_expected_qty, 
    sum(counted_qty) as total_counted_qty, 
    sum(variance_qty) as total_variance_qty 
    from counts group by counted_dttm::date order by "counted_date_time";
`)
.then(results => res.status(200).send(results.rows))
.catch(error => res.status(400).send('Something went wrong.'));
};


const handleGetCountsByUser = (req, res) => {
        knex_db.raw(`
            SELECT 
                counted_by AS username, 
                COUNT((id)),
                COUNT((id)) / COUNT(DISTINCT DATE_PART('day', counted_dttm)) as avg_counts_by_day
            FROM counts 
            WHERE DATE_PART('year', counted_dttm) = DATE_PART('year',CURRENT_DATE) 
            GROUP BY counted_by 
            ORDER BY count desc;
        `)
        .then(results => res.status(200).send(results.rows))
        .catch(error => res.status(400).send('Something went wrong.'));
    };
  
const handleGetCountsByUserByDay = (req, res) => {
    knex_db.raw(`
    SELECT 
        DATE(counted_dttm), 
        counted_by, 
        wm_users.full_name,
        COUNT(c."id") AS total_counts 
    FROM counts c 
        LEFT JOIN 
        wm_users ON wm_users.username = c.counted_by
    GROUP BY 
        DATE(counted_dttm), 
        counted_by,
        wm_users.full_name
    ORDER BY 
        DATE(counted_dttm) DESC;

    `)
    .then(results => res.status(200).send(results.rows))
    .catch(error => res.status(400).send('Something went wrong.'));
};

module.exports = {
    handleGetCountsByDay,
    handleGetCountsByUser,
    handleGetCountsByUserByDay
};
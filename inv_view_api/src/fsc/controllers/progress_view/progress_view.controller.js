
const knex_db = require('../../models/knex.db');

const handleGetOccupiedCounted = (req, res) => {
    knex_db.raw(`
    SELECT Count(*) AS OCCUPIED_LOCATIONS_COUNTED
    FROM (SELECT locn_hdr.dsp_locn 
        FROM (locn_hdr 
        LEFT JOIN empty_active_locations 
        ON locn_hdr.dsp_locn = empty_active_locations.display_location) 
        LEFT JOIN counts
        ON locn_hdr.dsp_locn=counts.location 
        WHERE (((empty_active_locations.display_location) IS Null) 
        AND ((counts.location) IS NOT Null)) GROUP BY locn_hdr.dsp_locn)  AS "Alias";
`)
.then(results => res.status(200).send(results.rows[0].occupied_locations_counted))
.catch(error => res.status(400).send('Something went wrong.'));
};

const handleGetOccupiedNotCounted = (req, res) => {
    knex_db.raw(`
    SELECT 
    Count(locn_hdr.dsp_locn) AS OCCUPIED_LOCATIONS_UNCOUNTED
    FROM (locn_hdr 
        LEFT JOIN empty_active_locations 
        ON locn_hdr.dsp_locn = empty_active_locations.display_location) 
        LEFT JOIN counts ON locn_hdr.dsp_locn = counts.location
    GROUP BY empty_active_locations.display_location, counts.location
    HAVING (((empty_active_locations.display_location) Is Null) And ((counts.location) Is Null));
`)
.then(results => res.status(200).send(results.rows[0].occupied_locations_uncounted))
.catch(error => res.status(400).send('Something went wrong.'));
};

const handleGetEmptyCounted = (req, res) => {
    knex_db.raw(`
    SELECT 
    Count(*) AS EMPTY_LOCATIONS_COUNTED
    FROM (
        SELECT locn_hdr.dsp_locn 
        FROM locn_hdr 
        LEFT JOIN empty_active_locations ON locn_hdr.dsp_locn = empty_active_locations.display_location 
        LEFT JOIN counts ON locn_hdr.dsp_locn = counts.location 
        WHERE (((empty_active_locations.display_location) IS NOT Null) 
        AND ((counts.location) Is Not Null)) 
        GROUP BY locn_hdr.dsp_locn)  AS foo;
`)
.then(results => res.status(200).send(results.rows[0].empty_locations_counted))
.catch(error => res.status(400).send('Something went wrong.'));
};

const handleGetEmptyNotCounted = (req, res) => {
    knex_db.raw(`
    SELECT COUNT
    (empty_active_locations.display_location) AS EMPTY_LOCATIONS_UNCOUNTED
    FROM 
    locn_hdr 
    LEFT JOIN empty_active_locations 
    ON locn_hdr.dsp_locn = empty_active_locations.display_location 
    LEFT JOIN counts ON locn_hdr.dsp_locn= counts.location
    WHERE counts.location Is Null;
`)
.then(results => res.status(200).send(results.rows[0].empty_locations_uncounted))
.catch(error => res.status(400).send('Something went wrong.'));
};

const handleGetUniqueLocationsCounted = (req, res) => {
    knex_db.raw(`
    SELECT Count(*) AS DISTINCT_LOCATIONS_COUNTED
    FROM (SELECT DISTINCT counts.location FROM counts GROUP BY counts.location)  AS foo;
`)
.then(results => res.status(200).send(results.rows[0].distinct_locations_counted))
.catch(error => res.status(400).send('Something went wrong.'));
};

const handleGetCountVariances = (req, res) => {
    knex_db.raw(`
    SELECT Count(*) AS VARIANCES
    FROM (SELECT counts.variance_qty FROM counts WHERE counts.variance_qty != 0)  AS foo;
`)
.then(results => res.status(200).send(results.rows[0].variances))
.catch(error => res.status(400).send('Something went wrong.'));
};

const handleGetTotalExpectedQty = (req, res) => {
    knex_db.raw(`
    SELECT DISTINCT(SUM(counts.expected_qty)) AS "SumOfExpectedQTY"
    FROM counts
    WHERE location like '%SH%';
`)
.then(results => res.status(200).send(results.rows[0].SumOfExpectedQTY))
.catch(error => res.status(400).send('Something went wrong.'));
};

const handleGetNeTotalVariance = (req, res) => {
    knex_db.raw(`
    SELECT DISTINCT Sum(counts.variance_qty) AS "SumOfVarianceQTY"
    FROM counts WHERE counts.location like '%SH%'; 
`)
.then(results => res.status(200).send(results.rows[0].SumOfVarianceQTY))
.catch(error => res.status(400).send('Something went wrong.'));
};

const handleGetAbsTotalVariance = (req, res) => {
    knex_db.raw(`
    SELECT DISTINCT Sum(Abs(counts.variance_qty)) AS "SumOfVarianceQTY"
    FROM counts
    WHERE counts.location Like '%SH%';
`)
.then(results => res.status(200).send(results.rows[0].SumOfVarianceQTY))
.catch(error => res.status(400).send('Something went wrong.'));
};

const handleGetNotPutawayZero = (req, res) => {
    knex_db.raw(`
    SELECT
    Count(not_putaway.lpn) AS TOTAL_LPNS_NOT_PUTAWAY_0_DAYS
    FROM not_putaway
    WHERE CURRENT_DATE - created_dttm::date < 1;
`)
.then(results => res.status(200).send(results.rows[0].total_lpns_not_putaway_0_days))
.catch(error => res.status(400).send('Something went wrong.'));
};

const handleGetNotPutawayOne = (req, res) => {
    knex_db.raw(`
    SELECT
    Count(not_putaway.lpn) AS TOTAL_LPNS_NOT_PUTAWAY_1_DAY
    FROM not_putaway
    WHERE CURRENT_DATE - created_dttm::date = 1;    
`)
.then(results => res.status(200).send(results.rows[0].total_lpns_not_putaway_1_day))
.catch(error => res.status(400).send('Something went wrong.'));
};

const handleGetNotPutawayTwo = (req, res) => {
    knex_db.raw(`
    SELECT
    Count(not_putaway.lpn) AS TOTAL_LPNS_NOT_PUTAWAY_2_DAY
    FROM not_putaway
    WHERE CURRENT_DATE - created_dttm::date = 2; 
`)
.then(results => res.status(200).send(results.rows[0].total_lpns_not_putaway_2_day))
.catch(error => res.status(400).send('Something went wrong.'));
};

const handleGetNotPutawayThree = (req, res) => {
    knex_db.raw(`
    SELECT
    Count(not_putaway.lpn) AS TOTAL_LPNS_NOT_PUTAWAY_3_DAY
    FROM not_putaway
    WHERE CURRENT_DATE - created_dttm::date = 3;  
`)
.then(results => res.status(200).send(results.rows[0].total_lpns_not_putaway_3_day))
.catch(error => res.status(400).send('Something went wrong.'));
};

const handleGetNotPutawayFour = (req, res) => {
    knex_db.raw(`
    SELECT
    Count(not_putaway.lpn) AS TOTAL_LPNS_NOT_PUTAWAY_4_DAY
    FROM not_putaway
    WHERE CURRENT_DATE - created_dttm::date = 4;  
`)
.then(results => res.status(200).send(results.rows[0].total_lpns_not_putaway_4_day))
.catch(error => res.status(400).send('Something went wrong.'));
};

const handleGetNotPutawayFive = (req, res) => {
    knex_db.raw(`
    SELECT
    Count(not_putaway.lpn) AS TOTAL_LPNS_NOT_PUTAWAY_5_DAY
    FROM not_putaway
    WHERE CURRENT_DATE - created_dttm::date = 5;   
`)
.then(results => res.status(200).send(results.rows[0].total_lpns_not_putaway_5_day))
.catch(error => res.status(400).send('Something went wrong.'));
};

const handleGetNotPutawaySix = (req, res) => {
    knex_db.raw(`
    SELECT
    Count(not_putaway.lpn) AS TOTAL_LPNS_NOT_PUTAWAY_6_DAY
    FROM not_putaway
    WHERE CURRENT_DATE - created_dttm::date = 6;  
`)
.then(results => res.status(200).send(results.rows[0].total_lpns_not_putaway_6_day))
.catch(error => res.status(400).send('Something went wrong.'));
};

const handleGetNotPutawaySeven = (req, res) => {
    knex_db.raw(`
    SELECT
    Count(not_putaway.lpn) AS TOTAL_LPNS_NOT_PUTAWAY_7_DAY
    FROM not_putaway
    WHERE CURRENT_DATE - created_dttm::date = 7;  
`)
.then(results => res.status(200).send(results.rows[0].total_lpns_not_putaway_7_day))
.catch(error => res.status(400).send('Something went wrong.'));
};

const handleGetNotPutawayOverSeven = (req, res) => {
    knex_db.raw(`
    SELECT
    Count(not_putaway.lpn) AS TOTAL_LPNS_NOT_PUTAWAY_OLDER_THAN_7_DAYS
    FROM not_putaway
    WHERE CURRENT_DATE - created_dttm::date > 7;  
`)
.then(results => res.status(200).send(results.rows[0].total_lpns_not_putaway_older_than_7_days))
.catch(error => res.status(400).send('Something went wrong.'));
};

const handleGetTransitionalZero = (req, res) => {
    knex_db.raw(`
    SELECT
    COALESCE( Sum(transitional_inventory.on_hand_qty),0) AS "onHandQty",
    Count(transitional_inventory.article) AS "countOfArticle"
    FROM transitional_inventory
    WHERE CURRENT_DATE - created_dttm::date < 1;  
`)
.then(results => res.status(200).send(results.rows))
.catch(error => res.status(400).send('Something went wrong.'));
};

const handleGetTransitionalOne = (req, res) => {
    knex_db.raw(`
    SELECT
    COALESCE( Sum(transitional_inventory.on_hand_qty),0)  AS "onHandQty",
    Count(transitional_inventory.article) AS "countOfArticle"
    FROM transitional_inventory
    WHERE CURRENT_DATE - created_dttm::date = 1;
`)
.then(results => res.status(200).send(results.rows))
.catch(error => res.status(400).send('Something went wrong.'));
};

const handleGetTransitionalTwo = (req, res) => {
    knex_db.raw(`
    SELECT
    COALESCE( Sum(transitional_inventory.on_hand_qty),0)  AS "onHandQty",
    Count(transitional_inventory.article) AS "countOfArticle"
    FROM transitional_inventory
    WHERE CURRENT_DATE - created_dttm::date = 2;  
    `)
.then(results => res.status(200).send(results.rows))
.catch(error => res.status(400).send('Something went wrong.'));
};

const handleGetTransitionalThree = (req, res) => {
    knex_db.raw(`
    SELECT
    COALESCE( Sum(transitional_inventory.on_hand_qty),0)  AS "onHandQty",
    Count(transitional_inventory.article) AS "countOfArticle"
    FROM transitional_inventory
    WHERE CURRENT_DATE - created_dttm::date = 3;  
`)
.then(results => res.status(200).send(results.rows))
.catch(error => res.status(400).send('Something went wrong.'));
};

const handleGetTransitionalFour = (req, res) => {
    knex_db.raw(`
    SELECT
    COALESCE( Sum(transitional_inventory.on_hand_qty),0)  AS "onHandQty",
    Count(transitional_inventory.article) AS "countOfArticle"
    FROM transitional_inventory
    WHERE CURRENT_DATE - created_dttm::date = 4;  
`)
.then(results => res.status(200).send(results.rows))
.catch(error => res.status(400).send('Something went wrong.'));
};

const handleGetTransitionalFive = (req, res) => {
    knex_db.raw(`
    SELECT
    COALESCE( Sum(transitional_inventory.on_hand_qty),0)  AS "onHandQty",
    Count(transitional_inventory.article) AS "countOfArticle"
    FROM transitional_inventory
    WHERE CURRENT_DATE - created_dttm::date = 5; 
`)
.then(results => res.status(200).send(results.rows))
.catch(error => res.status(400).send('Something went wrong.'));
};

const handleGetTransitionalSix = (req, res) => {
    knex_db.raw(`
    SELECT
    COALESCE( Sum(transitional_inventory.on_hand_qty),0)  AS "onHandQty",
    Count(transitional_inventory.article) AS "countOfArticle"
    FROM transitional_inventory
    WHERE CURRENT_DATE - created_dttm::date = 6;  
`)
.then(results => res.status(200).send(results.rows))
.catch(error => res.status(400).send('Something went wrong.'));
};

const handleGetTransitionalSeven = (req, res) => {
    knex_db.raw(`
    SELECT
    COALESCE( Sum(transitional_inventory.on_hand_qty),0)  AS "onHandQty",
    Count(transitional_inventory.article) AS "countOfArticle"
    FROM transitional_inventory
    WHERE CURRENT_DATE - created_dttm::date = 7;  
`)
.then(results => res.status(200).send(results.rows))
.catch(error => res.status(400).send('Something went wrong.'));
};

const handleGetTransitionalOverSeven = (req, res) => {
    knex_db.raw(`
    SELECT
    COALESCE( Sum(transitional_inventory.on_hand_qty),0)  AS "onHandQty",
    Count(transitional_inventory.article) AS "countOfArticle"
    FROM transitional_inventory
    WHERE CURRENT_DATE - created_dttm::date > 7; 
`)
.then(results => res.status(200).send(results.rows))
.catch(error => res.status(400).send('Something went wrong.'));
};

const handleGetTransitionalTotal = (req, res) => {
    knex_db.raw(`
    SELECT 
    COALESCE( Sum(transitional_inventory.on_hand_qty),0)  AS "onHandQty",
    Count(transitional_inventory.article) AS "countOfArticle"
    FROM transitional_inventory;
`)
.then(results => res.status(200).send(results.rows))
.catch(error => res.status(400).send('Something went wrong.'));
};

const handleGetNotPutawayTotal = (req, res) => {
    knex_db.raw(`
    SELECT
    Count(not_putaway.lpn) AS TOTAL_LPNS_NOT_PUTAWAY
    FROM not_putaway;  
`)
.then(results => res.status(200).send(results.rows))
.catch(error => res.status(400).send('Something went wrong.'));
};

const handleGetDamages = (req, res) => {
    knex_db.raw(`
    SELECT
    damages as damage
    FROM on_hand_inventory_by_day
    WHERE date_recorded::date = (SELECT MAX(date_recorded) FROM on_hand_inventory_by_day WHERE damages > 0)::date;
`)
.then(results => res.status(200).send(results.rows))
.catch(error => res.status(400).send('Something went wrong.'));
};

const handleGetProblemResolve = (req, res) => {
    knex_db.raw(`
    SELECT
    transfer_pr, 
    return_pr
    FROM on_hand_inventory_by_day
    WHERE date_recorded::date = (SELECT MAX(date_recorded) FROM on_hand_inventory_by_day WHERE transfer_pr > 0 OR return_Pr > 0)::date;
`)
.then(results => res.status(200).send(results.rows))
.catch(error => res.status(400).send('Something went wrong.'));
};

const handleGetLatestCountData = (req, res) => {
    knex_db.raw(`
        select 
        counted_dttm::date as counted_date_time, 
        count("id") as total_counts_performed, 
        count(distinct(counts.location)) as unique_locs_counted, 
        sum(expected_qty) as total_expected_qty, 
        sum(counted_qty) as total_counted_qty, 
        sum(variance_qty) as total_variance_qty 
        from counts group by counted_dttm::date order by "counted_date_time" desc
        limit 1;
    `)
    .then(results => res.status(200).send(results.rows[0]))
    .catch(error => res.status(400).send('Something went wrong.'));
}

module.exports = {
 handleGetAbsTotalVariance,
 handleGetCountVariances,
 handleGetOccupiedNotCounted,
 handleGetOccupiedCounted,
 handleGetUniqueLocationsCounted,
 handleGetEmptyCounted,
 handleGetEmptyNotCounted,
 handleGetNeTotalVariance,
 handleGetNotPutawayZero,
 handleGetNotPutawayOne,
 handleGetNotPutawayTwo,
 handleGetNotPutawayThree,
 handleGetNotPutawayFour,
 handleGetNotPutawayFive,
 handleGetNotPutawaySix,
 handleGetNotPutawaySeven,
 handleGetNotPutawayOverSeven,
 handleGetTransitionalZero,
 handleGetTransitionalOne,
 handleGetTransitionalTwo,
 handleGetTransitionalThree,
 handleGetTransitionalFour,
 handleGetTransitionalFive,
 handleGetTransitionalSix,
 handleGetTransitionalSeven,
 handleGetTransitionalOverSeven,
 handleGetDamages,
 handleGetProblemResolve,
 handleGetNotPutawayTotal,
 handleGetTotalExpectedQty,
 handleGetTransitionalTotal,
 handleGetLatestCountData
};
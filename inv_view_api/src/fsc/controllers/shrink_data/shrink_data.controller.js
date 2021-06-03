const db = require('../../config/knex.db');

const handleGetDailyShrink = (req, res) => {
    db.raw(`
    SELECT 
    on_hand_inventory_by_day.date_recorded, 
    on_hand_inventory_by_day.units_on_hand AS Units_On_Hand, 
    Sum(adjustment_data.qty) AS Net_Unit_Adjustment, 
    ABS(Sum(adjustment_data.qty)) AS ABS_Unit_Adjustment, 
    
    CASE on_hand_inventory_by_day.units_on_hand
        WHEN 0 THEN 0.00000
        ELSE round((Sum(adjustment_data.qty) / on_hand_inventory_by_day.units_on_hand::numeric) * 100, 5) 
    END 
    AS Net_Shrink_Percent,
    
    CASE on_hand_inventory_by_day.units_on_hand
        WHEN 0 THEN 0.00000
        ELSE round((ABS(Sum(adjustment_data.qty)) / on_hand_inventory_by_day.units_on_hand::numeric) * 100,5) 
    END 
    AS ABS_Shrink_Percent
    
    FROM adjustment_data 
    RIGHT JOIN on_hand_inventory_by_day 
    ON adjustment_data.date_time::timestamp::date = on_hand_inventory_by_day.date_recorded::timestamp::date
    GROUP BY 
        date_recorded, 
        on_hand_inventory_by_day.units_on_hand
    ORDER BY 
        on_hand_inventory_by_day.date_recorded; 
`)
.then(results => res.status(200).send(results.rows))
.catch(error => res.status(400).send(error));
};

const handleGetWeeklyShrink = (req, res) => {
    db.raw(`
    SELECT 
    to_char(date_time::date, 'IYYY') AS "year", 
    to_char(date_time::date, 'IW') AS "week", 
    Round(Avg(on_hand_inventory_by_day.units_on_hand), 2) AS Units_On_Hand, 
    Sum(adjustment_data.qty) AS Net_Unit_Adjustment, 
    Abs(Sum(adjustment_data.qty)) AS ABS_Unit_Adjustment, 
    CASE Round(Avg(on_hand_inventory_by_day.units_on_hand), 2)
        WHEN 0 THEN 0
        ELSE Round((Sum(adjustment_data.qty)/Round(Avg(on_hand_inventory_by_day.units_on_hand), 2))*100,5) 
    END AS Net_Shrink_Percent,
    CASE Round(Avg(on_hand_inventory_by_day.units_on_hand), 2)
        WHEN 0 THEN 0
        ELSE Round((Abs(Sum(adjustment_data.qty))/Round(Avg(on_hand_inventory_by_day.units_on_hand), 2))*100,5)
    END AS ABS_Shrink_Percent
    FROM adjustment_data 
    LEFT JOIN on_hand_inventory_by_day 
    ON 
        adjustment_data.date_time::timestamp::date = on_hand_inventory_by_day.date_recorded
    WHERE 
        to_char(date_time::date, 'IYYY') IS NOT NULL
    GROUP BY 
        to_char(date_time::date, 'IYYY'), 
        to_char(date_time::date, 'IW')
    ORDER BY 
    "year", "week"; 
`)
.then(results => res.status(200).send(results.rows))
.catch(error => res.status(400).send('Something went wrong.'));
};


const handleGetMonthlyShrink = (req, res) => {
    db.raw(`
    SELECT 
	DATE_PART('year',date_time::timestamp::date) AS year, 
	DATE_PART('month',date_time::timestamp::date) AS month, 
	Round(Avg(on_hand_inventory_by_day.units_on_hand), 2) AS Units_On_Hand, 
	Sum(adjustment_data.qty) AS Net_Unit_Adjustment, 
	Abs(Sum(adjustment_data.qty)) AS ABS_Unit_Adjustment, 

    CASE Round(Avg(on_hand_inventory_by_day.units_on_hand), 2)
        WHEN 0 THEN 0
        ELSE Round((Sum(adjustment_data.qty)/Round(Avg(on_hand_inventory_by_day.units_on_hand), 2))*100,5) 
    END AS Net_Shrink_Percent,

    CASE Round(Avg(on_hand_inventory_by_day.units_on_hand), 2)
        WHEN 0 THEN 0
        ELSE Round((Abs(Sum(adjustment_data.qty))/Round(Avg(on_hand_inventory_by_day.units_on_hand), 2))*100,5)
    END AS ABS_Shrink_Percent

    FROM 
    adjustment_data 
    LEFT JOIN 
    on_hand_inventory_by_day 
    ON 
    adjustment_data.date_time::timestamp::date = on_hand_inventory_by_day.date_recorded::timestamp::date
    WHERE
    DATE_PART('year',date_time) IS NOT NULL
    GROUP BY 
        DATE_PART('month',date_time::timestamp::date),
        DATE_PART('year',date_time::timestamp::date)
        ORDER BY year,month;`)
    .then(data => {
        res.json(data.rows)
    })
    .catch(err => console.log(err))
}
 
const handleGetYearlyShrink = (req, res) => {
    db.raw(`
    SELECT
    date_part('year', date_time)                                  AS year,
    round(AVG(on_hand_inventory_by_day.units_on_hand), 2)           AS units_on_hand,
    SUM(adjustment_data.qty)                                      AS net_unit_adjustment,
    abs(SUM(adjustment_data.qty))                                 AS abs_unit_adjustment,
    CASE round(AVG(on_hand_inventory_by_day.units_on_hand), 2)
        WHEN 0 THEN
            0
        ELSE
            round((SUM(adjustment_data.qty) / round(AVG(on_hand_inventory_by_day.units_on_hand), 2)) * 100, 5)
    END AS net_shrink_percent,
    CASE round(AVG(on_hand_inventory_by_day.units_on_hand), 2)
        WHEN 0 THEN
            0
        ELSE
            round((abs(SUM(adjustment_data.qty)) / round(AVG(on_hand_inventory_by_day.units_on_hand), 2)) * 100, 5)
    END AS abs_shrink_percent
FROM
    adjustment_data
    LEFT JOIN on_hand_inventory_by_day 
        ON adjustment_data.date_time::timestamp::date = on_hand_inventory_by_day.date_recorded::timestamp::date
        WHERE
        DATE_PART('year', date_time) IS NOT NULL
        GROUP BY 
            DATE_PART('year', date_time)
        ORDER BY
        DATE_PART('year', date_time) ;      
`)
.then(results => res.status(200).send(results.rows))
.catch(error => res.status(400).send('Something went wrong.'));
};

module.exports = {
    handleGetDailyShrink,
    handleGetMonthlyShrink,
    handleGetWeeklyShrink,
    handleGetYearlyShrink
};
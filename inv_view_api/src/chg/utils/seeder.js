const db = require("../models");
const Counts = db.counts;
const NotPutaway = db.not_putaway;
const EmptyActiveLocations = db.empty_active_locations;
const Adjustments = db.adjustment_data;
const TransitionalInventory = db.transitional_inventory;

function isValidDate(d) {
    return d instanceof Date && !isNaN(d);
  };

const cycleCountColumns = (data, i) => {
    // check for invalid date, skip if the date is invalid
    if(isValidDate(new Date(data[i]['Counted Date/Time']))){
        Counts.create({
            location: data[i]['Location'],
            loc_type: data[i]['Loc Type'],
            item: data[i]['Item'],
            expected_qty: data[i]['Expected QTY'],
            expected_cost: data[i]['Expected Cost'],
            counted_qty: data[i]['Counted QTY'],
            counted_cost: data[i]['Counted Cost'],
            variance_qty: data[i]['Variance QTY'],
            variance_cost: data[i]['Variance Cost'],
            counted_dttm: (new Date(data[i]['Counted Date/Time'])).toDateString(),
            counted_by: data[i]['Counted By'],
            reason_code: data[i]['Reason Code'],
            status: data[i]['Status']
        })
    };   
};

const invAdjustmentColumns = (data, i) => {
    // check for invalid date, skip if the date is invalid
    if(isValidDate(new Date(data[i]['Date/Time']))){
        Adjustments.create({
            tran_code: data[i]['Tran Code'],
            actn_code: data[i]['Actn Code'],
            pix_description: data[i]['PIX Description'],
            reason_code: data[i]['Reason Code'],
            ilpn : data[i]['iLPN'],
            serial_number : data[i]['Serial Number'],
            user_id: data[i]['User ID'],
            first_name: data[i]['First Name'],
            last_name: data[i]['Last Name'],
            tran_number : data[i]['Tran Number'],
            qty: data[i]['Qty'],
            sku: data[i]['SKU'],
            date_time: (new Date(data[i]['Date/Time'])).toDateString(),
        })
    };   
};

const notPutawayColumns = (data, i) => {
    // check for invalid date, skip if the date is invalid
    if(isValidDate(new Date(data[i]['Created Dttm']))){
        NotPutaway.create({
            asn: data[i]['ASN#'],
            lpn_status: data[i]['LPN Status'],
            lpn: data[i]['LPN#'],
            pallet: data[i]['Pallet #'],
            item_name: data[i]['Item Name'],
            serial_number: data[i]['Serial Number'],
            description: data[i]['Description'],
            created_dttm: (new Date(data[i]['Created Dttm'])).toDateString(),
            created_src: data[i]['Created Source'],
            num_of_days_created: data[i]['Num Of Created Days']
            
        })
    };   
};

const emptyActiveColumns = (data, i) => {
    EmptyActiveLocations.create({
        pick_zone: data[i]['Pick Zone'],
        display_location: data[i]['Display Location'],
    })
};

const transitionalColumns = (data, i) => {
    // check for invalid date, skip if the date is invalid
    if(isValidDate(new Date(data[i]['Created Dttm'])) &&  isValidDate(new Date(data[i]['Last Updated Dttm']))){
        TransitionalInventory.create({
            on_hand_qty: data[i]['On Hand Qty'],
            article: data[i]['Article'],
            created_dttm: (new Date(data[i]['Created Dttm'])).toDateString(),
            last_updated_dttm: (new Date(data[i]['Last Updated Dttm'])).toDateString(),
        })
    };   
};

const truncateNotPutaway = () => {
    //Truncate table before adding new data
    NotPutaway.destroy({ truncate : true, cascade: false });  
};

const truncateEmptyActive = () => {
    //Truncate table before adding new data
    EmptyActiveLocations.destroy({ truncate : true, cascade: false })
};

const truncateTransitional = () => {
    //Truncate table before adding new data
    TransitionalInventory.destroy({ truncate : true, cascade: false })
};

const abortTruncate = () => {
    console.log("Table does not need to be truncated");
};

module.exports = {
    cycleCountColumns,
    invAdjustmentColumns,
    notPutawayColumns,
    truncateNotPutaway,
    emptyActiveColumns,
    transitionalColumns,
    truncateEmptyActive,
    truncateTransitional,
    abortTruncate,
}
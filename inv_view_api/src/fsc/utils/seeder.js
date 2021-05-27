const db = require('../models');
const Counts = db.counts;
const NotPutaway = db.not_putaway;
const EmptyActiveLocations = db.empty_active_locations;
const Adjustments = db.adjustment_data;
const TransitionalInventory = db.transitional_inventory;

function isValidDate(d) {
    return d instanceof Date && !isNaN(d);
  };

  //^ Cycle Count Report (FCA) (New)
const cycleCountColumns = (data, i) => {
    // Numbers with commas (ex. 4,123) are being treated as strings 
    // this causes an issue with uploading to db which drops the records
    // the checks below will remove the comma and convert them to numbers.
    if (typeof data[i]['Exp Qty'] === 'string'){
        data[i]['Exp Qty'] = Number(data[i]['Exp Qty'].replace(',',''))
    } 
    if (typeof data[i]['CC Qty'] === 'string'){
        data[i]['CC Qty'] = Number(data[i]['CC Qty'].replace(',','')) 
    } 
    if (typeof data[i]['Adj Qty'] === 'string'){
        data[i]['Adj Qty'] = Number(data[i]['Adj Qty'].replace(',','')) 
    } 

    // check for invalid date, skip if the date is invalid
    if(isValidDate(new Date(data[i]['CC DATE']))){

        Counts.create({
            customer: data[i]['Cust Name'].normalize("NFD").replace(/[\u0300-\u036f]/g, ""),
            location: data[i]['Location'],
            item: data[i]['Item'],
            expected_qty: (data[i]['Exp Qty']),
            expected_cost: Number(data[i]['Exp $']),
            counted_qty: (data[i]['CC Qty']),
            counted_cost: Number(data[i]['CC $']),
            variance_qty: (data[i]['Adj Qty']),
            variance_cost: Number(data[i]['Adj $']),
            counted_dttm: new Date(data[i]['CC DATE']).toDateString(),
            counted_by: data[i]['CC User'],
            // loc_type: data[i]['Loc Type'],
            // reason_code: data[i]['Reason Code'],
            // status: data[i]['Status']
        })
    };   
};

  //^ Inventory Adjustment Report - Date Range
const invAdjustmentColumns = (data, i) => {

    if (typeof data[i]['Adjustment_Qty'] === 'string'){
        data[i]['Adjustment_Qty'] = Number(data[i]['Adjustment_Qty'].replace(',',''))
    } 

    // check for invalid date, skip if the date is invalid
    if(isValidDate(new Date(data[i]['DateTime']))){
        Adjustments.create({
            customer: data[i]['Customer'].normalize("NFD").replace(/[\u0300-\u036f]/g, ""),
            sku: data[i]['ITEM_NAME'],
            qty: data[i]['Adjustment_Qty'],
            reason: data[i]['Reason'],
            user_id: data[i]['USER_ID'],
            date_time: (new Date(data[i]['DateTime'])).toDateString(),
            // tran_code: data[i]['Tran Code'],
            // actn_code: data[i]['Actn Code'],
            // pix_description: data[i]['PIX Description'],
            // reason_code: data[i]['Reason Code'],
            // ilpn : data[i]['iLPN'],
            // serial_number : data[i]['Serial Number'],
            // first_name: data[i]['First Name'],
            // last_name: data[i]['Last Name'],
            // tran_number : data[i]['Tran Number'],
        })
    };   
};

//^ Aging Putaway Report
const notPutawayColumns = (data, i) => {
    // check for invalid date, skip if the date is invalid
    if(isValidDate(new Date(data[i]['CREATED_DTTM']))){
        NotPutaway.create({
            company:data[i]['COMPANY'].normalize("NFD").replace(/[\u0300-\u036f]/g, ""),
            asn: data[i]['ASN'],
            lpn_status: data[i]['STATUS'],
            lpn: data[i]['ILPNS'],
            pallet: data[i]['TC_PARENT_LPN_ID'],
            item_name: data[i]['SKU NAME'],
            created_dttm: (new Date(data[i]['CREATED_DTTM'])).toDateString(),
            created_src: data[i]['USER_ID'],
            num_of_days_created: data[i]['AGE']
        })
    };   
};

const emptyActiveColumns = (data, i) => {
    EmptyActiveLocations.create({
        display_location: data[i]['DSP_LOCN'],
    })
};


// ^ Inventory in Transitional Bucket Report
const transitionalColumns = (data, i) => {
    console.log(data)
    // check for invalid date, skip if the date is invalid
    if(isValidDate(new Date(data[i]['CREATED_DTTM']))){
        TransitionalInventory.create({
            customer: data[i]['Customer'].normalize("NFD").replace(/[\u0300-\u036f]/g, ""),
            on_hand_qty: Number(data[i]['Transitional Qty']),
            article: data[i]['Item Name'],
            created_dttm: (new Date(data[i]['CREATED_DTTM'])).toDateString(),
            // last_updated_dttm: (new Date(data[i]['Last Updated Dttm'])).toDateString(),
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
import React from 'react';

import '../styles/styles.css';
import './transitional-overview.styles.css';

const TransitionalOverview = ({ headerColor, ...props }) => {

    return (
    
    <div className='transitional-container'>
        <header className='panel-header'>SKUs IN TRANSITIONAL</header>
        <header className='transitional-header header-border' style={{backgroundColor: `${headerColor}`}}>Transitional Inventory Overview</header>
        <div className='breakdown-container body-border'>
            <div className='breakdown-labels'>
                <p className='age-header'>Age</p>
                <label className='txt-label'>Today: </label>
                <label className='txt-label'>1 Day old: </label>
                <label className='txt-label'>2 Days old: </label>
                <label className='txt-label'>3 Days old: </label>
                <label className='txt-label'>4 Days old: </label>
                <label className='txt-label'>5 Days old: </label>
                <label className='txt-label'>6 Days old: </label>
                <label className='txt-label'>7 Days old: </label>
                <label className='txt-label'>Over 7 Days old: </label>
            </div>
            
            <div className='breakdown-qty'>
                <p>SKU Count</p>
                <label>{props.currentDay ? props.currentDay[0].countOfArticle : 0}</label>
                <label>{props.oneDay ? props.oneDay[0].countOfArticle : 0}</label>
                <label>{props.twoDay ? props.twoDay[0].countOfArticle : 0}</label>
                <label>{props.threeDay ? props.threeDay[0].countOfArticle : 0}</label>
                <label>{props.fourDay ? props.fourDay[0].countOfArticle : 0}</label>
                <label>{props.fiveDay ? props.fiveDay[0].countOfArticle : 0}</label>
                <label>{props.sixDay ? props.sixDay[0].countOfArticle : 0}</label>
                <label>{props.sevenDay ? props.sevenDay[0].countOfArticle : 0}</label>
                <label>{props.overSevenDay ? props.overSevenDay[0].countOfArticle : 0}</label>
            </div>
            <div className='breakdown-qty'>
                <p>Unit Count</p>
                <label>{props.currentDay ? props.currentDay[0].onHandQty : 0}</label>
                <label>{props.oneDay ? props.oneDay[0].onHandQty : 0}</label>
                <label>{props.twoDay ? props.twoDay[0].onHandQty : 0}</label>
                <label>{props.threeDay ? props.threeDay[0].onHandQty : 0}</label>
                <label>{props.fourDay ? props.fourDay[0].onHandQty : 0}</label>
                <label>{props.fiveDay ? props.fiveDay[0].onHandQty : 0}</label>
                <label>{props.sixDay ? props.sixDay[0].onHandQty : 0}</label>
                <label>{props.sevenDay ? props.sevenDay[0].onHandQty : 0}</label>
                <label>{props.overSevenDay ? props.overSevenDay[0].onHandQty : 0}</label>
            </div>
        </div>
        <div className='transitional-totals-container'>
            <div className='totals-labels'>
                <label className='txt-label'>Total: </label>
            </div>
            <div className='totals-qty'>
                <label className='total'>{props.transitionalTotal ? props.transitionalTotal[0].countOfArticle : 0}</label>
            </div>
            <div className='totals-qty'>
                <label className='total'>{props.transitionalTotal ? props.transitionalTotal[0].onHandQty : 0}</label>
            </div>
        </div>

    </div>
    );
}

export default TransitionalOverview;
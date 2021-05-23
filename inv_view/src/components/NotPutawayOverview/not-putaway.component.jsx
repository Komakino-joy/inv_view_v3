import React from 'react';

import '../styles/styles.css';
import './not-putaway.styles.css';

const NotPutaway = ({ headerColor, ...props }) => {

    const notPutawayTotal = props.currentDay + props.oneDay + props.twoDay + props.threeDay + 
    props.fourDay + props.fiveDay + props.sixDay + props.sevenDay + props.overSevenDay;

    return (
    <div className='not-putaway-container'>
        <header className='panel-header'>SKUs NOT PUTAWAY</header>
        <header className='not-putaway-header header-border' style={{backgroundColor: `${headerColor}`}}>Inv Not Putaway Overview</header>
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
                <p>LPN Count</p>
                <label>{props.currentDay}</label>
                <label>{props.oneDay}</label>
                <label>{props.twoDay}</label>
                <label>{props.threeDay}</label>
                <label>{props.fourDay}</label>
                <label>{props.fiveDay}</label>
                <label>{props.sixDay}</label>
                <label>{props.sevenDay}</label>
                <label>{props.overSevenDay}</label>
            </div>
        </div>
        <div className='not-putaway-totals-container'>
            <div className='totals-labels'>
                <label className='txt-label'>Total: </label>
            </div>
            <div className='totals-labels'>
                <label className='total'>{Number(notPutawayTotal)}</label>
            </div>
        </div>

    </div>
    );
}

export default NotPutaway;
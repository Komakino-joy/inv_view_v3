import React from 'react';

import '../styles/styles.css';
import './count-variance-overview.styles.css';

const CountVarianceOverview = ({ headerColor, ...props }) => {

    const countGoal = 98.50;
    const totalLocsCounted = props.occupiedLocsCounted + props.emptyLocsCounted;
    const accurateCounts = totalLocsCounted - props.totalVariances;
    const countAccuracy = ((accurateCounts / totalLocsCounted) * 100).toFixed(2)
   
        return (
        <div className='count-variance-container'>
            <header className='count-variance-header header-border' style={{backgroundColor: `${headerColor}`}}>Count Variance Overview</header>
            <div className='breakdown-container body-border'>
                <div className='breakdown-labels'>
                    <label className='txt-label'>Locations Visited: </label>
                    <label className='txt-label'>Total Counts: </label>
                    <label className='txt-label'>Accurate Counts: </label>
                    <label className='txt-label'>Counts With Variance: </label>
                </div>
                <div className='breakdown-qty'>
                    <label >{props.locsVisited}</label>
                    <label >{totalLocsCounted}</label>
                    <label >{accurateCounts}</label>
                    <label >{props.totalVariances}</label>
                </div>
            </div>
            <div className='count-variance-totals-container'>
                <div className='totals-labels'>
                    <label className='txt-label'>Count Accuracy: </label>
                    <label className='txt-label'>Goal: </label>
                </div>
                <div className='totals-percentage'>
                    <label className={`${countAccuracy}` > 98.5 ? 'green-fill' : 'red-fill'}>{`${countAccuracy}%`}</label>
                    <label className='goal'>{`${countGoal}%`}</label>
                </div>
            </div>

        </div>
        );
}

export default CountVarianceOverview;
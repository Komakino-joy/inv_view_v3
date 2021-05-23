import React  from 'react';

import './active-locs.styles.css';
import '../styles/styles.css';

const ActiveLocs = ({ headerColor, ...props }) => {

    return (
    <div className='active-container '>
        <header className='panel-header'>PROGRESS SUMMARY - ACTIVE LOCATIONS</header>
        <header className='active-header header-border' style={{backgroundColor: `${headerColor}`}}>Active Locations Breakdown</header>
        
        <div className='breakdown-container body-border'>
        
            <div className='breakdown-labels'>
                <label className='txt-label'>Occupied Locations Counted: </label>
                <label className='txt-label'>Unoccupied Locations Counted: </label>
                <label className='txt-label'>Empty Locations Counted: </label>
                <label className='txt-label'>Empty Locations Uncounted: </label>
            </div>
        
            <div className='breakdown-qty'>
                <label>{props.occupiedLocsCounted}</label>
                <label>{props.occupiedLocsUncounted}</label>
                <label>{props.emptyLocsCounted}</label>
                <label>{props.emptyLocsUncounted}</label>
            </div>
            
            <div className='breakdown-percentage'>
                <label>{`${((props.occupiedLocsCounted / props.locTotal)*100).toFixed(2)}%`}</label>
                <label>{`${((props.occupiedLocsUncounted / props.locTotal)*100).toFixed(2)}%`}</label>
                <label>{`${((props.emptyLocsCounted / props.locTotal)*100).toFixed(2)}%`}</label>
                <label>{`${((props.emptyLocsUncounted / props.locTotal)*100).toFixed(2)}%`}</label>
            </div>

        </div>

        <div className='active-locs-totals-container'>
            
            <div className='totals-labels'>
                <label className='txt-label'>Uncounted Locations: </label>
                <label className='txt-label'>All Active Locations: </label>
            </div>
            
            <div className='totals-qty'>
                <label className='orange-border'>{props.occupiedLocsUncounted + props.emptyLocsUncounted}</label>
                <label className='purple-border'>{props.locTotal}</label>
            </div>

            <div className='totals-percentage'>
                <label className='orange-border uncounted-percentage'>{`${(((props.occupiedLocsUncounted + props.emptyLocsUncounted) / props.locTotal)*100).toFixed(2)}%`}</label>
            </div>

        </div> 

    </div>
    )
}

export default ActiveLocs;
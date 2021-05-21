import React, {useEffect, useState} from 'react';

import './activeLocs.styles.css';
import '../styles/styles.css';

import {fetchData } from "../../api/api";


const ActiveLocs = ({ apiUrl, businessUnit, headerColor }) => {

    const [occupiedLocsCounted, setOccupiedLocsCounted] = useState(0);
    const [occupiedLocsUncounted, setOccupiedLocsUncounted] = useState(0);
    const [emptyLocsCounted, setEmptyLocsCounted] = useState(0);
    const [emptyLocsUncounted, setEmptyLocsUncounted] = useState(0);
    const locTotal  = occupiedLocsCounted + occupiedLocsUncounted + emptyLocsCounted + emptyLocsUncounted;

    useEffect(() => {
        let mounted = true;
        
        if (mounted){
            fetchData(`${apiUrl}${businessUnit}/data/occupied-locations-counted`, setOccupiedLocsCounted)
            fetchData(`${apiUrl}${businessUnit}/data/occupied-locations-uncounted`, setOccupiedLocsUncounted)
            fetchData(`${apiUrl}${businessUnit}/data/empty-locations-counted`, setEmptyLocsCounted)
            fetchData(`${apiUrl}${businessUnit}/data/empty-locations-uncounted`, setEmptyLocsUncounted)
        };

        return () => {
            mounted = false;
        };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
                <label>{occupiedLocsCounted}</label>
                <label>{occupiedLocsUncounted}</label>
                <label>{emptyLocsCounted}</label>
                <label>{emptyLocsUncounted}</label>
            </div>
            
            <div className='breakdown-percentage'>
                <label>{`${((occupiedLocsCounted / locTotal)*100).toFixed(2)}%`}</label>
                <label>{`${((occupiedLocsUncounted / locTotal)*100).toFixed(2)}%`}</label>
                <label>{`${((emptyLocsCounted / locTotal)*100).toFixed(2)}%`}</label>
                <label>{`${((emptyLocsUncounted / locTotal)*100).toFixed(2)}%`}</label>
            </div>

        </div>



        <div className='active-locs-totals-container'>
            
            <div className='totals-labels'>
                <label className='txt-label'>Uncounted Locations: </label>
                <label className='txt-label'>All Active Locations: </label>
            </div>
            
            <div className='totals-qty'>
                <label className='orange-border'>{occupiedLocsUncounted + emptyLocsUncounted}</label>
                <label className='purple-border'>{locTotal}</label>
            </div>

            <div className='totals-percentage'>
                <label className='orange-border uncounted-percentage'>{`${(((occupiedLocsUncounted + emptyLocsUncounted) / locTotal)*100).toFixed(2)}%`}</label>
            </div>

        </div> 

    </div>
    )
}

export default ActiveLocs;
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { 
    CHG_requestOccupiedLocations,
    CHG_requestOccupiedLocationsUncounted,
    CHG_requestEmptyLocationsCounted,
    CHG_requestEmptyLocationsUncounted,
} from '../../redux/progress.page/progress.page.actions'

import './activeLocs.styles.css';
import '../styles/styles.css';

const ActiveLocs = ({ headerColor }) => {
    const dispatch = useDispatch();
    const occupiedLocsCounted = useSelector(state => state.progressData.CHG_occupiedLocCounted);
    const occupiedLocsUncounted = useSelector(state => state.progressData.CHG_occupiedLocUnCounted);
    const emptyLocsCounted = useSelector(state => state.progressData.CHG_emptyLocCounted);
    const emptyLocsUncounted = useSelector(state => state.progressData.CHG_emptyLocUncounted);
    const locTotal  = occupiedLocsCounted + occupiedLocsUncounted + emptyLocsCounted + emptyLocsUncounted;

    useEffect(() => {
        let mounted = true;
        
        if (mounted){
            dispatch(CHG_requestOccupiedLocations());
            dispatch(CHG_requestOccupiedLocationsUncounted());
            dispatch(CHG_requestEmptyLocationsCounted());
            dispatch(CHG_requestEmptyLocationsUncounted());
        };

        return () => {
            mounted = false;
        };

    }, [dispatch]);

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
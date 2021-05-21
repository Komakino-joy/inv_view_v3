import React, {useEffect, useState} from 'react';
import '../styles/styles.css';
import './CountVarianceOverview.styles.css';

import { fetchData } from "../../api/api";

const CountVarianceOverview = ({apiUrl, businessUnit, headerColor }) => {
    
    const [locsVisited, setLocsVisited] = useState(0);
    const [occupiedLocsCounted, setOccupiedLocsCounted] = useState(0);
    const [emptyLocsCounted, setEmptyLocsCounted] = useState(0);
    const [totalVariances, setTotalVariances] = useState(0);

    useEffect(() => {
        let mounted = true;

        if (mounted){
            fetchData(`${apiUrl}${businessUnit}/data/count-unique-locations-counted`, setLocsVisited);
            fetchData(`${apiUrl}${businessUnit}/data/occupied-locations-counted`, setOccupiedLocsCounted);
            fetchData(`${apiUrl}${businessUnit}/data/empty-locations-counted`, setEmptyLocsCounted);
            fetchData(`${apiUrl}${businessUnit}/data/count-variances`, setTotalVariances);
        };

        return () => {
            mounted = false;
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps    
    }, []);

    const countGoal = 98.50;
    const totalLocsCounted = occupiedLocsCounted + emptyLocsCounted;
    const accurateCounts = totalLocsCounted - totalVariances;
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
                    <label >{locsVisited}</label>
                    <label >{totalLocsCounted}</label>
                    <label >{accurateCounts}</label>
                    <label >{totalVariances}</label>
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
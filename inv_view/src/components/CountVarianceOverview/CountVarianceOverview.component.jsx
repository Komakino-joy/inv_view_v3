import React, {useEffect} from 'react';

import { useDispatch, useSelector } from 'react-redux';

import '../styles/styles.css';
import './CountVarianceOverview.styles.css';

import { 
    CHG_requestOccupiedLocationsCounted,
    CHG_requestEmptyLocationsCounted,
    CHG_requestUniqueLocs,
    CHG_requestLocsWithVarianceCount,
 } from '../../redux/progress.page/progress.page.actions';

const CountVarianceOverview = ({ headerColor }) => {

    const dispatch = useDispatch();
    const occupiedLocsCounted = useSelector(state => state.progressData.CHG_occupiedLocCounted);
    const emptyLocsCounted = useSelector(state => state.progressData.CHG_emptyLocCounted);
    const locsVisited = useSelector(state => state.progressData.CHG_uniqueLocsCounted);
    const totalVariances = useSelector(state => state.progressData.CHG_locsWithVarianceCount);

    useEffect(() => {
        let mounted = true;

        if (mounted){
            dispatch(CHG_requestOccupiedLocationsCounted());
            dispatch(CHG_requestEmptyLocationsCounted());
            dispatch(CHG_requestUniqueLocs());
            dispatch(CHG_requestLocsWithVarianceCount());
        };

        return () => {
            mounted = false;
        };

    }, [dispatch]);

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
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { 
    CHG_requestNotPutaway1,
    CHG_requestNotPutaway2,
    CHG_requestNotPutaway3,
    CHG_requestNotPutaway4,
    CHG_requestNotPutaway5,
    CHG_requestNotPutaway6,
    CHG_requestNotPutaway7,
    CHG_requestNotPutawayOver7,
 } from '../../redux/progress.page/progress.page.actions';

import '../styles/styles.css';
import './NotPutaway.styles.css';

const NotPutaway = ({ headerColor }) => {

    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const currentDay = useSelector(state => state.progressData.CHG_notPutaway0);
    const oneDay = useSelector(state => state.progressData.CHG_notPutaway1);
    const twoDay = useSelector(state => state.progressData.CHG_notPutaway2);
    const threeDay = useSelector(state => state.progressData.CHG_notPutaway3);
    const fourDay = useSelector(state => state.progressData.CHG_notPutaway4);
    const fiveDay = useSelector(state => state.progressData.CHG_notPutaway5);
    const sixDay = useSelector(state => state.progressData.CHG_notPutaway6);
    const sevenDay = useSelector(state => state.progressData.CHG_notPutaway7);
    const overSevenDay = useSelector(state => state.progressData.CHG_notPutawayOver7);

    useEffect(() => {
        let mounted = true;

        if (mounted){
            dispatch(CHG_requestNotPutaway1());
            dispatch(CHG_requestNotPutaway2());
            dispatch(CHG_requestNotPutaway3());
            dispatch(CHG_requestNotPutaway4());
            dispatch(CHG_requestNotPutaway5());
            dispatch(CHG_requestNotPutaway6());
            dispatch(CHG_requestNotPutaway7());
            dispatch(CHG_requestNotPutawayOver7());
        };

        return () => {
            mounted = false;
        };
 
    }, [dispatch]);

    const notPutawayTotal = currentDay + oneDay + twoDay + threeDay + fourDay + fiveDay + sixDay + sevenDay + overSevenDay;

    return (
    <div className='not-putaway-container'>
    <button onClick={() => console.log(state)}  >CLICK ME</button>
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
                <label>{currentDay}</label>
                <label>{oneDay}</label>
                <label>{twoDay}</label>
                <label>{threeDay}</label>
                <label>{fourDay}</label>
                <label>{fiveDay}</label>
                <label>{sixDay}</label>
                <label>{sevenDay}</label>
                <label>{overSevenDay}</label>
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
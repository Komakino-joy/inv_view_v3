import React, {useEffect, useState} from 'react';
import { fetchData } from "../../api/api";
import '../styles/styles.css';
import './NotPutaway.styles.css';

const NotPutaway = ({ apiUrl, businessUnit, headerColor }) => {

    const [currentDay, setCurrentDay] = useState(0);
    const [oneDay, setOneDay] = useState(0);
    const [twoDay, setTwoDay] = useState(0);
    const [threeDay, setThreeDay] = useState(0);
    const [fourDay, setFourDay] = useState(0);
    const [fiveDay, setFiveDay] = useState(0);
    const [sixDay, setSixDay] = useState(0);
    const [sevenDay, setSevenDay] = useState(0);
    const [overSevenDay, setOverSevenDay] = useState(0);

    useEffect(() => {
        let mounted = true;

        if (mounted){
            fetchData(`${apiUrl}${businessUnit}/data/not-putaway-0-days-count`, setCurrentDay);
            fetchData(`${apiUrl}${businessUnit}/data/not-putaway-1-day-count`, setOneDay);
            fetchData(`${apiUrl}${businessUnit}/data/not-putaway-2-day-count`, setTwoDay);
            fetchData(`${apiUrl}${businessUnit}/data/not-putaway-3-day-count`, setThreeDay);
            fetchData(`${apiUrl}${businessUnit}/data/not-putaway-4-day-count`, setFourDay);
            fetchData(`${apiUrl}${businessUnit}/data/not-putaway-5-day-count`, setFiveDay);
            fetchData(`${apiUrl}${businessUnit}/data/not-putaway-6-day-count`, setSixDay);
            fetchData(`${apiUrl}${businessUnit}/data/not-putaway-7-day-count`, setSevenDay);
            fetchData(`${apiUrl}${businessUnit}/data/not-putaway-over-7-days-count`, setOverSevenDay);
        };

        return () => {
            mounted = false;
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps    
    }, []);

    const notPutawayTotal = currentDay + oneDay + twoDay + threeDay + fourDay + fiveDay + sixDay + sevenDay + overSevenDay;

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
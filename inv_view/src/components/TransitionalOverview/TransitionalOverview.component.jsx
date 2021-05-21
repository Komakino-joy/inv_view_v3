import React, {useEffect, useState} from 'react';
import { fetchData } from "../../api/api";
import '../styles/styles.css';
import './TransitionalOverview.styles.css';

const TransitionalOverview = ({ apiUrl, businessUnit, headerColor }) => {


    const [currentDay, setCurrentDay] = useState(0);
    const [oneDay, setOneDay] = useState(0);
    const [twoDay, setTwoDay] = useState(0);
    const [threeDay, setThreeDay] = useState(0);
    const [fourDay, setFourDay] = useState(0);
    const [fiveDay, setFiveDay] = useState(0);
    const [sixDay, setSixDay] = useState(0);
    const [sevenDay, setSevenDay] = useState(0);
    const [overSevenDay, setOverSevenDay] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let mounted = true;

        if (mounted){
            fetchData(`${apiUrl}${businessUnit}/data/transitional-inv-0-days-count`, setCurrentDay);
            fetchData(`${apiUrl}${businessUnit}/data/transitional-inv-1-day-count`, setOneDay);
            fetchData(`${apiUrl}${businessUnit}/data/transitional-inv-2-day-count`, setTwoDay);
            fetchData(`${apiUrl}${businessUnit}/data/transitional-inv-3-day-count`, setThreeDay);
            fetchData(`${apiUrl}${businessUnit}/data/transitional-inv-4-day-count`, setFourDay);
            fetchData(`${apiUrl}${businessUnit}/data/transitional-inv-5-day-count`, setFiveDay);
            fetchData(`${apiUrl}${businessUnit}/data/transitional-inv-6-day-count`, setSixDay);
            fetchData(`${apiUrl}${businessUnit}/data/transitional-inv-7-day-count`, setSevenDay);
            fetchData(`${apiUrl}${businessUnit}/data/transitional-inv-over-7-days-count`, setOverSevenDay);
            fetchData(`${apiUrl}${businessUnit}/data/transitional-inv-total-count`, setTotal)
        };

        return () => {
            mounted = false;
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
                <label>{currentDay ? currentDay[0].countOfArticle : 0}</label>
                <label>{oneDay ? oneDay[0].countOfArticle : 0}</label>
                <label>{twoDay ? twoDay[0].countOfArticle : 0}</label>
                <label>{threeDay ? threeDay[0].countOfArticle : 0}</label>
                <label>{fourDay ? fourDay[0].countOfArticle : 0}</label>
                <label>{fiveDay ? fiveDay[0].countOfArticle : 0}</label>
                <label>{sixDay ? sixDay[0].countOfArticle : 0}</label>
                <label>{sevenDay ? sevenDay[0].countOfArticle : 0}</label>
                <label>{overSevenDay ? overSevenDay[0].countOfArticle : 0}</label>
            </div>
            <div className='breakdown-qty'>
                <p>Unit Count</p>
                <label>{currentDay ? currentDay[0].onHandQty : 0}</label>
                <label>{oneDay ? oneDay[0].onHandQty : 0}</label>
                <label>{twoDay ? twoDay[0].onHandQty : 0}</label>
                <label>{threeDay ? threeDay[0].onHandQty : 0}</label>
                <label>{fourDay ? fourDay[0].onHandQty : 0}</label>
                <label>{fiveDay ? fiveDay[0].onHandQty : 0}</label>
                <label>{sixDay ? sixDay[0].onHandQty : 0}</label>
                <label>{sevenDay ? sevenDay[0].onHandQty : 0}</label>
                <label>{overSevenDay ? overSevenDay[0].onHandQty : 0}</label>
            </div>
        </div>
        <div className='transitional-totals-container'>
            <div className='totals-labels'>
                <label className='txt-label'>Total: </label>
            </div>
            <div className='totals-qty'>
                <label className='total'>{total ? total[0].countOfArticle : 0}</label>
            </div>
            <div className='totals-qty'>
                <label className='total'>{total ? total[0].onHandQty : 0}</label>
            </div>
        </div>

    </div>
    );
}

export default TransitionalOverview;
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { 
    CHG_requestTransitional1,
    CHG_requestTransitional2,
    CHG_requestTransitional3,
    CHG_requestTransitional4,
    CHG_requestTransitional5,
    CHG_requestTransitional6,
    CHG_requestTransitional7,
    CHG_requestTransitionalOver7,
 } from '../../redux/progress.page/progress.page.actions';

import '../styles/styles.css';
import './TransitionalOverview.styles.css';

const TransitionalOverview = ({ headerColor }) => {


    const dispatch = useDispatch();

    const currentDay = useSelector(state => state.progressData.CHG_transitional0);
    const oneDay = useSelector(state => state.progressData.CHG_transitional1);
    const twoDay = useSelector(state => state.progressData.CHG_transitional2);
    const threeDay = useSelector(state => state.progressData.CHG_transitional3);
    const fourDay = useSelector(state => state.progressData.CHG_transitional4);
    const fiveDay = useSelector(state => state.progressData.CHG_transitional5);
    const sixDay = useSelector(state => state.progressData.CHG_transitional6);
    const sevenDay = useSelector(state => state.progressData.CHG_transitional7);
    const overSevenDay = useSelector(state => state.progressData.CHG_transitionalOver7);

    useEffect(() => {
        let mounted = true;

        if (mounted){
            dispatch(CHG_requestTransitional1());
            dispatch(CHG_requestTransitional2());
            dispatch(CHG_requestTransitional3());
            dispatch(CHG_requestTransitional4());
            dispatch(CHG_requestTransitional5());
            dispatch(CHG_requestTransitional6());
            dispatch(CHG_requestTransitional7());
            dispatch(CHG_requestTransitionalOver7());
        };

        return () => {
            mounted = false;
        };

    }, [dispatch]);

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
                {/* <label className='total'>{total ? total[0].countOfArticle : 0}</label> */}
            </div>
            <div className='totals-qty'>
                {/* <label className='total'>{total ? total[0].onHandQty : 0}</label> */}
            </div>
        </div>

    </div>
    );
}

export default TransitionalOverview;
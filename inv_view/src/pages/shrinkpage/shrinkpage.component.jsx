import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DailyShrinkReport from '../../components/shrinkreports/dailyshrink/dailyshrinkreport';
import WeeklyShrinkReport from '../../components/shrinkreports/weeklyshrink/weeklyshrinkreport';
import MonthlyShrinkReport from '../../components/shrinkreports/monthlyshrink/monthlyshrinkreport';
import YearlyShrinkReport from '../../components/shrinkreports/yearlyshrink/yearlyshrinkreport';
import Download from './export';

import {
    CHG_requestDailyShrinkData, 
    CHG_requestWeeklyShrinkData, 
    CHG_requestMonthlyShrinkData, 
    CHG_requestYearlyShrinkData
} from '../../redux/shrinkpage/shrinkpage.actions'

import './shrink.styles.css'

const ShrinkPage = ({ history }) => {

    const dispatch = useDispatch();

    const dailyShrinkData = useSelector(state => state.shrinkData.CHG_dailyShrink);
    const weeklyShrinkData = useSelector(state => state.shrinkData.CHG_weeklyShrink);
    const monthlyShrinkData = useSelector(state => state.shrinkData.CHG_monthlyShrink);
    const yearlyShrinkData = useSelector(state => state.shrinkData.CHG_yearlyShrink);

    useEffect(() => {
        dispatch(CHG_requestDailyShrinkData());
        dispatch(CHG_requestWeeklyShrinkData());
        dispatch(CHG_requestMonthlyShrinkData());
        dispatch(CHG_requestYearlyShrinkData());
    }, [dispatch]);

    return (
        
        <div className='shrinkpage'>
        <nav onClick = {() => history.push('/fnt-chg-progress')} >Progress View</nav>

        <div id='shrink-page-wrapper'>
            <div className='download'>
                <Download daily={dailyShrinkData} weekly={weeklyShrinkData} monthly={monthlyShrinkData} yearly={yearlyShrinkData}></Download>
            </div>
            <div className='main-container'>

                <div className="daily-shrink-header table-title">
                <header>Shrink by Day </header>
                </div>
                <div className="daily-shrink-container table-border">
                    <DailyShrinkReport data={dailyShrinkData} className='daily-shrink-data'></DailyShrinkReport>
                </div>
                
                <div className="weekly-shrink-header table-title">
                <header>Shrink by Week </header>
                </div>
                
                <div className="weekly-shrink-container table-border">
                    <WeeklyShrinkReport data={weeklyShrinkData}></WeeklyShrinkReport>
                </div>

                <div className="monthly-shrink-header table-title" style={{paddingRight: "1em"}}>
                <header>Shrink by Month </header>
                </div>

                <div className="monthly-shrink-container table-border"> 
                    <MonthlyShrinkReport data={monthlyShrinkData}></MonthlyShrinkReport>
                </div>

                <div className="yearly-shrink-header table-title" style={{paddingRight: "1em"}}>
                <header>Shrink by Year </header>
                </div>
                <div className="yearly-shrink-container table-border" >
                    <YearlyShrinkReport data={yearlyShrinkData}></YearlyShrinkReport>
                </div>
                <div className='daily-download-button'>

                </div>
                <div className='download-button'>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ShrinkPage;
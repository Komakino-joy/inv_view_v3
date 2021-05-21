import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import DailyShrinkReport from '../../components/shrinkreports/dailyshrink/dailyshrinkreport';
import WeeklyShrinkReport from '../../components/shrinkreports/weeklyshrink/weeklyshrinkreport';
import MonthlyShrinkReport from '../../components/shrinkreports/monthlyshrink/monthlyshrinkreport';
import YearlyShrinkReport from '../../components/shrinkreports/yearlyshrink/yearlyshrinkreport';
import Download from './export';

import {
    FSC_requestDailyShrinkData, 
    FSC_requestWeeklyShrinkData, 
    FSC_requestMonthlyShrinkData, 
    FSC_requestYearlyShrinkData
} from '../../redux/shrinkpage/shrinkpage.actions'

import './shrink.styles.css'

const FscShrinkPage = ({ 
    history, dailyShrinkData, weeklyShrinkData, monthlyShrinkData, yearlyShrinkData, 
    requestDailyShrink, requestWeeklyShrink, requestMonthlyShrink, requestYearlyShrink }) => {

    useEffect(() => {
        requestDailyShrink()
        requestWeeklyShrink()
        requestMonthlyShrink()
        requestYearlyShrink()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        
        <div className='shrinkpage'>
        <nav onClick = {() => history.push('/fnt-fsc-progress')} >Progress View</nav>

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

const mapStateToProps = (state) => ({
    state,
    dailyShrinkData: state.shrinkData.dailyShrink,
    weeklyShrinkData: state.shrinkData.weeklyShrink,
    monthlyShrinkData: state.shrinkData.monthlyShrink,
    yearlyShrinkData: state.shrinkData.yearlyShrink
})

const mapDispatchToProps = (dispatch) => ({
    requestDailyShrink: () => {dispatch(FSC_requestDailyShrinkData())},
    requestWeeklyShrink: () => {dispatch(FSC_requestWeeklyShrinkData())},
    requestMonthlyShrink: () => {dispatch(FSC_requestMonthlyShrinkData())},
    requestYearlyShrink: () => {dispatch(FSC_requestYearlyShrinkData())}
    
})

export default connect(mapStateToProps, mapDispatchToProps)(FscShrinkPage);
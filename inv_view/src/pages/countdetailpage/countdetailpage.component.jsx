import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import DailyCountsReport from '../../components/CountQuantityDetail/dailycountquantity';
import CountsByUser from '../../components/CountQuantityDetail/countsbyuser';
import CountsByUserByDay from '../../components/CountQuantityDetail/counts-by-user-by-day';
import Download from './export';

import {requestDailyCountData, requestUserCountData, requestUserCountByDay} from '../../redux/countdetailpage/countdetailpage.actions'

import './countdetail.styles.css'

const CountDetailPage = ({ 
    history, dailyCountData, requestDailyCountData, userCountData, userCountByDayData, requestUserCountData,requestUserCountByDay}) => {

    

    useEffect(() => {
        requestDailyCountData()
        requestUserCountData()
        requestUserCountByDay()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        
        <div className='countpage'>
        <nav onClick = {() => history.push('/fnt-chg-progress')}>Back</nav>
        <div id='count-page-wrapper'>
            <div className='download'>
                <Download daily={dailyCountData} countsByUser={userCountData} countsByUserByDay={userCountByDayData}></Download>
            </div>
            <div className='main-count-container'>

                <div className="daily-count-header table-title">
                <header>Count detail by day</header>
                </div>
                <div className="daily-count-container table-border">
                    <DailyCountsReport data={dailyCountData} className='daily-count-data'></DailyCountsReport>
                </div>

                <div className="user-count-header table-title">
                <header>{`Counts by user, year-to-date (${new Date().getFullYear()})`} </header>
                </div>
                <div className="user-count-container table-border">
                    <CountsByUser data={userCountData} className='daily-count-data'></CountsByUser>
                </div>

                <div className="daily-count-by-user-header table-title">
                <header>{`Counts by user by day`} </header>
                </div>
                <div className="daily-count-by-user-container table-border">
                    <CountsByUserByDay data={userCountByDayData} className='daily-count-data'></CountsByUserByDay>
                </div>
                
            </div>
        </div>
    </div>
    )
};

const mapStateToProps = (state) => ({
    dailyCountData: state.countData.dailyCount,
    userCountData: state.countData.userCount,
    userCountByDayData: state.countData.userCountByDay
});

const mapDispatchToProps = (dispatch) => ({
    requestDailyCountData: () => {dispatch(requestDailyCountData())},
    requestUserCountData: () => {dispatch(requestUserCountData())},
    requestUserCountByDay: () => {dispatch(requestUserCountByDay())}
});

export default connect(mapStateToProps, mapDispatchToProps)(CountDetailPage);
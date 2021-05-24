import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DailyCountsReport from '../../components/CountQuantityDetail/dailycountquantity';
import CountsByUser from '../../components/CountQuantityDetail/countsbyuser';
import CountsByUserByDay from '../../components/CountQuantityDetail/counts-by-user-by-day';
import Download from './export';

import {
    CHG_requestDailyCountData, 
    CHG_requestUserCountData, 
    CHG_requestUserCountByDay,
} from '../../redux/countdetailpage/countdetailpage.actions'

import './countdetail.styles.css'

const CountDetailPage = ({ history }) => {
        const dispatch = useDispatch();

        const dailyCountData = useSelector(state => state.countData.CHG_dailyCount);
        const userCountData = useSelector(state => state.countData.CHG_userCount);
        const userCountByDayData = useSelector(state => state.countData.CHG_userCountByDay);

    useEffect(() => {
        dispatch(CHG_requestDailyCountData())
        dispatch(CHG_requestUserCountData())
        dispatch(CHG_requestUserCountByDay())
    }, [dispatch]);

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


export default CountDetailPage;
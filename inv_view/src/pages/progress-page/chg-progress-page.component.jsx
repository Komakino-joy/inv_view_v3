import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router-dom';

import ActiveLocs from '../../components/ActiveLocs/active-locs.component';
import CountQtyOverview from '../../components/CountQuantityOverview/count-qty-overview.component';
import CountVarianceOverview from '../../components/CountVarianceOverview/count-variance-overview.component';
import TransitionalOverview from '../../components/TransitionalOverview/transitional-overview.component';
import NotPutaway from '../../components/NotPutawayOverview/not-putaway.component';
import ProblemResolve from '../../components/ProblemResolve/problem-resolve.component';
import Damages from '../../components/Damages/damages.component';
import LatestCountData from '../../components/LatestCountData/latest-count-data.component';

import {
  CHG_requestOccupiedLocationsCounted,
  CHG_requestOccupiedLocationsUncounted,
  CHG_requestEmptyLocationsCounted,
  CHG_requestEmptyLocationsUncounted,
  CHG_requestExpectedQty,
  CHG_requestAbsExpectedQty,
  CHG_requestVarianceQty,
  CHG_requestAbsVarianceQty,
  CHG_requestUniqueLocs,
  CHG_requestLocsWithVarianceCount,
  CHG_requestLatestCountData,
  CHG_requestNotPutaway0,
  CHG_requestNotPutaway1,
  CHG_requestNotPutaway2,
  CHG_requestNotPutaway3,
  CHG_requestNotPutaway4,
  CHG_requestNotPutaway5,
  CHG_requestNotPutaway6,
  CHG_requestNotPutaway7,
  CHG_requestNotPutawayOver7,
  CHG_requestTransitional0,
  CHG_requestTransitional1,
  CHG_requestTransitional2,
  CHG_requestTransitional3,
  CHG_requestTransitional4,
  CHG_requestTransitional5,
  CHG_requestTransitional6,
  CHG_requestTransitional7,
  CHG_requestTransitionalOver7,
  CHG_requestTransitionalTotal,
  CHG_requestPr,
  CHG_requestDmg,
} from '../../redux/progress.page/progress.page.actions';

import './App.css'

function ProgressPage({ history }) {

  const dispatch = useDispatch();
  const occupiedLocsCounted = useSelector(state => state.CHG_progressData.occupiedLocCounted);
  const occupiedLocsUncounted = useSelector(state => state.CHG_progressData.occupiedLocUnCounted);
  const emptyLocsCounted = useSelector(state => state.CHG_progressData.emptyLocCounted);
  const emptyLocsUncounted = useSelector(state => state.CHG_progressData.emptyLocUncounted);
  const locTotal  = occupiedLocsCounted + occupiedLocsUncounted + emptyLocsCounted + emptyLocsUncounted;
  const netExpected = useSelector(state => state.CHG_progressData.expectedQty);
  const absExpected = useSelector(state => state.CHG_progressData.absExpectedQty);
  const netVariance = useSelector(state => state.CHG_progressData.varianceQty);
  const absVariance = useSelector(state => state.CHG_progressData.absVarianceQty);
  const locsVisited = useSelector(state => state.CHG_progressData.uniqueLocsCounted);
  const totalVariances = useSelector(state => state.CHG_progressData.locsWithVarianceCount);
  const latestCountData = useSelector(state => state.CHG_progressData.latestCountData);
  const notPutawayCurrentDay = useSelector(state => state.CHG_progressData.notPutaway0);
  const notPutawayOneDay = useSelector(state => state.CHG_progressData.notPutaway1);
  const notPutawayTwoDay = useSelector(state => state.CHG_progressData.notPutaway2);
  const notPutawayThreeDay = useSelector(state => state.CHG_progressData.notPutaway3);
  const notPutawayFourDay = useSelector(state => state.CHG_progressData.notPutaway4);
  const notPutawayFiveDay = useSelector(state => state.CHG_progressData.notPutaway5);
  const notPutawaySixDay = useSelector(state => state.CHG_progressData.notPutaway6);
  const notPutawaySevenDay = useSelector(state => state.CHG_progressData.notPutaway7);
  const notPutawayOverSevenDay = useSelector(state => state.CHG_progressData.notPutawayOver7);
  const transitionalCurrentDay = useSelector(state => state.CHG_progressData.transitional0);
  const transitionalOneDay = useSelector(state => state.CHG_progressData.transitional1);
  const transitionalTwoDay = useSelector(state => state.CHG_progressData.transitional2);
  const transitionalThreeDay = useSelector(state => state.CHG_progressData.transitional3);
  const transitionalFourDay = useSelector(state => state.CHG_progressData.transitional4);
  const transitionalFiveDay = useSelector(state => state.CHG_progressData.transitional5);
  const transitionalSixDay = useSelector(state => state.CHG_progressData.transitional6);
  const transitionalSevenDay = useSelector(state => state.CHG_progressData.transitional7);
  const transitionalOverSevenDay = useSelector(state => state.CHG_progressData.transitionalOver7);
  const transitionalTotal = useSelector(state => state.CHG_progressData.transitionalTotal);
  const problemResolve = useSelector(state => state.CHG_progressData.pr)
  const damages = useSelector(state => state.CHG_progressData.damages.damage);
  const headerColor = '#472f91';

  useEffect(() => {
      let mounted = true;

      if (mounted){
          dispatch(CHG_requestOccupiedLocationsCounted());
          dispatch(CHG_requestOccupiedLocationsUncounted());
          dispatch(CHG_requestEmptyLocationsCounted());
          dispatch(CHG_requestEmptyLocationsUncounted());
          dispatch(CHG_requestExpectedQty());
          dispatch(CHG_requestAbsExpectedQty());
          dispatch(CHG_requestVarianceQty());
          dispatch(CHG_requestAbsVarianceQty());
          dispatch(CHG_requestOccupiedLocationsCounted());
          dispatch(CHG_requestEmptyLocationsCounted());
          dispatch(CHG_requestUniqueLocs());
          dispatch(CHG_requestLocsWithVarianceCount());
          dispatch(CHG_requestLatestCountData());
          dispatch(CHG_requestNotPutaway0());
          dispatch(CHG_requestNotPutaway1());
          dispatch(CHG_requestNotPutaway2());
          dispatch(CHG_requestNotPutaway3());
          dispatch(CHG_requestNotPutaway4());
          dispatch(CHG_requestNotPutaway5());
          dispatch(CHG_requestNotPutaway6());
          dispatch(CHG_requestNotPutaway7());
          dispatch(CHG_requestNotPutawayOver7());
          dispatch(CHG_requestTransitional0());
          dispatch(CHG_requestTransitional1());
          dispatch(CHG_requestTransitional2());
          dispatch(CHG_requestTransitional3());
          dispatch(CHG_requestTransitional4());
          dispatch(CHG_requestTransitional5());
          dispatch(CHG_requestTransitional6());
          dispatch(CHG_requestTransitional7());
          dispatch(CHG_requestTransitionalOver7());
          dispatch(CHG_requestTransitionalTotal());
          dispatch(CHG_requestPr());
          dispatch(CHG_requestDmg());
      };

      return () => {
          mounted = false;
      };

  },[dispatch]);


  return (
    <div>
        <nav onClick = {() => history.push('/fnt-chg-shrink-data')}>Shrink Reports</nav>
        <nav className='secondary-nav' onClick = {() => history.push('/fnt-chg-report-upload')}>Report Uploads</nav>
      <div className="App">
      
        <div className='active-locs' >
          <ActiveLocs 
            headerColor={headerColor}
            occupiedLocsCounted = {occupiedLocsCounted}
            occupiedLocsUncounted = {occupiedLocsUncounted}
            emptyLocsCounted = {emptyLocsCounted}
            emptyLocsUncounted = {emptyLocsUncounted}
            locTotal  = {locTotal}
            />
        </div> 
      
        <div className='qty-overview' >
         <CountQtyOverview 
            headerColor={headerColor}
            netExpected={netExpected}
            absExpected={absExpected}
            netVariance={netVariance}
            absVariance={absVariance}
         />
        </div> 

        <div className='variance-overview' > 
          <CountVarianceOverview 
            headerColor={headerColor}
            occupiedLocsCounted = {occupiedLocsCounted}
            emptyLocsCounted = {emptyLocsCounted}
            locsVisited = {locsVisited}
            totalVariances = {totalVariances}
            />
        </div> 

        <div className='latest-count' >
          <Route
            render={(props) => (
              <LatestCountData 
                {...props} 
                headerColor={headerColor}  
                latestCountData={latestCountData}
                />
            )}
          />
        </div> 

        <div className='not-putaway' >
          <NotPutaway 
            headerColor={headerColor}
            currentDay = {notPutawayCurrentDay}
            oneDay = {notPutawayOneDay} 
            twoDay = {notPutawayTwoDay} 
            threeDay = {notPutawayThreeDay}
            fourDay = {notPutawayFourDay}
            fiveDay = {notPutawayFiveDay}
            sixDay = {notPutawaySixDay}
            sevenDay = {notPutawaySevenDay}
            overSevenDay = {notPutawayOverSevenDay} 
            />
        </div> 

        <div className='transitional' >
          <TransitionalOverview 
            headerColor={headerColor}
            currentDay = {transitionalCurrentDay}
            oneDay = {transitionalOneDay} 
            twoDay = {transitionalTwoDay} 
            threeDay = {transitionalThreeDay}
            fourDay = {transitionalFourDay}
            fiveDay = {transitionalFiveDay}
            sixDay = {transitionalSixDay}
            sevenDay = {transitionalSevenDay}
            overSevenDay = {transitionalOverSevenDay} 
            transitionalTotal = {transitionalTotal}
            />
        </div> 

        <div className='problem-resolve' >
          <ProblemResolve 
            headerColor={headerColor}
            problemResolve={problemResolve}
            />
        </div> 
`       
        <div className='damage' >
          <Damages 
            headerColor={headerColor}
            damages={damages} 
            />
        </div>

    </div>
    </div>
  );
}

export default ProgressPage;

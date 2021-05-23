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
  CHG_requestVarianceQty,
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
  const occupiedLocsCounted = useSelector(state => state.progressData.CHG_occupiedLocCounted);
  const occupiedLocsUncounted = useSelector(state => state.progressData.CHG_occupiedLocUnCounted);
  const emptyLocsCounted = useSelector(state => state.progressData.CHG_emptyLocCounted);
  const emptyLocsUncounted = useSelector(state => state.progressData.CHG_emptyLocUncounted);
  const locTotal  = occupiedLocsCounted + occupiedLocsUncounted + emptyLocsCounted + emptyLocsUncounted;
  const netExpected = useSelector(state => state.progressData.CHG_expectedQty);
  const netVariance = useSelector(state => state.progressData.CHG_varianceQty);
  const locsVisited = useSelector(state => state.progressData.CHG_uniqueLocsCounted);
  const totalVariances = useSelector(state => state.progressData.CHG_locsWithVarianceCount);
  const latestCountData = useSelector(state => state.progressData.CHG_latestCountData);
  const notPutawayCurrentDay = useSelector(state => state.progressData.CHG_notPutaway0);
  const notPutawayOneDay = useSelector(state => state.progressData.CHG_notPutaway1);
  const notPutawayTwoDay = useSelector(state => state.progressData.CHG_notPutaway2);
  const notPutawayThreeDay = useSelector(state => state.progressData.CHG_notPutaway3);
  const notPutawayFourDay = useSelector(state => state.progressData.CHG_notPutaway4);
  const notPutawayFiveDay = useSelector(state => state.progressData.CHG_notPutaway5);
  const notPutawaySixDay = useSelector(state => state.progressData.CHG_notPutaway6);
  const notPutawaySevenDay = useSelector(state => state.progressData.CHG_notPutaway7);
  const notPutawayOverSevenDay = useSelector(state => state.progressData.CHG_notPutawayOver7);
  const transitionalCurrentDay = useSelector(state => state.progressData.CHG_transitional0);
  const transitionalOneDay = useSelector(state => state.progressData.CHG_transitional1);
  const transitionalTwoDay = useSelector(state => state.progressData.CHG_transitional2);
  const transitionalThreeDay = useSelector(state => state.progressData.CHG_transitional3);
  const transitionalFourDay = useSelector(state => state.progressData.CHG_transitional4);
  const transitionalFiveDay = useSelector(state => state.progressData.CHG_transitional5);
  const transitionalSixDay = useSelector(state => state.progressData.CHG_transitional6);
  const transitionalSevenDay = useSelector(state => state.progressData.CHG_transitional7);
  const transitionalOverSevenDay = useSelector(state => state.progressData.CHG_transitionalOver7);
  const problemResolve = useSelector(state => state.progressData.CHG_pr)
  const damages = useSelector(state => state.progressData.damages[0].damage);
  const headerColor = '#472f91';

  useEffect(() => {
      let mounted = true;

      if (mounted){
          dispatch(CHG_requestOccupiedLocationsCounted());
          dispatch(CHG_requestOccupiedLocationsUncounted());
          dispatch(CHG_requestEmptyLocationsCounted());
          dispatch(CHG_requestEmptyLocationsUncounted());
          dispatch(CHG_requestExpectedQty());
          dispatch(CHG_requestVarianceQty());
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

  }, [dispatch]);


  return (
    <div>
        <nav onClick = {() => history.push('/fnt-shrink-data')}>Shrink Reports</nav>
        <nav className='secondary-nav' onClick = {() => history.push('/fnt-report-upload')}>Report Uploads</nav>
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
            netVariance={netVariance}
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
            />
        </div>

        <div className='problem-resolve' >
          <ProblemResolve 
            headerColor={headerColor}
            problemResolve={problemResolve}
            />
        </div>

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

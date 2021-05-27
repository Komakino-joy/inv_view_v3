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
  FSC_requestOccupiedLocationsCounted,
  FSC_requestOccupiedLocationsUncounted,
  FSC_requestEmptyLocationsCounted,
  FSC_requestEmptyLocationsUncounted,
  FSC_requestExpectedQty,
  FSC_requestVarianceQty,
  FSC_requestUniqueLocs,
  FSC_requestLocsWithVarianceCount,
  FSC_requestLatestCountData,
  FSC_requestNotPutaway0,
  FSC_requestNotPutaway1,
  FSC_requestNotPutaway2,
  FSC_requestNotPutaway3,
  FSC_requestNotPutaway4,
  FSC_requestNotPutaway5,
  FSC_requestNotPutaway6,
  FSC_requestNotPutaway7,
  FSC_requestNotPutawayOver7,
  FSC_requestTransitional0,
  FSC_requestTransitional1,
  FSC_requestTransitional2,
  FSC_requestTransitional3,
  FSC_requestTransitional4,
  FSC_requestTransitional5,
  FSC_requestTransitional6,
  FSC_requestTransitional7,
  FSC_requestTransitionalOver7,
  FSC_requestTransitionalTotal,
  FSC_requestPr,
  FSC_requestDmg,
} from '../../redux/progress.page/progress.page.actions';

import './App.css'

function ProgressPage({ history }) {

  const dispatch = useDispatch();
  const occupiedLocsCounted = useSelector(state => state.FSC_progressData.occupiedLocCounted);
  const occupiedLocsUncounted = useSelector(state => state.FSC_progressData.occupiedLocUnCounted);
  const emptyLocsCounted = useSelector(state => state.FSC_progressData.emptyLocCounted);
  const emptyLocsUncounted = useSelector(state => state.FSC_progressData.emptyLocUncounted);
  const locTotal  = occupiedLocsCounted + occupiedLocsUncounted + emptyLocsCounted + emptyLocsUncounted;
  const netExpected = useSelector(state => state.FSC_progressData.expectedQty);
  const netVariance = useSelector(state => state.FSC_progressData.varianceQty);
  const locsVisited = useSelector(state => state.FSC_progressData.uniqueLocsCounted);
  const totalVariances = useSelector(state => state.FSC_progressData.locsWithVarianceCount);
  const latestCountData = useSelector(state => state.FSC_progressData.latestCountData);
  const notPutawayCurrentDay = useSelector(state => state.FSC_progressData.notPutaway0);
  const notPutawayOneDay = useSelector(state => state.FSC_progressData.notPutaway1);
  const notPutawayTwoDay = useSelector(state => state.FSC_progressData.notPutaway2);
  const notPutawayThreeDay = useSelector(state => state.FSC_progressData.notPutaway3);
  const notPutawayFourDay = useSelector(state => state.FSC_progressData.notPutaway4);
  const notPutawayFiveDay = useSelector(state => state.FSC_progressData.notPutaway5);
  const notPutawaySixDay = useSelector(state => state.FSC_progressData.notPutaway6);
  const notPutawaySevenDay = useSelector(state => state.FSC_progressData.notPutaway7);
  const notPutawayOverSevenDay = useSelector(state => state.FSC_progressData.notPutawayOver7);
  const transitionalCurrentDay = useSelector(state => state.FSC_progressData.transitional0);
  const transitionalOneDay = useSelector(state => state.FSC_progressData.transitional1);
  const transitionalTwoDay = useSelector(state => state.FSC_progressData.transitional2);
  const transitionalThreeDay = useSelector(state => state.FSC_progressData.transitional3);
  const transitionalFourDay = useSelector(state => state.FSC_progressData.transitional4);
  const transitionalFiveDay = useSelector(state => state.FSC_progressData.transitional5);
  const transitionalSixDay = useSelector(state => state.FSC_progressData.transitional6);
  const transitionalSevenDay = useSelector(state => state.FSC_progressData.transitional7);
  const transitionalOverSevenDay = useSelector(state => state.FSC_progressData.transitionalOver7);
  const problemResolve = useSelector(state => state.FSC_progressData.pr)
  const damages = useSelector(state => state.FSC_progressData.damages.damage);
  const headerColor = 'rgb(49, 49, 49)';

  useEffect(() => {
      let mounted = true;

      if (mounted){
          dispatch(FSC_requestOccupiedLocationsCounted());
          dispatch(FSC_requestOccupiedLocationsUncounted());
          dispatch(FSC_requestEmptyLocationsCounted());
          dispatch(FSC_requestEmptyLocationsUncounted());
          dispatch(FSC_requestExpectedQty());
          dispatch(FSC_requestVarianceQty());
          dispatch(FSC_requestOccupiedLocationsCounted());
          dispatch(FSC_requestEmptyLocationsCounted());
          dispatch(FSC_requestUniqueLocs());
          dispatch(FSC_requestLocsWithVarianceCount());
          dispatch(FSC_requestLatestCountData());
          dispatch(FSC_requestNotPutaway0());
          dispatch(FSC_requestNotPutaway1());
          dispatch(FSC_requestNotPutaway2());
          dispatch(FSC_requestNotPutaway3());
          dispatch(FSC_requestNotPutaway4());
          dispatch(FSC_requestNotPutaway5());
          dispatch(FSC_requestNotPutaway6());
          dispatch(FSC_requestNotPutaway7());
          dispatch(FSC_requestNotPutawayOver7());
          dispatch(FSC_requestTransitional0());
          dispatch(FSC_requestTransitional1());
          dispatch(FSC_requestTransitional2());
          dispatch(FSC_requestTransitional3());
          dispatch(FSC_requestTransitional4());
          dispatch(FSC_requestTransitional5());
          dispatch(FSC_requestTransitional6());
          dispatch(FSC_requestTransitional7());
          dispatch(FSC_requestTransitionalOver7());
          dispatch(FSC_requestTransitionalTotal());
          dispatch(FSC_requestPr());
          dispatch(FSC_requestDmg());
      };

      return () => {
          mounted = false;
      };

  }, [dispatch]);


  return (
    <div>
        <nav onClick = {() => history.push('/fnt-fsc-shrink-data')}>Shrink Reports</nav>
        <nav className='secondary-nav' onClick = {() => history.push('/fnt-fsc-report-upload')}>Report Uploads</nav>
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

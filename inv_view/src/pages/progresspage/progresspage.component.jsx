import ActiveLocs from '../../components/ActiveLocs/activeLocs.component';
import CountQtyOverview from '../../components/CountQuantityOverview/countQtyOverview.component';
import CountVarianceOverview from '../../components/CountVarianceOverview/CountVarianceOverview.component';
import TransitionalOverview from '../../components/TransitionalOverview/TransitionalOverview.component';
import NotPutaway from '../../components/NotPutawayOverview/NotPutaway.component';
import ProblemResolve from '../../components/ProblemResolve/ProblemResolve.component';
import Damages from '../../components/Damages/Damages.component';
import { Route } from 'react-router-dom';
import './App.css'
import LatestCountData from '../../components/LatestCountData/latest-count-data.component';

function ProgressPage({ history }) {
  return (
    <div>
        <nav onClick = {() => history.push('/fnt-chg-shrink-data')}>Shrink Reports</nav>
        <nav className='secondary-nav' onClick = {() => history.push('/fnt-chg-report-upload')}>Report Uploads</nav>
    <div className="App">
      
        <div className='active-locs' >
          <ActiveLocs headerColor='#472f91'/>
        </div>
      
        <div className='qty-overview' >
         <CountQtyOverview headerColor='#472f91'/>
        </div>

        <div className='variance' > 
          <CountVarianceOverview headerColor='#472f91'/>
        </div>

        <div className='latest-count' >
          <Route
            render={(props) => (
              <LatestCountData {...props} headerColor='#472f91'  />
            )}
          />
        </div>

        <div className='not-putaway' >
          <NotPutaway headerColor='#472f91'/>
        </div>

        <div className='transitional' >
          <TransitionalOverview headerColor='#472f91'/>
        </div>

        <div className='problem-resolve' >
          <ProblemResolve headerColor='#472f91'/>
        </div>

        <div className='damage' >
          <Damages headerColor='#472f91'/>
        </div>

    </div>
    </div>
  );
}

export default ProgressPage;

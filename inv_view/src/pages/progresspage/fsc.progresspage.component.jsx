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

import { FSC_API_URL } from '../../api/api';


function ProgressPage({ history }) {

  const fscColor = '#2b2b2b'

  return (
    <div>
        <nav onClick = {() => history.push('/fnt-fsc-shrink-data')}>Shrink Reports</nav>
        <nav className='secondary-nav' onClick = {() => history.push('/fnt-fsc-report-upload')}>Report Uploads</nav>
    <div className="App">
      
        <div className='active-locs'>
          <ActiveLocs apiUrl={FSC_API_URL} businessUnit='fsc' headerColor= {`${fscColor}`}/>
        </div>
      
        <div className='qty-overview'>
         <CountQtyOverview apiUrl={FSC_API_URL} businessUnit='fsc' headerColor= {`${fscColor}`}/>
        </div>

        <div className='variance'> 
          <CountVarianceOverview apiUrl={FSC_API_URL} businessUnit='fsc' headerColor= {`${fscColor}`}/>
        </div>

        <div className='latest-count'>
          <Route
              render={(props) => (
                <LatestCountData {...props} apiUrl={FSC_API_URL} businessUnit='fsc' headerColor= {`${fscColor}`}/>
              )}
          />
        </div>

        <div className='not-putaway'>
          <NotPutaway apiUrl={FSC_API_URL} businessUnit='fsc' headerColor= {`${fscColor}`}/>
        </div>

        <div className='transitional'>
          <TransitionalOverview apiUrl={FSC_API_URL} businessUnit='fsc' headerColor= {`${fscColor}`}/>
        </div>

        <div className='problem-resolve'>
          <ProblemResolve apiUrl={FSC_API_URL} businessUnit='fsc' headerColor= {`${fscColor}`}/>
        </div>

        <div className='damage'>
          <Damages apiUrl={FSC_API_URL} businessUnit='fsc' headerColor= {`${fscColor}`}/>
        </div>

    </div>
    </div>
  );
}

export default ProgressPage;

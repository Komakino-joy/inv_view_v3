import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import HomePage from './pages/home-page/home-page';
import Header from './components/Header/header.component.jsx';

import ChgProgressPage from './pages/progress-page/chg-progress-page.component';
import ChgShrinkPage from './pages/shrink-page/chg-shrink-page.component.jsx';
import ChgCountDetailPage from './pages/count-detail-page/chg-count-detail-page.component';
import ChgReportUploadPage from './pages/report-upload-page/chg-report-upload-page.component';

import FscProgressPage from './pages/progress-page/fsc-progress-page.component';
import FscShrinkPage from './pages/shrink-page/fsc-shrink-page.component.jsx';
import FscCountDetailPage from './pages/count-detail-page/fsc.countdetailpage.component';
import FscReportUploadPage from './pages/report-upload-page/fsc-report-upload-page.component';

const App = () => {

  const location = useLocation();

  return (
    <>
      {location.pathname !== '/' ? <Header/> : null}
      <Switch>
            <Route exact path = '/' component={HomePage}/>
            
            <Route exact path = '/fnt-chg-progress' component={ChgProgressPage}/>
            <Route exact path = '/fnt-chg-shrink-data' component={ChgShrinkPage}/>
            <Route exact path = '/fnt-chg-count-data' component={ChgCountDetailPage}/>
            <Route exact path = '/fnt-chg-report-upload' component={ChgReportUploadPage}/>

            <Route exact path = '/fnt-fsc-progress' component={FscProgressPage}/>
            <Route exact path = '/fnt-fsc-shrink-data' component={FscShrinkPage}/>
            <Route exact path = '/fnt-fsc-count-data' component={FscCountDetailPage}/>
            <Route exact path = '/fnt-fsc-report-upload' component={FscReportUploadPage}/>
      </Switch>
    </>
  );
}

export default App;
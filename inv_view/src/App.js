import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import HomePage from './pages/homepage/hompage';
import Header from './components/Header/header.component.jsx';
import ChgProgressPage from './pages/progresspage/progresspage.component';
import ChgShrinkPage from './pages/shrinkpage/shrinkpage.component.jsx';
import ChgCountDetailPage from './pages/countdetailpage/countdetailpage.component';
import ChgReportUploadPage from './pages/reportuploadpage/reportuploadpage.component';

import FscProgressPage from './pages/progresspage/fsc.progresspage.component';
import FscShrinkPage from './pages/shrinkpage/fsc.shrinkpage.component.jsx';
import FscCountDetailPage from './pages/countdetailpage/fsc.countdetailpage.component';
import FscReportUploadPage from './pages/reportuploadpage/fsc.reportuploadpage.component';

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
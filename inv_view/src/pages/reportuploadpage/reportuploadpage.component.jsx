import React from 'react';
import { connect } from 'react-redux';

import { 
    ReportPageBody, ReportGridContainer, DailyEntryContainer,
    EmptyActiveContainer, TransitionalReportContainer,
    NotPutawayContainer, AdjustmentReportContainer, CycleCountReportContainer
} from './reportuploadpage.styles'

import ReportUpload from '../../components/ReportUploads/reportUploads.components';
import DailyEntry from '../../components/DailyEntry/daily-entry.component';
import DailyEntryReportModal from '../../components/DailyEntryModal/daily-entry-report-modal.component';

const ReportUploadPage = ({history, seenDailyEntryReport}) => {

    return(
        <div>
            
        <nav id='report-upload-nav' onClick = {() => history.push('/fnt-chg-progress')} >Progress View</nav>
        <ReportPageBody>
            <ReportGridContainer>
            <DailyEntryContainer className="daily-entry">
                    <DailyEntry 
                        header={'Daily Entry'} 
                        uploadType={"daily-entry-upload-header"}
                        
                    />
                </DailyEntryContainer>

                <EmptyActiveContainer className="empty-active-report">
                    <ReportUpload 
                        header={'Empty Active Report Upload'} 
                        uploadType={"empty-active-upload-header"}
                        url={"/upload-empty-active-locations"}
                        lastUpdatedUrl={"/empty-active-last-update"}
                        lastUpdatedPostUrl={'/empty-active-last-update-post'}
                    />
                </EmptyActiveContainer>
                <NotPutawayContainer className="not-putaway-report">
                    <ReportUpload 
                        header={'Not Putaway Report Upload'} 
                        uploadType={"not-putaway-upload-header"} 
                        url={"/upload-not-putaway"}
                        lastUpdatedUrl={"/not-putaway-last-update"}
                        lastUpdatedPostUrl={"/not-putaway-last-update-post"}
                    />
                </NotPutawayContainer>
                <TransitionalReportContainer className="transitional-report">
                    <ReportUpload 
                        header={'Transitional Inventory Report Upload'} 
                        uploadType={"transitional-upload-header"} 
                        url={'/upload-transitional-inventory'}
                        lastUpdatedUrl={"/transtional-last-update"}
                        lastUpdatedPostUrl={"/transtional-last-update-post"}
                    />
                </TransitionalReportContainer>
                <AdjustmentReportContainer className="adjustment-report" >
                    <ReportUpload 
                        header={'Adjustment Report Upload'} 
                        dataTracked 
                        uploadType={"adjustment-data-upload-header"}
                        url={"/upload-adjustments"}
                        lastUpdatedUrl={"/adjustment-last-update"}
                        lastUpdatedPostUrl={"/adjustment-last-update-post"}
                        newestRecordUrl={"/adjustment-newest-record"}
                        dupeCheck={"/adjustment-duplicate-check"}
                        dupeDelete={"/adjustment-duplicate-delete"}
                    />
                </AdjustmentReportContainer>
                <CycleCountReportContainer className="cycle-count-report" >
                    <ReportUpload 
                        header={'Cycle Count Report Upload'} 
                        dataTracked uploadType={"cycle-count-upload-header"}
                        url={"/upload-counts"}
                        lastUpdatedUrl={"/cyclecount-last-update"}
                        lastUpdatedPostUrl={"/cyclecount-last-update-post"}
                        newestRecordUrl={"/cyclecount-newest-record"}
                        dupeCheck={"/cyclecount-duplicate-check"}
                        dupeDelete={"/cyclecount-duplicate-delete"}
                    />
                </CycleCountReportContainer>

            </ReportGridContainer>
        </ReportPageBody>

        {seenDailyEntryReport ? <DailyEntryReportModal/> : null}

        </div>
    )
}

const mapStateToProps = (state) => ({
    seenDailyEntryReport : state.modalState.seenDailyEntry
})


export default connect(mapStateToProps)(ReportUploadPage);
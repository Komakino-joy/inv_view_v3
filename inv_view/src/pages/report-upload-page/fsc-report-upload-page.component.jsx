import React from 'react';
import { useSelector } from 'react-redux';

import ReportUpload from '../../components/ReportUploads/report-uploads.components';
import DailyEntry from '../../components/DailyEntry/fsc-daily-entry.component';
import DailyEntryReportModal from '../../components/DailyEntryModal/fsc-daily-entry-report-modal.component';

import { 
    ReportPageBody, ReportGridContainer, DailyEntryContainer,
    EmptyActiveContainer, TransitionalReportContainer,
    NotPutawayContainer, AdjustmentReportContainer, CycleCountReportContainer
} from './report-upload-page.styles';

import { FSC_API_URL } from '../../api/api';

import { FSC_fileUploadStart } from '../../redux/file-upload/file-upload.actions';

const ReportUploadPage = ({history}) => {
    
    const seenDailyEntryReport = useSelector(state => state.FSC_modalState.seenDailyEntry);

    return(
        <div>
            <nav id='report-upload-nav' onClick = {() => history.push('/fnt-fsc-progress')} >Progress View</nav>
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
                            header={'Empty Active Locations Report'} 
                            reportUrl={"http://vxpod01hcprdsci1.genco.com/sci/cgi-bin/cognos.cgi?b_action=cognosViewer&ui.action=run&ui.object=%2fcontent%2ffolder%5b%40name%3d%27Fontana%27%5d%2ffolder%5b%40name%3d%27Reports%27%5d%2freport%5b%40name%3d%27Empty%20Active%20Locations%20Report%27%5d&ui.name=Empty%20Active%20Locations%20Report&run.outputFormat=&run.prompt=true&ui.backURL=%2fsci%2fcgi-bin%2fcognos.cgi%3fb_action%3dxts.run%26m%3dportal%2fcc.xts%26m_folder%3di85E43AC88C074C8FB4EDA455C30DE9A3"}
                            uploadType={"empty-active-upload-header"}
                            apiRoute={"/excel/upload-empty-active-locations"}
                            lastUpdatedUrl={"/data/empty-active-last-update"}
                            lastUpdatedPostUrl={'/data/empty-active-last-update-post'}
                            baseUrl={FSC_API_URL}
                            dispatchFunction={FSC_fileUploadStart}
                        />
                    </EmptyActiveContainer>
                    <NotPutawayContainer className="not-putaway-report">
                        <ReportUpload 
                            header={'Aging Putaway Report'} 
                            reportUrl={"http://vxpod01hcprdsci1.genco.com/sci/cgi-bin/cognos.cgi?b_action=xts.run&m=portal/cc.xts&m_folder=i85E43AC88C074C8FB4EDA455C30DE9A3"}
                            uploadType={"not-putaway-upload-header"} 
                            apiRoute={"/excel/upload-not-putaway"}
                            lastUpdatedUrl={"/data/not-putaway-last-update"}
                            lastUpdatedPostUrl={"/data/not-putaway-last-update-post"}
                            baseUrl={FSC_API_URL}
                            dispatchFunction={FSC_fileUploadStart}
                        />
                    </NotPutawayContainer>
                    <TransitionalReportContainer className="transitional-report">
                        <ReportUpload 
                            header={'Inventory in Transitional Bucket Report'} 
                            reportUrl={"http://vxpod01hcprdsci1.genco.com/sci/cgi-bin/cognos.cgi?b_action=cognosViewer&ui.action=run&ui.object=%2fcontent%2ffolder%5b%40name%3d%27Fontana%27%5d%2ffolder%5b%40name%3d%27Reports%27%5d%2freport%5b%40name%3d%27Aging%20Putaway%20Report%27%5d&ui.name=Aging%20Putaway%20Report&run.outputFormat=&run.prompt=true&ui.backURL=%2fsci%2fcgi-bin%2fcognos.cgi%3fb_action%3dxts.run%26m%3dportal%2fcc.xts%26m_folder%3di85E43AC88C074C8FB4EDA455C30DE9A3"}
                            uploadType={"transitional-upload-header"} 
                            apiRoute={'/excel/upload-transitional-inventory'}
                            lastUpdatedUrl={"/data/transitional-last-update"}
                            lastUpdatedPostUrl={"/data/transitional-last-update-post"}
                            baseUrl={FSC_API_URL}
                            dispatchFunction={FSC_fileUploadStart}
                        />
                    </TransitionalReportContainer>
                    <AdjustmentReportContainer className="adjustment-report" >
                        <ReportUpload 
                            header={'Inventory Adjustment Report – Date Range'} 
                            reportUrl={"http://vxpod01hcprdsci1.genco.com/sci/cgi-bin/cognos.cgi?b_action=cognosViewer&ui.action=run&ui.object=%2fcontent%2ffolder%5b%40name%3d%27Fontana%27%5d%2ffolder%5b%40name%3d%27Reports%27%5d%2freport%5b%40name%3d%27Inventory%20Adjustment%20Report%20%e2%80%93%20Date%20Range%27%5d&ui.name=Inventory%20Adjustment%20Report%20%e2%80%93%20Date%20Range&run.outputFormat=&run.prompt=true&ui.backURL=%2fsci%2fcgi-bin%2fcognos.cgi%3fb_action%3dxts.run%26m%3dportal%2fcc.xts%26m_folder%3di85E43AC88C074C8FB4EDA455C30DE9A3"}
                            dataTracked 
                            uploadType={"adjustment-data-upload-header"}
                            apiRoute={"/excel/upload-adjustments"}
                            lastUpdatedUrl={"/data/adjustment-last-update"}
                            lastUpdatedPostUrl={"/data/adjustment-last-update-post"}
                            newestRecordUrl={"/data/adjustment-newest-record"}
                            dupeCheck={"/data/adjustment-duplicate-check"}
                            dupeDelete={"/data/adjustment-duplicate-delete"}
                            baseUrl={FSC_API_URL}
                            dispatchFunction={FSC_fileUploadStart}
                        />
                    </AdjustmentReportContainer>
                    <CycleCountReportContainer className="cycle-count-report" >
                        <ReportUpload 
                            header={'Cycle Count Report (FCA) (New)'} 
                            reportUrl={"http://vxpod01hcprdsci1.genco.com/sci/cgi-bin/cognos.cgi?b_action=cognosViewer&ui.action=run&ui.object=%2fcontent%2ffolder%5b%40name%3d%27Fontana%27%5d%2ffolder%5b%40name%3d%27Reports%27%5d%2freport%5b%40name%3d%27Cycle%20Count%20Report%20(FCA)%20(New)%27%5d&ui.name=Cycle%20Count%20Report%20(FCA)%20(New)&run.outputFormat=&run.prompt=true&ui.backURL=%2fsci%2fcgi-bin%2fcognos.cgi%3fb_action%3dxts.run%26m%3dportal%2fcc.xts%26m_folder%3di85E43AC88C074C8FB4EDA455C30DE9A3"}
                            dataTracked uploadType={"cycle-count-upload-header"}
                            apiRoute={"/excel/upload-counts"}
                            lastUpdatedUrl={"/data/cyclecount-last-update"}
                            lastUpdatedPostUrl={"/data/cyclecount-last-update-post"}
                            newestRecordUrl={"/data/cyclecount-newest-record"}
                            dupeCheck={"/data/cyclecount-duplicate-check"}
                            dupeDelete={"/data/cyclecount-duplicate-delete"}
                            baseUrl={FSC_API_URL}
                            dispatchFunction={FSC_fileUploadStart}
                        />
                    </CycleCountReportContainer>

                </ReportGridContainer>
            </ReportPageBody>

            {seenDailyEntryReport ? <DailyEntryReportModal/> : null}

        </div>
    );
};

export default ReportUploadPage;
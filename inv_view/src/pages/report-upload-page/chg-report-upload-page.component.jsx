import React from 'react';
import { useSelector } from 'react-redux';

import ReportUpload from '../../components/ReportUploads/report-uploads.components';
import DailyEntry from '../../components/DailyEntry/chg-daily-entry.component';
import DailyEntryReportModal from '../../components/DailyEntryModal/chg-daily-entry-report-modal.component';

import { 
    ReportPageBody, ReportGridContainer, DailyEntryContainer,
    EmptyActiveContainer, TransitionalReportContainer,
    NotPutawayContainer, AdjustmentReportContainer, CycleCountReportContainer
} from './report-upload-page.styles';

import { CHG_API_URL } from '../../api/api';


import { CHG_fileUploadStart } from '../../redux/file-upload/file-upload.actions';

const ReportUploadPage = ({history}) => {
    
    const seenDailyEntryReport = useSelector(state => state.modalState.seenDailyEntry);

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
                            reportUrl={"https://chgcasciprod.logistics.fedex.com/sci/bi/?perspective=classicviewer&id=i8DE397AA8B774310BA1B7AEFE64063CC&isViewer=false&isNewFromModule=false&isNewFromPackage=false&isNewDataSetFromModule=false&isNewDataSetFromPackage=false&isTemplate=false&isDataset=false&UIProfile=Titan&cmProperties%5Bid%5D=i8DE397AA8B774310BA1B7AEFE64063CC&cmProperties%5BdefaultName%5D=Empty+Active+Location&cmProperties%5Btype%5D=report&cmProperties%5Bpermissions%5D%5B%5D=execute&cmProperties%5Bpermissions%5D%5B%5D=read&cmProperties%5Bpermissions%5D%5B%5D=setPolicy&cmProperties%5Bpermissions%5D%5B%5D=traverse&cmProperties%5Bpermissions%5D%5B%5D=write&rsFinalRunOptions%5Bformat%5D=HTML&rsFinalRunOptions%5Ba11y%5D=false&rsFinalRunOptions%5Bbidi%5D=false&rsFinalRunOptions%5BrunInAdvancedViewer%5D=false&rsFinalRunOptions%5BDownload%5D=false&rsFinalRunOptions%5Bprompt%5D=true&rsFinalRunOptions%5BisApplication%5D=false"}
                            uploadType={"empty-active-upload-header"}
                            apiRoute={"/excel/upload-empty-active-locations"}
                            lastUpdatedUrl={"/data/empty-active-last-update"}
                            lastUpdatedPostUrl={'/data/empty-active-last-update-post'}
                            baseUrl={CHG_API_URL}
                            dispatchFunction={CHG_fileUploadStart}
                        />
                    </EmptyActiveContainer>
                    <NotPutawayContainer className="not-putaway-report">
                        <ReportUpload 
                            header={'Pending Putaway'} 
                            reportUrl={"https://chgcasciprod.logistics.fedex.com/sci/bi/?perspective=authoring&id=iBFD78D78656B4306A55E3196F7F5E536&isViewer=false&isNewFromModule=false&isNewFromPackage=false&isNewDataSetFromModule=false&isNewDataSetFromPackage=false&isTemplate=false&isDataset=false&UIProfile=Titan&cmProperties%5Bid%5D=iBFD78D78656B4306A55E3196F7F5E536&rsFinalRunOptions%5Bformat%5D=HTML&rsFinalRunOptions%5Ba11y%5D=false&rsFinalRunOptions%5Bbidi%5D=false&rsFinalRunOptions%5BrunInAdvancedViewer%5D=true&rsFinalRunOptions%5BDownload%5D=false&rsFinalRunOptions%5Bprompt%5D=true&rsFinalRunOptions%5BisApplication%5D=false"}
                            uploadType={"not-putaway-upload-header"} 
                            apiRoute={"/excel/upload-not-putaway"}
                            lastUpdatedUrl={"/data/not-putaway-last-update"}
                            lastUpdatedPostUrl={"/data/not-putaway-last-update-post"}
                            baseUrl={CHG_API_URL}
                            dispatchFunction={CHG_fileUploadStart}
                        />
                    </NotPutawayContainer>
                    <TransitionalReportContainer className="transitional-report">
                        <ReportUpload 
                            header={'Transitional Inventory'}
                            reportUrl={"https://chgcasciprod.logistics.fedex.com/sci/bi/?perspective=classicviewer&id=i7C9A1537FEC54CF3A863DB34C1B48399&isViewer=false&isNewFromModule=false&isNewFromPackage=false&isNewDataSetFromModule=false&isNewDataSetFromPackage=false&isTemplate=false&isDataset=false&UIProfile=Titan&cmProperties%5Bid%5D=i7C9A1537FEC54CF3A863DB34C1B48399&cmProperties%5BdefaultName%5D=Transitional+Inventory&cmProperties%5Btype%5D=report&cmProperties%5Bpermissions%5D%5B%5D=execute&cmProperties%5Bpermissions%5D%5B%5D=read&cmProperties%5Bpermissions%5D%5B%5D=setPolicy&cmProperties%5Bpermissions%5D%5B%5D=traverse&cmProperties%5Bpermissions%5D%5B%5D=write&rsFinalRunOptions%5Bformat%5D=HTML&rsFinalRunOptions%5Ba11y%5D=false&rsFinalRunOptions%5Bbidi%5D=false&rsFinalRunOptions%5BrunInAdvancedViewer%5D=false&rsFinalRunOptions%5BDownload%5D=false&rsFinalRunOptions%5Bprompt%5D=true&rsFinalRunOptions%5BisApplication%5D=false"} 
                            uploadType={"transitional-upload-header"} 
                            apiRoute={'/excel/upload-transitional-inventory'}
                            lastUpdatedUrl={"/data/transitional-last-update"}
                            lastUpdatedPostUrl={"/data/transitional-last-update-post"}
                            baseUrl={CHG_API_URL}
                            dispatchFunction={CHG_fileUploadStart}
                        />
                    </TransitionalReportContainer>
                    <AdjustmentReportContainer className="adjustment-report" >
                        <ReportUpload 
                            header={'Inventory Adjustment'} 
                            reportUrl={"https://chgcasciprod.logistics.fedex.com/sci/bi/?perspective=classicviewer&id=iD240139527AA4A1D801C8CDDF9ED67C8&isViewer=false&isNewFromModule=false&isNewFromPackage=false&isNewDataSetFromModule=false&isNewDataSetFromPackage=false&isTemplate=false&isDataset=false&UIProfile=Titan&cmProperties%5Bid%5D=iD240139527AA4A1D801C8CDDF9ED67C8&cmProperties%5BdefaultName%5D=Inventory+Adjustment&cmProperties%5Btype%5D=report&cmProperties%5Bpermissions%5D%5B%5D=execute&cmProperties%5Bpermissions%5D%5B%5D=read&cmProperties%5Bpermissions%5D%5B%5D=setPolicy&cmProperties%5Bpermissions%5D%5B%5D=traverse&cmProperties%5Bpermissions%5D%5B%5D=write&rsFinalRunOptions%5Bformat%5D=HTML&rsFinalRunOptions%5Ba11y%5D=false&rsFinalRunOptions%5Bbidi%5D=false&rsFinalRunOptions%5BrunInAdvancedViewer%5D=false&rsFinalRunOptions%5BDownload%5D=false&rsFinalRunOptions%5Bprompt%5D=true&rsFinalRunOptions%5BisApplication%5D=false"}
                            dataTracked 
                            uploadType={"adjustment-data-upload-header"}
                            apiRoute={"/excel/upload-adjustments"}
                            lastUpdatedUrl={"/data/adjustment-last-update"}
                            lastUpdatedPostUrl={"/data/adjustment-last-update-post"}
                            newestRecordUrl={"/data/adjustment-newest-record"}
                            dupeCheck={"/data/adjustment-duplicate-check"}
                            dupeDelete={"/data/adjustment-duplicate-delete"}
                            baseUrl={CHG_API_URL}
                            dispatchFunction={CHG_fileUploadStart}
                        />
                    </AdjustmentReportContainer>
                    <CycleCountReportContainer className="cycle-count-report" >
                        <ReportUpload 
                            header={'Cycle Count'} 
                            reportUrl={"https://chgcasciprod.logistics.fedex.com/sci/bi/?perspective=authoring&id=iAF16A8EA5E1F4644894E9646EC11F621&isViewer=false&isNewFromModule=false&isNewFromPackage=false&isNewDataSetFromModule=false&isNewDataSetFromPackage=false&isTemplate=false&isDataset=false&UIProfile=Titan&cmProperties%5Bid%5D=iAF16A8EA5E1F4644894E9646EC11F621&rsFinalRunOptions%5Bformat%5D=HTML&rsFinalRunOptions%5Ba11y%5D=false&rsFinalRunOptions%5Bbidi%5D=false&rsFinalRunOptions%5BrunInAdvancedViewer%5D=true&rsFinalRunOptions%5BDownload%5D=false&rsFinalRunOptions%5Bprompt%5D=true&rsFinalRunOptions%5BisApplication%5D=false"}
                            dataTracked uploadType={"cycle-count-upload-header"}
                            apiRoute={"/excel/upload-counts"}
                            lastUpdatedUrl={"/data/cyclecount-last-update"}
                            lastUpdatedPostUrl={"/data/cyclecount-last-update-post"}
                            newestRecordUrl={"/data/cyclecount-newest-record"}
                            dupeCheck={"/data/cyclecount-duplicate-check"}
                            dupeDelete={"/data/cyclecount-duplicate-delete"}
                            baseUrl={CHG_API_URL}
                            dispatchFunction={CHG_fileUploadStart}
                        />
                    </CycleCountReportContainer>

                </ReportGridContainer>
            </ReportPageBody>

            {seenDailyEntryReport ? <DailyEntryReportModal/> : null}

        </div>
    );
};

export default ReportUploadPage;
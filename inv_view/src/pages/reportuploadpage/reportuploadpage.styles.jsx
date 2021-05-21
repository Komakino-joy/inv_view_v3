import styled, {css} from 'styled-components';


const uploadContainerStyle = css`
    @media screen and (max-width: 1000px) {
    width:670px;
    margin-bottom:25px;
}
`

export const ReportPageBody = styled.div`
    margin-left:8%;
    margin-top:3%;
    margin-bottom: 5%;
    @media screen and (max-width: 1000px) {
        margin-top:8%;
        margin-bottom:8%;
    }
`
export const ReportGridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
    "daily-entry empty-active-report"
    "cycle-count-report adjustment-report"
    "transitional-report not-putaway-report";
    @media screen and (max-width: 1000px) {
        display:flex;
        flex-direction: column;
    }
`
export const DailyEntryContainer = styled.div`
    grid-area: daily-entry; 
    ${uploadContainerStyle}
`
export const EmptyActiveContainer = styled.div`
    grid-area: empty-active-report; 
    ${uploadContainerStyle}
`
export const NotPutawayContainer = styled.div`
    grid-area: not-putaway-report;
    margin-top: 2em;
    ${uploadContainerStyle}
`
export const TransitionalReportContainer = styled.div`
    grid-area: transitional-report; 
    margin-top: 2em;
    ${uploadContainerStyle}
`
export const AdjustmentReportContainer = styled.div`
    grid-area: adjustment-report;
    margin-top: 1.5em;
    ${uploadContainerStyle}
`
export const CycleCountReportContainer = styled.div`
    grid-area: cycle-count-report;
    margin-top: 1.5em;
    ${uploadContainerStyle}
`



  
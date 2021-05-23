import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { CHG_requestLatestCountData } from '../../redux/progress.page/progress.page.actions';

import {
    LatestEntryHeader, BreakdownContainer, BreakdownLabelContainer, 
    BreakdownQty, BreakdownLabel, BreakdownQtyLabel
} from './latest-count-data.styles';

const LatestCountData = ({ history, headerColor}) => {

    const dispatch = useDispatch();
    const latestCountData = useSelector(state => state.progressData.CHG_latestCountData);

    useEffect(() => {
        let mounted = true;

        if (mounted){
            dispatch(CHG_requestLatestCountData());
        };

        return () => {
            mounted = false;
        };

    }, [dispatch]);

    return(
        
    <div>
        <span onClick = {() => history.push(`/fnt-chg-count-data`)}>Details</span>
        <LatestEntryHeader style={{backgroundColor: `${headerColor}`}}>Latest Count Data</LatestEntryHeader>
        <BreakdownContainer>
            <BreakdownLabelContainer>
                <BreakdownLabel>Date</BreakdownLabel>
                <BreakdownLabel>Counts</BreakdownLabel>
                <BreakdownLabel>Unique Locs</BreakdownLabel>
                <BreakdownLabel>Expected qty.</BreakdownLabel>
                <BreakdownLabel>Actual qty.</BreakdownLabel>
                <BreakdownLabel>Variance qty.</BreakdownLabel>
            </BreakdownLabelContainer>
            <BreakdownQty>
                <BreakdownQtyLabel>{new Date(latestCountData.counted_date_time).toLocaleDateString()}</BreakdownQtyLabel>
                <BreakdownQtyLabel>{latestCountData.total_counts_performed}</BreakdownQtyLabel>
                <BreakdownQtyLabel>{latestCountData.unique_locs_counted}</BreakdownQtyLabel>
                <BreakdownQtyLabel>{latestCountData.total_expected_qty}</BreakdownQtyLabel>
                <BreakdownQtyLabel>{latestCountData.total_counted_qty}</BreakdownQtyLabel>
                <BreakdownQtyLabel>{latestCountData.total_variance_qty}</BreakdownQtyLabel>
            </BreakdownQty>
        </BreakdownContainer>
    </div>

    )

}

export default LatestCountData;
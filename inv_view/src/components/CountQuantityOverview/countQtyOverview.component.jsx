import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { 
    CHG_requestExpectedQty,
    CHG_requestVarianceQty,
    } from '../../redux/progress.page/progress.page.actions';

import '../styles/styles.css';
import './countQtyOverview.styles.css';

const CountQtyOverview = ({ headerColor }) => {
    const dispatch = useDispatch();

    const netExpected = useSelector(state => state.progressData.CHG_expectedQty)
    const netVariance = useSelector(state => state.progressData.CHG_varianceQty)

    
    useEffect(() => {
        let mounted = true;

        if (mounted){
            dispatch(CHG_requestExpectedQty());
            dispatch(CHG_requestVarianceQty());
        };

        return () => {
            mounted = false;
        };

    }, [dispatch]);

    const netQtyCounted = netExpected + netVariance;

    const netAccuracy =  ((1-(Math.abs(netVariance) / netExpected)) * 100).toFixed(2);
    const absAccuracy =  ((1-(Math.abs(netVariance) / Math.abs(netExpected))) * 100).toFixed(2);
    const goal = 99.50;
   
        return (
        <div className='count-qty-container'>
                <header className='count-qty-header header-border' style={{backgroundColor: `${headerColor}`}}>Count Quantity Overview </header>
            <div className='breakdown-container body-border'>
                <div className='breakdown-labels'>
                    <p></p>
                    <label className='txt-label'>Expected Qty: </label>
                    <label className='txt-label'>Variance: </label>
                    <label className='txt-label'>Qty Counted: </label>
                </div>
                <div className='breakdown-qty'>
                    <p>Net</p>
                    <label>{netExpected}</label>
                    <label>{netVariance}</label>
                    <label>{netQtyCounted}</label>
                </div>
                <div className='breakdown-qty'>
                    <p>Absolute</p>
                    <label>{Math.abs(netExpected)}</label>
                    <label>{Math.abs(netVariance)}</label>
                    <label>{netQtyCounted}</label>
                </div>

            </div>
            <div className='count-qty-totals-container'>
                <div className='totals-labels'>
                    <label className='txt-label'>Accuracy: </label>
                    <label className='txt-label'>Goal: </label>
                </div>
                <div className='totals-qty'>
                    <label className={`${netAccuracy}` > 99.5 ? 'green-fill' : 'red-fill'}>{`${netAccuracy}%`}</label>
                    <label className='goal'>{`${goal}%`}</label>
                </div>
                <div className='totals-percentage'>
                <label className={`${absAccuracy}` > 99.5 ? 'green-fill' : 'red-fill'}>{`${absAccuracy}%`}</label>
                </div>
            </div>

        </div>
        );
}

export default CountQtyOverview;
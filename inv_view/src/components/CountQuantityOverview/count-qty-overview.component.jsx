import React from 'react';

import '../styles/styles.css';
import './count-qty-overview.styles.css';

const CountQtyOverview = ({ headerColor, ...props }) => {
    const netQtyCounted = props.netExpected + props.netVariance;

    const absQtyCounted = props.absExpected + props.absVariance;

    const netAccuracy =  props.netExpected > netQtyCounted
                         ? ((1 - (props.netExpected - netQtyCounted) / props.netExpected) * 100).toFixed(2)
                         : ((1 - (netQtyCounted - props.netExpected) / props.netExpected) * 100).toFixed(2);

    const absAccuracy =  props.absExpected > absQtyCounted
                         ? ((1 - (props.absExpected - absQtyCounted) / props.absExpected) * 100).toFixed(2)
                         : ((1 - (absQtyCounted - props.absExpected) / props.absExpected) * 100).toFixed(2);

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
                    {
                    netQtyCounted > 0 ? (
                        <>
                        <div className='breakdown-qty'>
                            <p>Net</p>
                            <label>{props.netExpected}</label>
                            <label>{props.netVariance}</label>
                            <label>{netQtyCounted}</label>
                        </div>
                        <div className='breakdown-qty'>
                            <p>Absolute</p>
                            <label>{props.absExpected}</label>
                            <label>{props.absVariance}</label>
                            <label>{absQtyCounted}</label>
                        </div>
                        </>
                        ):(
                        <>
                        <div className='breakdown-qty'>
                            <p>Net</p>
                            <label>0</label>
                            <label>0</label>
                            <label>0</label>
                        </div>
                        <div className='breakdown-qty'>
                            <p>Absolute</p>
                            <label>0</label>
                            <label>0</label>
                            <label>0</label>
                        </div>
                        </>
                        )
                    }
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
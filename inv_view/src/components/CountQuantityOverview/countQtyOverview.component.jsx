import React, {useEffect, useState} from 'react';
import '../styles/styles.css';
import './countQtyOverview.styles.css';
import { fetchData } from "../../api/api";

const CountQtyOverview = ({ apiUrl, businessUnit, headerColor }) => {
    const [netExpected, setNetExpected] = useState(0);
    const [absExpected, setAbsExpected] = useState(0);
    const [netVariance, setNetVariance] = useState(0);
    const [absVariance, setAbsVariance] = useState(0);

    useEffect(() => {
        let mounted = true;

        if (mounted){
            fetchData(`${apiUrl}${businessUnit}/data/total-expected-qty-sum`, setNetExpected)
            fetchData(`${apiUrl}${businessUnit}/data/total-expected-qty-sum`, setAbsExpected)
            fetchData(`${apiUrl}${businessUnit}/data/total-variance-sum`, setNetVariance)
            fetchData(`${apiUrl}${businessUnit}/data/absolute-total-variance-sum`, setAbsVariance)
        };

        return () => {
            mounted = false;
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const netQtyCounted = netExpected + netVariance;

    const netAccuracy =  ((1-(Math.abs(netVariance) / netExpected)) * 100).toFixed(2);
    const absAccuracy =  ((1-(absVariance / absExpected)) * 100).toFixed(2);
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
                    <label>{absExpected}</label>
                    <label>{absVariance}</label>
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
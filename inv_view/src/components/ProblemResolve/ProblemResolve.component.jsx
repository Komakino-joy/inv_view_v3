import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CHG_requestPr } from '../../redux/progress.page/progress.page.actions';

import '../styles/styles.css';
import './ProblemResolve.styles.css';

const ProblemResolve = ({ headerColor }
    ) => {
    const dispatch = useDispatch();
    const problemResolve = useSelector(state => state.progressData.CHG_pr)

    useEffect(() => {
        let mounted = true;

        if (mounted){
            dispatch(CHG_requestPr());
        };

        return () => {
            mounted = false;
        };

    }, [dispatch]);

        return (
        <div className='problem-resolve-container'>
            <header className='panel-header'>PROBLEM RESOLVE</header>
            <header className='problem-resolve-header header-border' style={{backgroundColor: `${headerColor}`}}>Problem Resolve Overview</header>
            <div className='breakdown-container body-border'>
                <div className='breakdown-labels'>
                    <label >Transfers: </label>
                    <label >Returns: </label>
                </div>
                
                <div className='breakdown-qty'>
                    <label>{problemResolve ? problemResolve[0].transfer_pr : 0}</label>
                    <label>{problemResolve ? problemResolve[0].return_pr : 0}</label>
                </div>  
            </div>
            <div className='problem-resolve-totals-container'>
                <div className='totals-labels'>
                    <label>Total: </label>
                </div>
                <div className='totals-labels'>
                    <label className='total'>{problemResolve ? problemResolve[0].transfer_pr +  problemResolve[0].return_pr : 0}</label>
                </div>
            </div>

        </div>
        );
}

export default ProblemResolve;
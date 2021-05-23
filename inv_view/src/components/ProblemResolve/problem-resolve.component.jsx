import React from 'react';

import '../styles/styles.css';
import './problem-resolve.styles.css';

const ProblemResolve = ({ headerColor, ...props }) => {

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
                    <label>{props.problemResolve ? props.problemResolve[0].transfer_pr : 0}</label>
                    <label>{props.problemResolve ? props.problemResolve[0].return_pr : 0}</label>
                </div>  
            </div>
            <div className='problem-resolve-totals-container'>
                <div className='totals-labels'>
                    <label>Total: </label>
                </div>
                <div className='totals-labels'>
                    <label className='total'>{props.problemResolve ? props.problemResolve[0].transfer_pr +  props.problemResolve[0].return_pr : 0}</label>
                </div>
            </div>

        </div>
        );
}

export default ProblemResolve;
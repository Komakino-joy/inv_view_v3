import React, {useEffect, useState} from 'react';
import { fetchData } from "../../api/api";
import '../styles/styles.css';
import './ProblemResolve.styles.css';

const ProblemResolve = ({ apiUrl, businessUnit, headerColor }
    ) => {
    
    const [problemResolve, setProblemResolve] = useState(0);

    useEffect(() => {
        let mounted = true;

        if (mounted){
            fetchData(`${apiUrl}${businessUnit}/data/pr`, setProblemResolve);
        };

        return () => {
            mounted = false;
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // const total = problemResolve[0].transfer_pr + problemResolve[0].return_pr;
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
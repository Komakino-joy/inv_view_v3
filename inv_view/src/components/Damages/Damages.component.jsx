import React, {useEffect, useState} from 'react';
import { fetchData } from "../../api/api";
import '../styles/styles.css';
import './Damages.styles.css';

const ProblemResolve = ({ apiUrl, businessUnit, headerColor }) => {
   
    const [damages, setDamages] = useState(0);

    useEffect(() => {
        let mounted = true;

        if (mounted){
            fetchData(`${apiUrl}${businessUnit}/data/damages`, setDamages);
        };

        return () => {
            mounted = false;
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps    
    }, []);


    return (
    <div className='damages-container'>
        <header className='panel-header'>DAMAGES</header>
        <header className='damages-header header-border' style={{backgroundColor: `${headerColor}`}}>Damages Overview</header>
        <div className='breakdown-container body-border'>
            <div className='breakdown-labels'>
                <label>Total Damages: </label>
            </div>
            <div className='breakdown-qty'>
                <label>{damages ? damages[0].damage : 0}</label>
            </div>
        </div>
    </div>
    );
}

export default ProblemResolve;
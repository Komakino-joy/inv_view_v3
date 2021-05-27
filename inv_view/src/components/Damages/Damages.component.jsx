import React from 'react';

import '../styles/styles.css';
import './damages.styles.css';

const Damages = ({ headerColor, damages }) => {

    return (
    <div className='damages-container'>
        <header className='panel-header'>DAMAGES</header>
        <header className='damages-header header-border' style={{backgroundColor: `${headerColor}`}}>Damages Overview</header>
        <div className='breakdown-container body-border'>
            <div className='breakdown-labels'>
                <label>Total Damages: </label>
            </div>
            <div className='breakdown-qty'>
                <label>{damages ? damages : 0}</label>
            </div>
        </div>
    </div>
    );
}

export default Damages;
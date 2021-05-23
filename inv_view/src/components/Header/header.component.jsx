import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import homeIcon from '../../images/home_icon.svg';

import './header.styles.css';

const Header = () => {
    const location = useLocation();
    const history = useHistory();

    const businessUnit = location.pathname.slice(0,8);

    function handleClick() {
        history.push("/");
      };

    return (
    <> 
        <header className={businessUnit === '/fnt-chg' ? 'chg-page-header' : 'fsc-page-header'} >
             
            {
                businessUnit === '/fnt-chg' ? 'Chegg Inventory View'
                : 'Fulfillment Inventory View'
            }
            <img 
                onClick={handleClick} 
                src={homeIcon} 
                alt="home Icon" 
            /> 
        </header>
    </>
    )
};

export default Header; 
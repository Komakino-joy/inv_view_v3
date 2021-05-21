import React from 'react';
import { useHistory } from 'react-router-dom';

import homeIcon from '../../images/home_icon.svg';

import './header.styles.css';

const Header = () => {

    let history = useHistory();

    function handleClick() {
        history.push("/");
      }

    return (
    <> 
        <header className='page-header'>
            Inventory View <img onClick={handleClick} src={homeIcon} alt="home Icon" /> 
        </header>
    </>
    )
};

export default Header; 
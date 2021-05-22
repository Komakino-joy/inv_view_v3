import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CHG_requestDmg } from '../../redux/progress.page/progress.page.actions';

import '../styles/styles.css';
import './Damages.styles.css';

const ProblemResolve = ({ headerColor }) => {
   
    const dispatch = useDispatch();
    const damages = useSelector(state => state.progressData.damages[0].damage)

    useEffect(() => {
        let mounted = true;

        if (mounted){
            dispatch(CHG_requestDmg());
        };

        return () => {
            mounted = false;
        };
  
    }, [dispatch]);


    return (
    <div className='damages-container'>
    <button onClick={() => console.log(damages)} >CLick me</button>
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

export default ProblemResolve;
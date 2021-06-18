import React from 'react';

import boxIcon from '../../images/box.svg';

import { 
    HomePageBody,
    MultiClientButton,
    DedicatedClientButton,
    Image
 } from './home-page.stlyes';

const HomePage = ({ history }) => {
    return (
        <HomePageBody>
            <MultiClientButton onClick = {() => history.push('/fnt-fsc-progress')}> <Image src={boxIcon} alt="box" />Multi Client</MultiClientButton>
            <DedicatedClientButton onClick = {() => history.push('/fnt-chg-progress')}><Image src={boxIcon} alt="box" />Dedicated Client</DedicatedClientButton>
        </HomePageBody>
    )
};

export default HomePage;
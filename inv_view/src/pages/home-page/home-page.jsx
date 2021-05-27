import React from 'react';

import fulfillmentIcon from '../../images/box.svg';
import bookIcon from '../../images/book.svg';

import { 
    HomePageBody,
    FulfillmentButton,
    CheggButton,
    Image
 } from './home-page.stlyes';

const HomePage = ({ history }) => {
    return (
        <HomePageBody>
            <FulfillmentButton onClick = {() => history.push('/fnt-fsc-progress')}> <Image src={fulfillmentIcon} alt="box" />Fulfillment</FulfillmentButton>
            <CheggButton onClick = {() => history.push('/fnt-chg-progress')}><Image src={bookIcon} alt="box" />Chegg</CheggButton>
        </HomePageBody>
    )
};

export default HomePage;
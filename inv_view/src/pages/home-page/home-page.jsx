import React from 'react';

import fulfillmentIcon from '../../images/box.svg';
import bookIcon from '../../images/book.svg';

import { 
    HomePageBody,
    FulfillmentButton,
    DedicatedClientButton,
    Image
 } from './home-page.stlyes';

const HomePage = ({ history }) => {
    return (
        <HomePageBody>
            <FulfillmentButton onClick = {() => history.push('/fnt-fsc-progress')}> <Image src={fulfillmentIcon} alt="box" />Fulfillment</FulfillmentButton>
            <DedicatedClientButton onClick = {() => history.push('/fnt-chg-progress')}><Image src={bookIcon} alt="box" />DedicatedClient</DedicatedClientButton>
        </HomePageBody>
    )
};

export default HomePage;
import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { toggleDailyEntry } from '../../redux/modal/modal.actions';

import axios from 'axios';

import { CHG_API_URL } from '../../api/api';

import {DailyEntryHeader, DailyEntryContainer, AddRecord, Article,ViewAll,
    FieldSet, DateLabel, Input, ModalDate, LabelContainer, InputContainer, 
    OnHandLabel, TransferLabel, ReturnsLabel, DamageLabel
    } from './daily-entry.styles';
import "react-datepicker/dist/react-datepicker.css";

const DailyEntry = ({toggleDailyEntry}) => {
    
    const [selectedDate, setSelectedDate] = useState(null);
    const [onHand, setOnHand] = useState('');
    const [transferPr, setTransferPr] = useState('');
    const [returnPr, setReturnPr] = useState('');
    const [damages, setDamages] = useState('');
    const [latestDate, setLatestDate] = useState('');

    // eslint-disable-next-line
    useEffect(async() => {
        const maxDate = await axios.get(`${CHG_API_URL}/data/daily-on-hand-max`);
        setLatestDate(maxDate.data);
    });

    let datePart = '';
    if (latestDate) {
       datePart = latestDate.toString().split('-')
    }else{
    }

    const onHandChange = (event) => {
        setOnHand(event.target.value)
    };

    const onTransferPrChange = (event) => {
        setTransferPr(event.target.value)
    };

    const onReturnsPRChange = (event) => {
        setReturnPr(event.target.value)
    };

    const onDamagesChange = (event) => {
        setDamages(event.target.value)
    };

    const resetFields = () => {
        setOnHand(0);
        setTransferPr(0);
        setReturnPr(0);
        setDamages(0);
    }

    const addRecord = async() => {
        await axios({
            method: 'post',
            url: `${CHG_API_URL}/data/daily-on-hand-update`,
            data: {
              date: selectedDate,
              on_hand: onHand,
              transfer: transferPr,
              return: returnPr,
              damage: damages
            }
          });
            
            alert("Entry Submitted")
            resetFields()
        };
    return(
        <>
        <DailyEntryHeader>Daily Entry</DailyEntryHeader>
            <DailyEntryContainer>
            <ViewAll onClick={toggleDailyEntry} >View All Entries</ViewAll>
            <Article>
                <div action="sign-up_submit" method="get" acceptCharset="utf-8">
                  <FieldSet>
                    <LabelContainer>
                        <DateLabel>Date</DateLabel>
                        <OnHandLabel htmlFor="on_hand">On Hand</OnHandLabel>
                        <TransferLabel htmlFor="transfer-pr">Transfer PR</TransferLabel>
                        <ReturnsLabel htmlFor="return-pr">Return PR</ReturnsLabel>
                        <DamageLabel htmlFor="damages">Damages</DamageLabel>
                    </LabelContainer>

                    <InputContainer>
                        <ModalDate selected={selectedDate} dateFormat="MM/dd/yyyy" onChange={date => setSelectedDate(date)}/>
                        <Input id="on-hand" type="text" name="on_hand" value={onHand} onChange={onHandChange}/>
                        <Input id="transfer-pr" type="text" name="transfer-pr" value={transferPr} onChange={onTransferPrChange} />
                        <Input id="return-pr" type="text" name="return-pr" value={returnPr} onChange={onReturnsPRChange}/>
                        <Input id="damages" type="text" name="damages" value={damages} onChange={onDamagesChange}/>
                        <AddRecord onClick={addRecord}>Add Record</AddRecord>
                    </InputContainer>
                  </FieldSet>
                </div>
              </Article>
              
              </DailyEntryContainer>

                <div>
                    <label className='last-update-label'>{`Last day on record: `}</label>
                    {latestDate ?
                    <label className='last-update-value'>{`${datePart[1]}/${datePart[2]}/${datePart[0]}`}</label>
                    : null}
                </div>
        </>
    )
};

const mapStateToProps = (state) => ({
    seenDailyEntryReport : state.modalState.seenDailyEntry
});

const mapDispatchToProps = dispatch => ({
    toggleDailyEntry  : () => dispatch(toggleDailyEntry()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DailyEntry);
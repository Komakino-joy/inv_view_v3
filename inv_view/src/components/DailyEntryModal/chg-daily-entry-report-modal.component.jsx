import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { CHG_toggleDailyEntry } from '../../redux/modal/modal.actions';

import axios from 'axios';

import { CHG_API_URL } from '../../api/api';

import { ReactTabulator, reactFormatter } from 'react-tabulator';
import 'react-tabulator/lib/styles.css';
import './tabulator.table.css';

import { Header, ModalMain, ModalContent, CloseButton } from './daily-entry-report-modal.styles';

const DailyEntryReportModal = ({CHG_toggleDailyEntry}) => {

    const [data, setData] = useState([]);

    function RemoveButton(props) {
        const cellData = props.cell._cell.row.data;
        return <button className='remove-button'onClick={() => props.onSelect(cellData.id)}>Delete Row</button>;
    }


    const removeRow = {
        title: "Remove?",
        field: "remove",
        hozAlign: "center",
        formatter: reactFormatter(
        <RemoveButton
            onSelect={(id) => {
            axios.delete(
                `${CHG_API_URL}/data/delete-daily-on-hand`,
                {
                data: {
                    id: id
                    }
                });
            setData((prevData) => prevData.filter((i) => i.id !== id));
            }}
        />
        )
    };

    // eslint-disable-next-line
    useEffect(async() => {
        const getData = await axios.get(`${CHG_API_URL}/data/daily-on-hand-by-day`)
        setData(getData.data)
    },[])


    const columns = [
        { title: "Date", field: "date_recorded"},
        { title: "Total On Hand", field: "units_on_hand"},
        { title: "Transfer PR", field: "transfer_pr"},
        { title: "Returns PR", field: "return_pr"},
        { title: "Damages", field: "damages"},
        removeRow,
      ];


    return(
        <>
        <ModalMain>
            <ModalContent>
            <CloseButton onClick={CHG_toggleDailyEntry}>CLOSE</CloseButton>
            <Header>Daily Entry Report</Header>
                <ReactTabulator columns={columns} data={data}/>
            </ModalContent>
        </ModalMain>
        </>
    )
} 

const mapStateToProps = (state) => ({
    seenDailyEntryReport : state.CHG_modalState.seenDailyEntry
})

const mapDispatchToProps = dispatch => ({
    CHG_toggleDailyEntry  : () => dispatch(CHG_toggleDailyEntry()),
});


export default connect(mapStateToProps, mapDispatchToProps)(DailyEntryReportModal);
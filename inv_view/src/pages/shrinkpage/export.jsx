import React from "react";
import ReactExport from "react-export-excel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const Download = ({daily, weekly, monthly, yearly}) => {
    return (
        <ExcelFile filename={"shrink_data_report"}>
            <ExcelSheet data={daily} name="Shrink By Day">
                <ExcelColumn label="Date" value="date_recorded"/>
                <ExcelColumn label="Units On Hand" value="units_on_hand"/>
                <ExcelColumn label="Net Unit Adj." value="net_unit_adjustment"/>
                <ExcelColumn label="Abs Unit Adj" value="abs_unit_adjustment"/>
                <ExcelColumn label="Net Shrink %." value="net_shrink_percent"/>
                <ExcelColumn label="Abs Shrink %" value="abs_shrink_percent"/>
            </ExcelSheet>
            <ExcelSheet data={weekly} name="Shrink By Week">
                <ExcelColumn label="Year" value="year"/>
                <ExcelColumn label="Week" value="week"/>
                <ExcelColumn label="Units On Hand" value="units_on_hand"/>
                <ExcelColumn label="Net Unit Adj." value="net_unit_adjustment"/>
                <ExcelColumn label="Abs Unit Adj" value="abs_unit_adjustment"/>
                <ExcelColumn label="Net Shrink %." value="net_shrink_percent"/>
                <ExcelColumn label="Abs Shrink %" value="abs_shrink_percent"/>
            </ExcelSheet>
            <ExcelSheet data={monthly} name="Shrink By Month">
                <ExcelColumn label="Year" value="year"/>
                <ExcelColumn label="Month" value="month"/>
                <ExcelColumn label="Units On Hand" value="units_on_hand"/>
                <ExcelColumn label="Net Unit Adj." value="net_unit_adjustment"/>
                <ExcelColumn label="Abs Unit Adj" value="abs_unit_adjustment"/>
                <ExcelColumn label="Net Shrink %." value="net_shrink_percent"/>
                <ExcelColumn label="Abs Shrink %" value="abs_shrink_percent"/>
            </ExcelSheet>
            <ExcelSheet data={yearly} name="Shrink By Year">
                <ExcelColumn label="Year" value="year"/>
                <ExcelColumn label="Units On Hand" value="units_on_hand"/>
                <ExcelColumn label="Net Unit Adj." value="net_unit_adjustment"/>
                <ExcelColumn label="Abs Unit Adj" value="abs_unit_adjustment"/>
                <ExcelColumn label="Net Shrink %." value="net_shrink_percent"/>
                <ExcelColumn label="Abs Shrink %" value="abs_shrink_percent"/>
            </ExcelSheet>
        </ExcelFile>
    );
}

export default Download;
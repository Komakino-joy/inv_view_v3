import React from "react";
import ReactExport from "react-export-excel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const Download = ({daily, countsByUser, countsByUserByDay}) => {
    return (
        <ExcelFile filename={"count_detail_report"}>
            <ExcelSheet data={daily} name="Daily Counts Performed">
                <ExcelColumn label="Date" value="counted_date_time"/>
                <ExcelColumn label="Total Counts Performed	" value="total_counts_performed"/>
                <ExcelColumn label="Unique Locs Counted	." value="unique_locs_counted"/>
                <ExcelColumn label="Total Expected Qty.	" value="total_expected_qty"/>
                <ExcelColumn label="Total Actual Qty." value="total_counted_qty"/>
                <ExcelColumn label="Total Variance Qty." value="total_variance_qty"/>
            </ExcelSheet>
            <ExcelSheet data={countsByUserByDay} name={`Counts By User By Day`}>
                <ExcelColumn label="Date" value="date"/>
                <ExcelColumn label="User ID" value="counted_by"/>
                <ExcelColumn label="Full Name" value="full_name"/>
                <ExcelColumn label="Total Counts" value="total_counts"/>
            </ExcelSheet>
            <ExcelSheet data={countsByUser} name={`Counts By User (${new Date().getFullYear()})`}>
                <ExcelColumn label="user ID" value="username"/>
                <ExcelColumn label="Total Counts Performed" value="count"/>
                <ExcelColumn label="Average Counts per Day" value="avg_counts_by_day"/>
            </ExcelSheet>
        </ExcelFile>
    );
}

export default Download;
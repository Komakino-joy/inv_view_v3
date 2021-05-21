import React from 'react';
import Loader from 'react-loader-spinner';

const DailyCountsReport = ( {data} ) => {
    
    return(
        <div>
        {data ?
            <table cellSpacing="0">
            <thead>
                <tr >
                    <th>Date</th>
                    <th>Total Counts Performed</th>
                    <th>Unique Locs Counted</th>
                    <th>Total Expected Qty.</th> 
                    <th>Total Actual Qty.</th> 
                    <th>Total Variance Qty.</th> 
                </tr>
            </thead>
            <tbody>
                {data.map(data => (
                <tr key={data.counted_date_time}>
                    <td>{new Date(data.counted_date_time).toLocaleString().split(',')[0]}</td>
                    <td>{data.total_counts_performed}</td>
                    <td>{data.unique_locs_counted}</td>
                    <td>{data.total_expected_qty}</td>
                    <td>{data.total_counted_qty}</td>
                    <td>{data.total_variance_qty}</td>
                </tr>
                ))}
            </tbody>
            </table>

        : 
            <Loader type="Puff"color="#966eff"height={70} width={70}className='loader' 
                style={{    
                    position: "absolute",
                    top: "50%",
                    left: "25%",
                    margin: "-25px 0 0 -25px"
                }} 
            />
        }


        </div>
    )
}

export default DailyCountsReport;
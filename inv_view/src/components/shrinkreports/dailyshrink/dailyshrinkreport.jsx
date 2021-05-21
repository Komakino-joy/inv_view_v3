import React from 'react';
import Loader from 'react-loader-spinner';
import '../shrinkreports.styles.css';

const DailyShrinkReport = ( {data} ) => {
    
    return(
        <div>
        {data ?
            <table cellSpacing="0">
            <thead>
                <tr >
                    <th>Date</th>
                    <th>Units On Hand</th>
                    <th>Net Unit Adj.</th>
                    <th>ABS Unit Adj.</th> 
                    <th>Net Shrink %</th> 
                    <th>ABS Shrink %</th> 
                </tr>
            </thead>
            <tbody>
                {data.map(data => (
                <tr key={data.date_recorded}>
                    <td>{new Date(data.date_recorded).toLocaleString().split(',')[0]}</td>
                    <td>{data.units_on_hand}</td>
                    <td>{data.net_unit_adjustment}</td>
                    <td>{data.abs_unit_adjustment}</td>
                    <td>{data.net_shrink_percent}</td>
                    <td>{data.abs_shrink_percent}</td>
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

export default DailyShrinkReport;
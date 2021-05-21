import React from 'react';
import Loader from 'react-loader-spinner';
import '../shrinkreports.styles.css';

const MonthlyShrinkReport = ({data}) => {

    return(
        <div>
        {data ?
            <table cellSpacing="0">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Month</th>
                    <th>Units On Hand</th>
                    <th>Net Unit Adj.</th>
                    <th>ABS Unit Adj.</th> 
                    <th>Net Shrink %</th> 
                    <th>ABS Shrink %</th> 
                </tr>
            </thead>
            <tbody>
                {data.map(data => (
                <tr key={data.month}>
                    <td>{data.year}</td>
                    <td>{data.month}</td>
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
                    top: "68%",
                    left: "74%",
                    margin: "-25px 0 0 -25px"
                }} 
            />
        }
        </div>
    )
}

export default MonthlyShrinkReport;
import React from 'react';
import Loader from 'react-loader-spinner';

const CountsByUserByDay = ( {data} ) => {
    
    return(
        <div>
        {data ?
            <table cellSpacing="0">
            <thead>
                <tr >
                    <th>Date</th>
                    <th>User ID</th>
                    <th>Name</th>
                    <th>Total Counts</th>
                </tr>
            </thead>
            <tbody>
                {data.map(data => (
                <tr key={data.date + data.counted_by}>
                    <td>{data.date.toString().slice(0,10)}</td>
                    <td>{data.counted_by}</td>
                    <td>{data.full_name}</td>
                    <td>{data.total_counts}</td>
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

export default CountsByUserByDay;
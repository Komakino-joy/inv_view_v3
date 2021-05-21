import React from 'react';
import Loader from 'react-loader-spinner';
// import '../shrinkreports.styles.css';

const CountsByUser = ( {data} ) => {
    
    return(
        <div>
        {data ?
            <table cellSpacing="0">
            <thead>
                <tr >
                    <th>User ID</th>
                    <th>Total Counts Performed</th>
                    <th>Avg. Counts Per Day</th>
                </tr>
            </thead>
            <tbody>
                {data.map(data => (
                <tr key={data.username}>
                    <td>{data.username}</td>
                    <td>{data.count}</td>
                    <td>{data.avg_counts_by_day}</td>
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

export default CountsByUser;
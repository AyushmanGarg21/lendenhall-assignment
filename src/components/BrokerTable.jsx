/* eslint-disable react/prop-types */

const BrokerTable = ({filteredData}) => {

     {/* Broker Performance Tables */}
     return (
     <>
     <h2>Top 10 Brokers Performance</h2>
     <div className='top-10-table'>
         <table>
             <thead>
                 <tr>
                     <th>Broker</th>
                     <th>GWP</th>
                     <th>Planned GWP</th>
                     <th>Diff (%)</th>
                 </tr>
             </thead>
             <tbody>
                 {filteredData.map((entry, index) => (
                     <tr key={index}>
                         <td>{entry["Broker Name"]}</td>
                         <td>{entry["GWP"]}</td>
                         <td>{entry["Planned GWP"]}</td>
                         <td>{((entry["GWP"] - entry["Planned GWP"]) / entry["Planned GWP"] * 100).toFixed(2)}%</td>
                     </tr>
                 ))}
             </tbody>
         </table>
     </div>
     </>
    );
}

export default BrokerTable;
/* eslint-disable react/prop-types */
const ClassTable = ({filteredData}) => {

    {/* Broker Performance Tables */}
    return (
    <>
    <div className='top-10-table'>
        <table>
            <thead>
                <tr>
                    <th> Planned Premium</th>
                    <th> Earned Premium</th>
                    <th>GWP</th>
                </tr>
            </thead>
            <tbody>
                {filteredData.map((entry, index) => (
                    <tr key={index}>
                        <td>{entry["Business Plan"]}</td>
                        <td>{entry["Earned Premium"]}</td>
                        <td>{entry["GWP "]}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    </>
   );
}

export default ClassTable;
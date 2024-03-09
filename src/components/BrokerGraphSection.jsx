/* eslint-disable react/prop-types */
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const BrokerGraphs = ({filteredData}) => {
  return (
      <div className='graphs-section'>
            {/* Example: Line Chart */}
            <LineChart width={1200} height={300} data={filteredData}>
                <XAxis dataKey="Broker Name" />
                <YAxis />
                <CartesianGrid stroke="#eee" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="GWP" stroke="#8884d8" />
                <Line type="monotone" dataKey="Planned GWP" stroke="#82ca9d" />
            </LineChart>

            {/* Example: Bar Chart */}
            <BarChart width={1200} height={300} data={filteredData}>
                <XAxis dataKey="Broker Name" />
                <YAxis />
                <CartesianGrid stroke="#eee" />
                <Tooltip />
                <Legend />
                <Bar dataKey="GWP" fill="#8884d8" />
                <Bar dataKey="Planned GWP" fill="#82ca9d" />
            </BarChart>
        </div>
  );
};

export default BrokerGraphs;
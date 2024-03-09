/* eslint-disable react/prop-types */
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const ClassGraphs = ({filteredData}) => {
  return (
      <div className='graphs-section'>
            {/* Example: Line Chart */}
            <LineChart width={1200} height={300} data={filteredData}>
                <XAxis/>
                <YAxis />
                <CartesianGrid stroke="#eee" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Business Plan" stroke="#8884d8" />
                <Line type="monotone" dataKey="Earned Premium" stroke="#82ca9d" />
            </LineChart>

            {/* Example: Bar Chart */}
            <BarChart width={1200} height={300} data={filteredData}>
                <XAxis/>
                <YAxis />
                <CartesianGrid stroke="#eee" />
                <Tooltip />
                <Legend />
                <Bar dataKey="Business Plan" fill="#8884d8" />
                <Bar dataKey="Earned Premium" fill="#82ca9d" />
            </BarChart>
        </div>
  );
};

export default ClassGraphs;
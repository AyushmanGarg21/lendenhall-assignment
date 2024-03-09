import { useState, useEffect } from 'react';

import BrokerTable from '../components/BrokerTable';
import BrokerGraphs from '../components/BrokerGraphSection';
import DashboardData from '../assets/DashboardData.json';


const BrokerSection = () => {

    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [yearFilter, setYearFilter] = useState("all");
    const [marketFilter, setMarketFilter] = useState("all");

    useEffect(() => {
        setData(DashboardData["Broker stats"]);
    }, []);

    // Filter data based on selected year
    useEffect(() => {
        const filtered = data.filter(entry => (yearFilter === "all" || entry["Year"] === parseInt(yearFilter)) 
        && (marketFilter === "all" || entry["Market Type"] === marketFilter));
        const sortedData = filtered.sort((a, b) => b["GWP "] - a["GWP "]);
        setFilteredData(sortedData.slice(0, 10));
    }, [data, yearFilter, marketFilter]);


    return (
        <>
            <div className='filters'>
                Year:
                <select onChange={(e) => setYearFilter(e.target.value)}>
                    <option value={"all"}>All</option>
                    <option value={2021}>2021</option>
                    <option value={2022}>2022</option>
                    <option value={2023}>2023</option>
                    <option value={2024}>2024</option>
                </select>
                Market Type:
                <select onChange={(e) => setMarketFilter(e.target.value)}>
                    <option value={"all"}>All</option>
                    <option value={"Open Market"}>Open Market</option>
                    <option value={"Facilities"}>Facilities</option>
                </select>
            </div>
            
            <BrokerTable filteredData={filteredData} />
            <h2>Graphical Representations</h2>
            <BrokerGraphs filteredData={filteredData}/>
        </>
    );
}

export default BrokerSection;
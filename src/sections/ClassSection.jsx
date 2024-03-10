import { useState, useEffect } from 'react';
import DashboardData from '../assets/DashboardData.json';
import ClassTable from '../components/ClassTable';
import ClassGraphs from '../components/ClassGraphSection';

const ClassSection = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [ClassofBusiness, setClassofBusiness] = useState("all");
    const [ClassType, setClassType] = useState("all");
    const [year, setYear] =  useState("all");

    useEffect(() => {
        setData(DashboardData["Class stats"]);
    }, []);


    useEffect(() => {
        const filtered = data.filter(entry => (year === "all" || entry["Year"] === parseInt(year)) && 
        (ClassofBusiness === "all" || entry["Class of Business"] === ClassofBusiness) && 
        (ClassType === "all" || entry["ClassType"] === ClassType));
        const sortedData = filtered.sort((a, b) => b["GWP "] - a["GWP "]);
        setFilteredData(sortedData.slice(0, 10));
    }, [data, ClassofBusiness, ClassType, year]);



    return (
        <>
            <h2>Business Class Analysis</h2>
            <div className='filters'>
                year:
                <select onChange={(e) => setYear(e.target.value)}>
                    <option value={"all"}>All</option>
                    <option value={2021}>2021</option>
                    <option value={2022}>2022</option>
                    <option value={2023}>2023</option>
                </select>
                Class of Business:
                <select onChange={(e) =>setClassofBusiness(e.target.value)}>
                    <option value={"all"}>All</option>
                    <option value={"Financial Institution"}>Financial Institution</option>
                    <option value={"Commercial PI"}>Commercial PI</option>
                </select>
                Class Type:
                <select onChange={(e) => setClassType(e.target.value)}>
                    <option value={"all"}>All</option>
                    {(ClassofBusiness === "Financial Institution" || ClassofBusiness === "all") && <option value={"Crime"}>Crime</option>}
                    {(ClassofBusiness === "Financial Institution" || ClassofBusiness === "all") && <option value={"FIPI"}>FIPI</option>}
                    {(ClassofBusiness === "Financial Institution" || ClassofBusiness === "all") && <option value={"D&O"}>D&O</option>}
                    {(ClassofBusiness === "Commercial PI" || ClassofBusiness === "all") && <option value={"PI"}>PI</option>}
                </select>
            </div>
            <ClassTable filteredData={filteredData} />
            <ClassGraphs filteredData={filteredData} />
        </>
    );
};

export default ClassSection;
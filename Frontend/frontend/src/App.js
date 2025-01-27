import React, { useEffect, useState } from 'react';
import Navbar from './Navbar/navbar';
import './App.css';

const App = () => {
  const [companies, setCompanies] = useState([{}]); // Array to store companies with cultivators
  const [currentCompany, setCurrentCompany] = useState(''); // Selected or new company
  const [currentCultivator, setCurrentCultivator] = useState(''); // Current cultivator input value
  const [newCompany, setNewCompany] = useState(''); // New company input value
  
  async function retriveFarmers(){
    const  response = await fetch("http://127.0.0.1:8000/farmer/")
    const data = await response.json()
    setCompanies(data)
    console.log (data)
  } 
  useEffect(() => {
    retriveFarmers()
  },[])

  return (
    <div className="app-container">
      <Navbar />
      <h1 className="title">Add Cultivator and Company</h1>
      <div className="form-container">
        <select
          value={currentCompany}
          // onChange={(e) => setCurrentCompany(e.target.value)}
          className="dropdown"
        >
          <option value="">Select Company</option>
          {companies.map((company, index) => (
            <option key={index} value={company}>
              {company.name}
            </option>
          ))}
        </select>
        
      </div>

      {/* Display companies and cultivators */}
      {/* {companies.length > 0 && (
        <table className="data-table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Cultivators</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company, index) => (
              <tr key={index}>
                <td>{company.name}</td>
                <td>{company.cultivators.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )} */}
    </div>
  );
};

export default App;

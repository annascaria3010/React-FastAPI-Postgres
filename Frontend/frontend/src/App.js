import React, { useEffect, useState } from 'react';
import Navbar from './Navbar/navbar';
import './App.css';

const App = () => {
  const [companies, setCompanies] = useState([{}]); 
  const [option,setOption] = useState('')
  const [currentCompany, setCurrentCompany] = useState('');

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
          onChange={(e) => setCurrentCompany(e.target.value)}
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

      <table className='table'>
      <tr>
          <th>
            id
          </th>
          <th>
            Name
          </th>
          <th>
            Active
          </th>     
      </tr>
        
      <tr>
        <td>
          12
        </td>
        <td>
          A
        </td>
        <td>
          yes
        </td>
      </tr>

      </table>
    </div>
  );
};

export default App;

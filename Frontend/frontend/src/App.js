import React, { useState } from 'react';
import Navbar from './Navbar/navbar';
import './App.css';

const App = () => {
  const [companies, setCompanies] = useState([]); // Array to store companies with cultivators
  const [currentCompany, setCurrentCompany] = useState(''); // Selected or new company
  const [currentCultivator, setCurrentCultivator] = useState(''); // Current cultivator input value
  const [newCompany, setNewCompany] = useState(''); // New company input value

  // const handleAddCompany = () => {
  //   if (!newCompany) {
  //     alert('Please enter a company name!');
  //     return;
  //   }

  //   // Check if the company already exists
  //   const existingCompany = companies.find(
  //     (company) => company.name === newCompany
  //   );

  //   if (existingCompany) {
  //     alert(`The company "${newCompany}" already exists!`);
  //   } else {
  //     setCompanies([...companies, { name: newCompany, cultivators: [] }]);
  //   }

  //   setNewCompany(''); // Clear input
  // };

  // const handleAddCultivator = () => {
  //   if (!currentCompany || !currentCultivator) {
  //     alert('Please select a company and enter a cultivator name!');
  //     return;
  //   }

  //   // Check if the cultivator already exists
  //   const isCultivatorExists = companies.some((company) =>
  //     company.cultivators.includes(currentCultivator)
  //   );

  //   if (isCultivatorExists) {
  //     alert(`The cultivator "${currentCultivator}" is already assigned to another company!`);
  //     return;
  //   }

  //   // Add cultivator to the selected company
  //   const updatedCompanies = companies.map((company) =>
  //     company.name === currentCompany
  //       ? { ...company, cultivators: [...company.cultivators, currentCultivator] }
  //       : company
  //   );

  //   setCompanies(updatedCompanies);
  //   setCurrentCultivator(''); // Clear input
  // };

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
            <option key={index} value={company.name}>
              {company.name}
            </option>
          ))}
        </select>
        
      </div>

      {/* Display companies and cultivators */}
      {companies.length > 0 && (
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
      )}
    </div>
  );
};

export default App;

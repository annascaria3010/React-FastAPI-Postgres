import React, { useState } from 'react';
import Navbar from './Navbar/navbar';
import './App.css';

const App = () => {
  const [companies, setCompanies] = useState([]); // Array to store companies with cultivators
  const [currentCompany, setCurrentCompany] = useState(''); // Current company input value
  const [currentCultivator, setCurrentCultivator] = useState(''); // Current cultivator input value

  const handleAdd = () => {
    if (!currentCompany || !currentCultivator) {
      alert('Please fill in both fields!');
      return;
    }

    // Check if the cultivator already exists in any company
    const isCultivatorExists = companies.some((company) =>
      company.cultivators.includes(currentCultivator)
    );

    if (isCultivatorExists) {
      alert(`The cultivator "${currentCultivator}" is already assigned to another company!`);
      return;
    }

    const existingCompany = companies.find(
      (company) => company.name === currentCompany
    );

    if (existingCompany) {
      // Add cultivator to the existing company
      existingCompany.cultivators.push(currentCultivator);
      setCompanies([...companies]);
    } else {
      // Add new company with the cultivator
      setCompanies([
        ...companies,
        { name: currentCompany, cultivators: [currentCultivator] },
      ]);
    }
    // Clear input fields
    setCurrentCompany('');
    setCurrentCultivator('');
  };

  return (
    <div className="app-container">
      <Navbar />
      <h1 className="title">Add Cultivator and Company</h1>

      <div className="form-container">
        <input
          type="text"
          placeholder="Add Company"
          value={currentCompany}
          onChange={(e) => setCurrentCompany(e.target.value)}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Add Cultivator"
          value={currentCultivator}
          onChange={(e) => setCurrentCultivator(e.target.value)}
          className="input-field"
        />
        <button onClick={handleAdd} className="add-button">
          Add
        </button>
      </div>

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

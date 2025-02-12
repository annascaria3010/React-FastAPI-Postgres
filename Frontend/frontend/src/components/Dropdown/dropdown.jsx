import React from 'react'

const Dropdown = ({Companies, CurrentCompany,SetCurrentCompany,Id, SetId}) => {
  console.log (Companies)
  return (
    <div>
    <select
    name={CurrentCompany}
    value = {Id}
    onChange={(e) => {SetCurrentCompany(e.target.name)
    SetId(e.target.value)
    }}
    className="dropdown"
  >
    <option value="">Select Company</option>
    {Companies.map((company, index) => (
      
      <option key={index} value={company.id}>
        {company.name}
        
      </option>
    ))}
  </select>
  </div>
  )
}

export default Dropdown;
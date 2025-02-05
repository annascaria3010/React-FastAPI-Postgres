import React, { useEffect, useState, useTransition } from 'react';
import Navbar from './Navbar/navbar';
import './App.css';
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { t } = useTranslation()
  const [companies, setCompanies] = useState([{}]); 
  const [currentCompany, setCurrentCompany] = useState('');
  const [tableData,setTableData] = useState([]);
  const [id,setId] = useState(null);

  async function retriveFarmers(){
    const  response = await fetch("http://127.0.0.1:8000/farmer/")
    const data = await response.json()
    setCompanies(data)
    console.log (tableData)
  } 

  async function handleId(){
    const  response = await fetch(`http://127.0.0.1:8000/cultivator/farmer-company-cultivators/${id}?id=${id}`)
    const data = await response.json()
    console.log ('from handle id funct',data[0])
    setTableData(data[0])
    // console.log (tableData)
  } 

  useEffect(() => {
    retriveFarmers()
  },[])

  

  return (
    <div className="app-container"
    >
    
     
      <Navbar />
      
      <h1 className="title">{t('App.title')}</h1>
      <div className="form-container">
        <select
          name={currentCompany}
          value = {id}
          onChange={(e) => {setCurrentCompany(e.target.name)
          setId(e.target.value)
          }}
          className="dropdown"
        >
          <option value="">Select Company</option>
          {companies.map((company, index) => (
            
            <option key={index} value={company.id}>
              {company.name}
              
            </option>
          ))}
        </select>
        
        <button className='search-btn' onClick={handleId}>
          search
        </button>
      </div>

{(tableData.length)>0 &&       <table className='table'>
      <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Active</th>     
      </tr>
        
      <tr>
        {/* <td>12</td>
        <td>A</td>
        <td>yes</td> */}
         
      </tr>

        {tableData.map((data)=>{
          console.log(data)
          return(
          <tr key={data.id}>
          <td>{data.id}</td>
          <td>{data.name}</td>
          <td>{data.active ? 'Yes' : 'No' }</td>
          </tr>
          )
            
        })}
        

      </table>}
    </div>
  );
};

export default App;

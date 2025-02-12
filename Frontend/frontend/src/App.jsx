import React, { useEffect, useState, useTransition } from 'react';
import Navbar from './components/Navbar/navbar';
import Sidebar from './components/bottombar/bottombar';
import './App.css';
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';
import { useTranslation } from 'react-i18next';
import Dropdown from './components/Dropdown/dropdown';
import Button from './components/button/Button';
import Table from './components/table/Table';

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
  } 

  async function handleId(){
    const  response = await fetch(`http://127.0.0.1:8000/cultivator/farmer-company-cultivators/${id}?id=${id}`)
    const data = await response.json()
    setTableData(data[0])
  } 

  useEffect(() => {
    retriveFarmers()
  },[])


  return (
    <div>

      <Navbar />
      <div className="app-container">
        <div className="title" > {t('App.title')}</div>
       
        <div className="form-container">
          <Dropdown Companies={companies} CurrentCompany={currentCompany} SetCurrentCompany={setCurrentCompany} Id={id} SetId={setId} />
          <Button btnText='Search' onClick={handleId} />
        </div>

        {(tableData.length) > 0 && <Table TableData={tableData} />}

      </div>
      <Sidebar />
    </div>
  );
};

export default App;

import React, { useState, useEffect } from 'react';
import LiveReportCard from './components/liveReportCard';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('liveReports');
  const [liveReportsData, setLiveReportsData] = useState(null);
  const [victimsReportsData, setVictimsReportsData] = useState(null);
  const [witnessReportsData, setWitnessReportsData] = useState(null);
  const [cyberbullyingReportsData, setCyberbullyingReportsData] = useState(null);

  useEffect(() => {
    async function fetchLiveReportsData() {
      try {
        const response = await fetch('http://localhost:5001/admin/liveReports');
        const updatedReports = await response.json();
        setLiveReportsData(
          updatedReports.length
            ? updatedReports.map((report) => <LiveReportCard {...report} />)
            : null
        );
      } catch (error) {
        console.error('Error fetching live reports data:', error);
      }
    }

    fetchLiveReportsData();
  }, []);

  useEffect(() => {
    // Add fetch logic for victims reports data
  }, []);

  useEffect(() => {
    // Add fetch logic for witness reports data
  }, []);

  useEffect(() => {
    // Add fetch logic for cyberbullying reports data
  }, []);

  const handleTabChange = (newTab) => {
    setActiveTab(newTab);
  };

  const liveReportsContent = (
    <div>
      <h3>Live Reports</h3>
      {liveReportsData}
    </div>
  );
  const victimsReportsContent = (
    <div>
      <h3>Victims Reports</h3>
      {victimsReportsData}
    </div>
  );
  const witnessReportsContent = (
    <div>
      <h3>Witnesses Reports</h3>
      {witnessReportsData}
    </div>
  );
  const cyberbullyingReportsContent = (
    <div>
      <h3>Live Reports</h3>
      {cyberbullyingReportsData}
    </div>
  );
  const content = {
      liveReports: liveReportsContent,
      victimsReports: victimsReportsContent,
      witnessReports: witnessReportsContent,
      cyberbullyingReports: cyberbullyingReportsContent,
    };

  return (
    <div>
      <div className="sidebar">
        <button onClick={() => handleTabChange('liveReports')}>Live Reports</button>
        <button onClick={() => handleTabChange('victimsReports')}>Victims Reports</button>
        <button onClick={() => handleTabChange('witnessReports')}>Witness Reports</button>
        <button onClick={() => handleTabChange('cyberbullyingReports')}>Cyberbullying Reports</button>
      </div>
      <div className="content">{content[activeTab]}</div>
    </div>
  );
}

export default Admin;
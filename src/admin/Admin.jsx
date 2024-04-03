import React, { useState } from 'react';
import axios from 'axios';
import LiveReportCard from './components/liveReportCard';


const Admin = (
) => {
  const [activeTab, setActiveTab] = useState('liveReports');
  const [liveReportsData, setLiveReportsData] = useState(null);
  const [victimsReportsData, setVictimsReportsData] = useState(null);
  const [witnessReportsData, setWitnessReportsData] = useState(null);
  const [cyberbullyingReportsData, setCyberbullyingReportsData] = useState(null);

  const liveReportsContent = (
    <div>
      <h3>Live Reports</h3>
      {liveReportsData}
    </div>
  );

  const victimsReportsContent = (
    <div>
      <h3>Victims Reports</h3>
      {/* Your victims reports content here */}
    </div>
  );

  const witnessReportsContent = (
    <div>
      <h3>Witness Reports</h3>
      {/* Your witness reports content here */}
    </div>
  );

  const cyberbullyingReportsContent = (
    <div>
      <h3>Cyberbullying Reports</h3>
      {/* Your cyberbullying reports content here */}
    </div>
  );

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('/liveReports');
      const liveReports = response.data;
      setLiveReportsData(
        liveReports.length ? liveReports.map((report) => <LiveReportCard {...report} />) : null
      );
    }

    fetchData();
  }, []);
  // Fetch victims reports data
  useEffect(() => {
    // ...
  }, []);

  // Fetch witness reports data
  useEffect(() => {
    // ...
  }, []);

  // Fetch cyberbullying reports data
  useEffect(() => {
    // ...
  }, []);

  const handleTabChange = (newTab) => {
    setActiveTab(newTab);
  };

  const content = {
    liveReports: liveReportsContent,
    victimsReports: victimsReportsData,
    witnessReports: witnessReportsData,
    cyberbullyingReports: cyberbullyingReportsData,
  };

  return (
    <div>
      <div className="sidebar">
        <button onClick={() => handleTabChange('liveReports')}>Live Reports</button>
        <button onClick={() => handleTabChange('victimsReports')}>Victims Reports</button>
        <button onClick={() => handleTabChange('witnessReports')}>Witness Reports</button>
        <button onClick={() => handleTabChange('cyberbullyingReports')}>Cyberbullying Reports</button>
      </div>
      <div className="content">{content}</div>
    </div>
  );
}

export default Admin;

import React from 'react';
import { Link } from 'react-router-dom';
import VictimForm from '../../components/forms/VictimForm';
import LiveReport from '../../components/forms/LiveReport'
import WitnessForm from '../../components/forms/WitnessForm';
import ReportCard from './ReportCard';

const Reportz = (repoicon,repomes, repotitle) => {
  return (
    <div className="card mb-3 " style={{ maxWidth: "540px" }}>
      <div className="row g-0 bg-success">
        <div className="col-md-4">
          <img src={repoicon} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{repotitle}</h5>
            <p className="card-text">{repomes}</p>
           
          </div>
        </div>
      </div>
    </div>
  )
}

const Report = () => {
  return (
    <div className='womenz container m-3  d-flex justify-content-center'>
      <h3 className='text-center'>Your safety is our concern</h3>
      <div className="p-5 text-center">
      <div className="card mb-3 " style={{ maxWidth: "540px" }}>
      <div className="row g-0 bg-success">
        <div className="col-md-4">
          <img src='' className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title"></h5>
            <p className="card-text"></p>
           
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  )
}

export default Report;

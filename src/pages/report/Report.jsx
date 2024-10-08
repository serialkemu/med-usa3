import React from 'react';
import { Link } from 'react-router-dom';
import VictimForm from '../../components/forms/VictimForm';
import LiveReport from '../../components/forms/LiveReport'
import WitnessForm from '../../components/forms/WitnessForm';
import ReportCard from './ReportCard';
import Cyberbully from '../../components/forms/Cyberbully';
import witness from '../../assets/images/witness.png';
import victim from '../../assets/images/victim.png';
import urgent from '../../assets/images/urgent.png';
import cyberbully from '../../assets/images/cyberbully.png';



const Reportz = (repoicon,repomes, repotitle) => {
  return (
    <div className="card mb-3 " style={{ maxWidth: "440px" }}>
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
    <div> 
            <h3 className='text-center'>Your safety is our concern</h3>
    <div className='womenz container m-3  d-flex justify-content-center'>
      <div className="p-5 text-center ">
      <div className="card mb-3 " style={{ maxWidth: "440px" }}>
      <div className="row g-0 bg-transparent">
        <div className="col-md-4">
          <img src={urgent} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Report a Live Incident</h5>
            <p className="card-text">Happening now !</p>
            <Link to='/LiveReport' className='btn btn-secondary'>Report now</Link>
           
          </div>
        </div>
      </div>
    </div>
    
    <div className="card mb-3 " style={{ maxWidth: "440px" }}>
      <div className="row g-0 bg-transparent">
        <div className="col-md-4">
          <img src={victim} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Victim reporting form</h5>
            <p className="card-text">Report a past incident that happened to you</p>
            <Link to='/VictimForm' className='btn btn-secondary'>Narrate your  story</Link>
           
          </div>
        </div>
      </div>
    </div>
    <div className="card mb-3 " style={{ maxWidth: "440px" }}>
      <div className="row g-0 bg-transparent">
        <div className="col-md-4">
          <img src={witness} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Witness</h5>
            <p className="card-text">Report as a witness</p>
            <Link to='/WitnessForm' className='btn btn-secondary'>Give your Statment</Link>
           
          </div>
        </div>
      </div>
    </div>
    <div className="card mb-3 " style={{ maxWidth: "440px" }}>
      <div className="row g-0 bg-transparent">
        <div className="col-md-4">
          <img src={cyberbully} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Cyber Crime</h5>
            <p className="card-text">Report a cyber bully</p>
            <Link to='/CyberbullyForm' className='btn btn-secondary'>Unmask the keyboard warrior </Link>
           
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
    </div>
  ) 
}

export default Report;

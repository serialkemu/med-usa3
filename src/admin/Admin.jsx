import React, { useState } from 'react';
import CaseFiles from './CaseFiles';
import { Link } from 'react-router-dom';


const Admin = () => {
  return (
    <div>
      <div>
        <h2>Admin Dashboard</h2>
      </div>
      <div>
      <div className="card">
        <div className="card-header">
          Urgency
          </div>
          <div class="card-body">
            <h5 class="card-title">Case Name</h5>
          <p class="card-text">Case Description</p>
          <Link to='/CaseFiles' class="btn btn-primary">Review Case</Link>
          </div>
          </div>
          </div>
    </div>
  )
}

export default Admin;

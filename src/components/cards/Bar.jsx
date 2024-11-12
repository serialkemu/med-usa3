import React from 'react';
import { FaPhoneAlt, FaExclamationTriangle, FaMapMarkerAlt, FaVideo } from 'react-icons/fa'; // Import suitable icons
import { Link } from 'react-router-dom';

const Bar = () => {
  return (
    <div className="position-relative d-flex justify-content-center align-items-center py-3 bg-light shadow-sm">
      <div className="d-flex gap-5">
        {/* Emergency Contact */}
        <div className="icon-wrapper d-flex align-items-center">
          <FaPhoneAlt size={24} className="me-2 text-danger" />
          <a href="+254800000999" className="text-dark">Emergency Contact</a>
        </div>

        {/* Report Now */}
        <div className="icon-wrapper d-flex align-items-center">
          <FaExclamationTriangle size={24} className="me-2 text-danger" /> {/* Report icon */}
          <Link to='/LiveReport' className='btn btn-secondary'>Report Now</Link>
        </div>

        {/* Map */}
        <div className="icon-wrapper d-flex align-items-center">
          <FaMapMarkerAlt size={24} className="me-2 text-danger" /> {/* Map icon */}
          <span className="text-dark">Map</span>
        </div>

        {/* Record Live Event */}
        <div className="icon-wrapper d-flex align-items-center">
          <FaVideo size={24} className="me-2 text-danger" /> {/* Record event icon */}
          <Link to='/videoMedia' className=''></Link>
          <span className="text-dark">Record Live Event</span>
        </div>
      </div>
    </div>
  );
};

export default Bar;

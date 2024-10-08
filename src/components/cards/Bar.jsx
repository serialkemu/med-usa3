import React from 'react';
import { FaGithub, FaGoogleDrive, FaWhatsapp } from "react-icons/fa"; // React Icons for easy icon integratio

const Bar = () => {
  return (
    <div className="position-relative d-flex justify-content-center align-items-center">
      <div className="d-flex gap-4">
        {/* FaGithub Icon */}
        <div className="icon-wrapper">
          <FaGithub size={40} className="icon" />
        </div>

        {/* FaGoogleDrive Icon */}
        <div className="icon-wrapper">
          <FaGoogleDrive size={40} className="icon" />
        </div>

        {/* FaWhatsapp Icon */}
        <div className="icon-wrapper">
          <FaWhatsapp size={40} className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Bar;

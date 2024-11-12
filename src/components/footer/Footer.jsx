import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          {/* Contact Us Section */}
          <div className="col-md-6 mb-4">
            <h4>Talk to us! Add your suggestions</h4>
            <hr className="border-light" />
            <p>If you have any ideas or feedback, feel free to reach out to us. We'd love to hear from you!</p>
          </div>

          {/* Social Media and Contact Section */}
          <div className="col-md-6">
            <div className="d-flex justify-content-start mb-3">
              {/* Social Media Icons */}
              <a href="#" className="text-light me-4 icon-link">
                <FaInstagram size={40} className="icon" />
              </a>
              <a href="#" className="text-light me-4 icon-link">
                <FaTwitter size={40} className="icon" />
              </a>
              <a href="#" className="text-light me-4 icon-link">
                <FaLinkedin size={40} className="icon" />
              </a>
              <a href="#" className="text-light me-4 icon-link">
                <FaFacebook size={40} className="icon" />
              </a>
            </div>

            {/* Location and Direct Contact */}
            <div>
              <h4>Our Location:</h4>
              <p>Soweto, Nairobi</p>
            </div>

            <div>
              <h4>Contact us directly:</h4>
              <div className="mb-2">
                <AiOutlinePhone size={30} className="me-2" />
                <a href="tel:0718-158-400" className="text-light">0718-158-400</a>
              </div>
              <div>
                <AiOutlineMail size={30} className="me-2" />
                <a href="mailto:info@usikimye.org" className="text-light">info@usikimye.org</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

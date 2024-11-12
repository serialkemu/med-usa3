import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../../components/cards/Carousel';
import Information from '../../components/cards/Information';
import Home2 from './Home2';
import home3 from '../../assets/images/home3.png';
import People from './People';
import Bar from '../../components/cards/Bar';

const Home = () => {
  const [open, set] = useState(false);

  return (
    <div>
     
      <div className="m-2 rounded-end p-5 text-dark border" style={{ height: '30rem' }}>
        <div className="row g-4 align-items-center">
        
          <div className="col-md-6" style={{ padding: '20px', borderRadius: '10px' }}>
            <img src={home3} className="img-fluid rounded-start" alt="..." style={{ height: '30rem' }} />
          </div>
         
          <div className="col-md-6">
            <div className="card-body text-start">
              <h5 className="card-title bold">Welcome</h5>
              <p className="card-text">The time for silence is over. It is time to speak out against gender-based violence.</p>
              <p className="card-text">
                <small className="text-body-secondary">Malala Yousafzai</small>
              </p>
              <p> <Bar/></p>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center " >
        <div className="row p-2 " style={{ height: '45rem',width: '70rem' }} >
            <Information />
        </div>
      </div>
      <div className="col-mb-6 col-sm-12 ">
            <People />
          </div>
    </div>
  );
};

export default Home;

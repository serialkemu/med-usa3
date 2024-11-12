import React from 'react';

const Info = ({ carTitle, carLink, cardis }) => {
  return (
    <div className="col" style={{ height: '20rem', width: '20rem' }}>
      <div className="card h-100 bg-info d-flex flex-column justify-content-between shadow-sm info-card text-center">
        <div className="card-body">
          <h5 className="card-title">{carTitle}</h5>
          <p>{cardis}</p>
        </div>
        <div className="card-footer text-center mt-auto">
          <button className="btn btn-secondary w-100">
            <a href={carLink} className="text-white text-decoration-none">READ MORE</a>
          </button>
        </div>
      </div>
    </div>
  );
};

const Information = () => {
  return (
    <div className="d-flex justify-content-center p-2">
      <div className="row row-cols-1 row-cols-md-3 g-3 justify-content-center">
        {/* Info cards */}
        <Info
          carTitle="Warning Signs Of SGBV"
          cardis="Physical injuries, fear, isolation, change in behavior, depression."
          carLink="#"
        />
        <Info
          carTitle="Laws on SGBV"
          cardis="SGBV law prohibits violence against individuals based on their gender, protects victims, and holds perpetrators accountable."
          carLink="#"
        />
        <Info
          carTitle="Statistics on SGBV"
          cardis="Over 40% of women in Kenya have experienced physical or sexual violence from an intimate partner in their lifetime."
          carLink="#"
        />
        <Info
          carTitle="Education"
          cardis="Awareness, prevention, support, accountability, gender equality."
          carLink="#"
        />
        <Info
          carTitle="Prevention"
          cardis="Early interventions and education on violence prevention are crucial in reducing SGBV."
          carLink="#"
        />
        <Info
          carTitle="Support Services"
          cardis="Support services including counseling, medical care, and legal help are available for SGBV survivors."
          carLink="#"
        />
      </div>
    </div>
  );
};

export default Information;

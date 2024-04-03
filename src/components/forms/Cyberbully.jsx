import React, { useState } from 'react';

const CyberbullyForm= () => {
  const [formData, setFormData] = useState({
    bullyName: '',
    bullyLink: '',
    mediaEvidence: null // This will hold the file object
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      mediaEvidence: file
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send the form data to your backend or do any other necessary actions
    console.log(formData);
    // Reset the form after submission if needed
    setFormData({
      bullyName: '',
      bullyLink: '',
      mediaEvidence: null
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='m-3 p-4'>
        <div className="input-group mb-3">
          <span className="input-group-text" id="abuserName">Bully Username</span>
          <input type="text" name="bullyName" className="form-control" placeholder="" aria-label="bullyName" value={formData.bullyName} onChange={handleChange} aria-describedby="basic-addon1" />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="abuserName">Add the Link</span>
          <input type="text" name="bullyLink" className="form-control" placeholder="" aria-label="bullyLink" value={formData.bullyLink} onChange={handleChange} aria-describedby="basic-addon1" />
        </div>
        <div className="input-group mt-3">
          <label className="input-group-text" htmlFor="inputGroupFile01">Upload the screenshot</label>
          <input type="file" name="mediaEvidence" className="form-control" id="inputGroupFile01" onChange={handleFileChange} />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Submit</button>
      </form>
    </div>
  );
};

export default CyberbullyForm;

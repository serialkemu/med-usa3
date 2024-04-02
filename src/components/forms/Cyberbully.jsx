import React from 'react'

const Cyberbully = () => {
  return (
    <div>
        <form onSubmit={handleSubmit} className='m-3 p-4'>
        <div className="input-group mb-3">
          <span className="input-group-text" id="abuserName">Bully Usename</span>
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
        </form>
    </div>
  )
}

export default Cyberbully
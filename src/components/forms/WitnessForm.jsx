import React, { useState } from 'react';
import AudioRecorder from '../Media/AudioRecorder';
import VideoMedia from '../Media/VideoMedia';

const WitnessForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    victimName: "",
    abuserName: "",
    location: "",
    typeOfAbuse: "",
    urgency: 1,
    storyText: "",
    storyVideoUrl: null,
    storyAudioUrl: null,
    mediaEvidence: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };
  const handleVideoRecordingComplete = (videoUrl) => {
    console.log("Video recording complete:", videoUrl);
    setFormData({ ...formData, storyVideoUrl: videoUrl });
  };

  const handleAudioRecordingComplete = (audioUrl) => {
    console.log("Audio recording complete:", audioUrl);
    setFormData({ ...formData, storyAudioUrl: audioUrl });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('victimName', formData.victimName || '');
      formDataToSend.append('abuserName', formData.abuserName || '');
      formDataToSend.append('location', formData.location || '');
      formDataToSend.append('typeOfAbuse', formData.typeOfAbuse || '');
      formDataToSend.append('urgency', formData.urgency);
      formDataToSend.append('storyText', formData.storyText || '');
      formDataToSend.append('storyVideoUrl', formData.storyVideoUrl || '');
      formDataToSend.append('storyAudioUrl', formData.storyAudioUrl || '');
      formDataToSend.append('mediaEvidence', formData.mediaEvidence);

      const response = await fetch("http://localhost:5001/cases/witnessCase", {
        method: "POST",
        body: formDataToSend
      });

      if (!response.ok) {
        throw new Error("Failed to submit form data");
      }
      console.log("Form submitted successfully!");
      // Reset form data
      setFormData({
        victimName: "",
        abuserName: "",
        location: "",
        typeOfAbuse: "",
        urgency: 1,
        storyText: "",
        storyVideoUrl: null,
        storyAudioUrl: null,
        mediaEvidence: null,
      });
    } catch (error) {
      console.error('Error submitting form:', error.message);
    }
  };

  return (
    <div className='container p-5 m-3'>
      <div>
        <h3 className="text-center">Witness Reporting Form</h3>
      </div>
      <form onSubmit={handleSubmit} className='m-3 p-4' encType="multipart/form-data">
        <div className="input-group mb-3">
          <span className="input-group-text" id="abuserName">Witness Name</span>
          <input type="text" name="victimName" className="form-control" placeholder="" aria-label="victimName" value={formData.victimName} onChange={handleChange} aria-describedby="basic-addon1" />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="abuserName">Victim Name</span>
          <input type="text" name="victimName" className="form-control" placeholder="" aria-label="victimName" value={formData.victimName} onChange={handleChange} aria-describedby="basic-addon1" />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="abuserName">Abuser's name</span>
          <input type="text" name="abuserName" className="form-control" placeholder="" aria-label="abuserName" value={formData.abuserName} onChange={handleChange} aria-describedby="basic-addon1" />
        </div>
        <div className="input-group mb-3 ">
          <span className="input-group-text" id="sgbvLocation">Location of Incident</span>
          <input type="text" name="location" className="form-control" placeholder="Location" aria-label="sgbvLocation" value={formData.location} onChange={handleChange} aria-describedby="basic-addon1" />
        </div>
        <div className="input-group mb-3 ">
          <span className="input-group-text" id="typeOfAbuse">Type of Abuse</span>
          <input type="text" name="typeOfAbuse" className="form-control" placeholder="Type of Abuse" aria-label="typeOfAbuse" value={formData.typeOfAbuse} onChange={handleChange} aria-describedby="basic-addon1" />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Tell your story</span>
          <textarea name="storyText" className="form-control" aria-label="With textarea" value={formData.storyText} onChange={handleChange}></textarea>
        </div>
        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="urgency">Urgency:</label>
          <select 
            className="form-select" 
            id="urgency" 
            value={formData.urgency} 
            onChange={handleChange}
            name="urgency"
          >
            {[1, 2, 3, 4, 5].map(value => (
              <option key={value} value={value}>{value}</option>
            ))}
          </select>
        </div>
        <div className='border border-2 m-2'>
          <AudioRecorder onStopRecording={handleAudioRecordingComplete} />
        </div>
        <div className='border border-2 m-2'>
          <VideoMedia onStopRecording={handleVideoRecordingComplete} />
        </div>
        <div className="input-group mt-3">
          <label className="input-group-text" htmlFor="inputGroupFile01">Upload any media evidence</label>
          <input type="file" name="mediaEvidence" className="form-control" id="inputGroupFile01" onChange={handleFileChange} />
        </div>
        <button
          className='btn btn-secondary mt-2'
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default WitnessForm;
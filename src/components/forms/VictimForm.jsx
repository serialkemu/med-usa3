import React, { useState } from 'react';
import AudioRecorder from '../Media/AudioRecorder';
import VideoRecorder from '../Media/VideoMedia';

const VictimForm = () => {
  const [formData, setFormData] = useState({
    victimName: "",
    abuserName: "",
    location: "",
    storyText: "",
    storyAudio: null,
    storyVideo: null,
    mediaEvidence: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("Name:", name);
    console.log("Value:", value);
    setFormData({ ...formData, [name]: value });
  };
  
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    console.log("Name:", name);
    console.log("Files:", files);
    setFormData({ ...formData, [name]: files[0] });
  };

  // const handleVideoRecordingComplete = (videoBlob) => {
  //   console.log("Video recording complete:", videoBlob);
  //   setFormData({ ...formData, storyVideo: videoBlob });
  // };

  const handleAudioRecordingComplete = (audioBlob) => {
    if (audioBlob.size > 0) {
      console.log("Audio recording complete:", audioBlob);
      setFormData({ ...formData, storyAudio: audioBlob });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('victimName', formData.victimName || '');
      formDataToSend.append('abuserName', formData.abuserName || '');
      formDataToSend.append('location', formData.location || '');
      formDataToSend.append('storyText', formData.storyText || '');

      formDataToSend.append('storyAudio', formData.storyAudio || '');
      formDataToSend.append('storyVideo', formData.storyVideo || '');
      formDataToSend.append('mediaEvidence', formData.mediaEvidence || '');
      
      console.log(formDataToSend)
      const response = await fetch('http://localhost:5001/cases/victimCase', {
        method: 'POST',
        body: formDataToSend,

      });
  
      if (!response.ok) {
        throw new Error('Failed to submit form data');
      }


      console.log('Form submitted successfully!');

      // Reset form data
      setFormData({
        victimName: '',
        abuserName: '',
        location: '',
        storyText: '',
        storyAudio: null,
        storyVideo: null,
        mediaEvidence: null,
      });
    } catch (error) {
      console.error('Error submitting form:', error.message);
    }
  };
  
  return (
    <div className='container p-5 m-3'>
      <div>
        <h3 className="text-center">Victim's Reporting Form</h3>
      </div>
      <form onSubmit={handleSubmit} className='m-3 p-4' encType="multipart/form-data">
        <div className="input-group mb-3">
          <span className="input-group-text" id="abuserName">Your Name</span>
          <input type="text" name="victimName" className="form-control" placeholder="" aria-label="victimName" value={formData.victimName} onChange={handleChange} aria-describedby="basic-addon1" />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="abuserName">Abuser's name</span>
          <input type="text" name="abuserName" className="form-control" placeholder="" aria-label="abuserName" value={formData.abuserName} onChange={handleChange} aria-describedby="basic-addon1" />
        </div>
        <div className="input-group mb-3 ">
          <span className="input-group-text" id="sgbvLocation">Location it took place</span>
          <input type="text" name="location" className="form-control" placeholder="Location" aria-label="sgbvLocation" value={formData.location} onChange={handleChange} aria-describedby="basic-addon1" />
        </div>
        <div>
          <h4 className="text-center">Tell your Story In Any way you want</h4>
          <hr/>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Tell your your story</span>
          <textarea name="storyText" className="form-control" aria-label="With textarea" value={formData.storyText} onChange={handleChange}></textarea>
        </div>
        <div className='border border-2 m-2'>
          <AudioRecorder onStopRecording={handleAudioRecordingComplete} name='storyAudio' onChange={handleFileChange}/>
        </div>
        <div className='border border-2 m-2'>
          {/* <VideoRecorder onStopRecording={handleVideoRecordingComplete} name='storyVideo' /> */}
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

export default VictimForm;

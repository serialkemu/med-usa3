import React, { useState } from 'react';
import VideoMedia from '../Media/VideoMedia';
import AudioRecorder from '../Media/AudioRecorder';
import { ReportingInst } from '../Media/ReportingInst';
import axios from 'axios';

const LiveReport = () => {
  const [audioUrl, setAudioUrl] = useState('');
  const [videoUrl, setVideoUrl] = useState('');

  const handleSubmit = async () => {
    try {
      // Send the audio and video URLs to the endpoint for saving in the database
      const response = await axios.post('http://localhost:5001/cases/saveLiveReport', {
        audioUrl,
        videoUrl
      });
      
      // Handle response as needed
      console.log('Report saved:', response.data);
    } catch (error) {
      console.error('Error saving report:', error);
    }
  };

  return (
    <div>
      <div className='text-center'>
        <h1>Report now</h1>
      </div>
      <div className='container d-flex  justify-content-center'>
        <div className='m-3 p-5 border  border-start-0 border-info border-3 '>
          <VideoMedia onSave={setVideoUrl} />
        </div>
        <div className='m-3 p-5 border  border-end-0 border-info border-3'>
          <AudioRecorder onSave={setAudioUrl} />
        </div>
      </div>
      <ReportingInst />
      <div className="text-center">
        <button onClick={handleSubmit} className="btn btn-primary">Submit Report</button>
      </div>
    </div>
  );
};

export default LiveReport;
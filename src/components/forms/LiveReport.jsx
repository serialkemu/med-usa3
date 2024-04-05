import React, { useState } from 'react';
import VideoRecorder from '../Media/VideoMedia';
import AudioRecorder from '../Media/AudioRecorder';
import { ReportingInst } from '../Media/ReportingInst';
import axios from 'axios';

const LiveReportForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    storyVideoUrl: null,
    storyAudioUrl: null,
  });

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
      const response = await fetch("http://localhost:5001/cases/saveLiveReport", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error("Failed to submit form data");
      }
  
      console.log("Form submitted successfully!");
      // Reset form data
      setFormData({
        storyVideoUrl: null,
        storyAudioUrl: null,
      });
    } catch (error) {
      console.error('Error submitting form:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="application/json">
      <div className='text-center'>
        <h1>Report now</h1>
      </div>
      <div className='container d-flex justify-content-center'>
        <div className='m-3 p-5 border border-start-0 border-info border-3'>
          <VideoRecorder onStopRecording={handleVideoRecordingComplete} />
        </div>
        <div className='m-3 p-5 border border-end-0 border-info border-3'>
          <AudioRecorder onStopRecording={handleAudioRecordingComplete} />
        </div>
      </div>
      <ReportingInst />
      <div className="text-center">
        <button type="submit" className="btn btn-secondary">Submit Report</button>
      </div>
    </form>
  );
};

export default LiveReportForm;

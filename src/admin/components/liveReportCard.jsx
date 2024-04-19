import React, { useRef, useState } from 'react';
import Moment from 'moment-timezone';

const LiveReportCard = ({ _id, audioUrl, videoUrl, reportedAt }) => {
  const reportedAtEAT = Moment(reportedAt).tz('Africa/Nairobi').format('YYYY-MM-DD HH:mm:ss');
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(null);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
      videoRef.current.pause();
    } else {
      audioRef.current.play();
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleAudioDownload = (e) => {
    const audioElement = audioRef.current;
    const audioUrl = audioElement.src;
    const audioName = audioUrl.split('/').pop();
    const link = document.createElement('a');

    link.href = audioUrl;
    link.download = audioName;
    link.click();
  };

  const handleVideoDownload = (e) => {
    const videoElement = videoRef.current;
    const videoUrl = videoElement.src;
    const videoName = videoUrl.split('/').pop();
    const link = document.createElement('a');

    link.href = videoUrl;
    link.download = videoName;
    link.click();
  };
  

  return (
    <div className="card">
      <div className="card-header">Live Report #{_id}</div>
      <div className="card-body">
        <p><strong>Reported At (EAT):</strong> {reportedAtEAT}</p>
        <div>
          <audio
            controls
            src={audioUrl} // Set audio source dynamically
            type="audio/mpeg"
            ref={audioRef}
          >
            Your browser does not support the audio element.
          </audio>
          <button className="download-btn" onClick={handleAudioDownload}>
            Download Audio
          </button>
        </div>
        <div>
          <video
            controls
            src={videoUrl} // Set video source dynamically
            type="video/mp4"
            ref={videoRef}
          >
            Your browser does not support the video element.
          </video>
          <button className="download-btn" onClick={handleVideoDownload}>
            Download Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default LiveReportCard;

import React from 'react';
import Moment from 'moment-timezone';

const LiveReportCard = ({ _id, storyVideoUrl, storyAudioUrl, reportedAt }) => {
  const reportedAtEAT = Moment(reportedAt).tz('Africa/Nairobi').format('YYYY-MM-DD HH:mm:ss');

  return (
    <div className="card">
      <div className="card-header">Live Report #{_id}</div>
      <div className="card-body">
        <p><strong>Reported At (EAT):</strong> {reportedAtEAT}</p>
        <div>
          <audio
            controls
            src={storyAudioUrl}
            type="audio/mpeg"
          >
            Your browser does not support the audio element.
          </audio>
          <button className="download-btn">Download Audio</button>
        </div>
        <div>
          <video
            controls
            src={storyVideoUrl}
            type="video/mp4"
          >
            Your browser does not support the video element.
          </video>
          <button className="download-btn">Download Video</button>
        </div>
      </div>
    </div>
  );
};

export default LiveReportCard;
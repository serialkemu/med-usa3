import React from 'react';
import VideoMedia from '../Media/VideoMedia';
import AudioRecorder from '../Media/AudioRecorder';
import { ReportingInst } from '../Media/ReportingInst';




const LiveReport = () => {
  return (
    <div>
     <div className='text-center'>
     <h1>Report now</h1>
     </div>
      <div className='container d-flex  justify-content-center'>
      <div className='m-3 p-5 border  border-start-0 border-info border-3 '>
        <VideoMedia/>
      </div>
      <div className='m-3 p-5 border  border-end-0 border-info border-3'>
        <AudioRecorder/>
      </div>
      </div>
      <ReportingInst/>
    </div>
  )
}

export default LiveReport
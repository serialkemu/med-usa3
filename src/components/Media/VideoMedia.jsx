import React, { useState, useRef, useEffect } from "react";

const VideoRecorder = ({ onStopRecording }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [mediaStream, setMediaStream] = useState(null);
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [videoChunks, setVideoChunks] = useState([]);

  const handleStartRecording = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
      setMediaStream(stream);
      setIsRecording(true);
    } catch (error) {
      console.error("Error accessing media devices:", error);
    }
  };

  const handleStopRecording = async () => {
    setIsRecording(false);

    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
      mediaRecorderRef.current.stop();
    }
    if (mediaStream) {
      mediaStream.getTracks().forEach(track => {
        track.stop();
      });
      setMediaStream(null);
    }

    // Save the recording when stopped
    handleSaveRecording();
  };

  const handleSaveRecording = () => {
    const videoBlob = new Blob(videoChunks, { type: "video/webm" });
    if (typeof onStopRecording === 'function') {
      onStopRecording(videoBlob);
    }
  };

  useEffect(() => {
    if (!isRecording || !mediaStream) return;

    const chunks = [];

    mediaRecorderRef.current = new MediaRecorder(mediaStream, {
      mimeType: "video/webm",
    });

    mediaRecorderRef.current.ondataavailable = (event) => {
      if (event.data.size > 0) {
        chunks.push(event.data);
        setVideoChunks([...chunks]);
        console.log("Chunk array length:", chunks.length);
      }
    };

    mediaRecorderRef.current.onstop = () => {
      // Do nothing here
    };

    mediaRecorderRef.current.start();

    return () => {
      if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
        mediaRecorderRef.current.stop();
      }
    };
  }, [isRecording, mediaStream, onStopRecording]);

  useEffect(() => {
    if (mediaStream && videoRef.current) {
      videoRef.current.srcObject = mediaStream;
    }
  }, [mediaStream]);

  return (
    <div>
      <button onClick={handleStartRecording} disabled={isRecording}>
        Start Live Recording
      </button>
      {isRecording && (
        <button onClick={handleStopRecording}>Stop recording</button>
      )}
      {mediaStream && (
        <div>
          <video ref={videoRef} autoPlay />
        </div>
      )}
    </div>
  );
};

export default VideoRecorder;

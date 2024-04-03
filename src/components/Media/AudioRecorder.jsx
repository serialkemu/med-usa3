import React, { useState, useRef, useEffect } from "react";

const AudioRecorder = ({ onStopRecording }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [mediaStream, setMediaStream] = useState(null);
  const mediaRecorderRef = useRef(null);
  const [audioChunks, setAudioChunks] = useState([]);

  const handleStartRecording = async (e) => {
    e.preventDefault(); // Prevent form submission
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
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

    // Call onStopRecording only once when recording stops
    const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
    const audioURL = URL.createObjectURL(audioBlob);
    console.log("Recorded audio URL:", audioURL);
    if (typeof onStopRecording === 'function') {
      console.log("Calling onStopRecording with URL:", audioURL); // Add this line

      onStopRecording(audioURL);
    }
  };

  useEffect(() => {
    if (!isRecording || !mediaStream) return;

    const chunks = [];

    mediaRecorderRef.current = new MediaRecorder(mediaStream);

    mediaRecorderRef.current.ondataavailable = (event) => {
      if (event.data.size > 0) {
        chunks.push(event.data);
        setAudioChunks([...chunks]);
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
  }, [isRecording, mediaStream]);

  return (
    <div>
      <button onClick={handleStartRecording} disabled={isRecording}>
        Start recording
      </button>
      {isRecording && <span>Recording...</span>}
      {isRecording && (
        <button onClick={handleStopRecording}>Stop recording</button>
      )}
    </div>
  );
};

export default AudioRecorder;

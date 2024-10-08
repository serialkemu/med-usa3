import React, { useState, useRef, useEffect } from "react";

const AudioRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [mediaStream, setMediaStream] = useState(null);
  const mediaRecorderRef = useRef(null);
  const [audioChunks, setAudioChunks] = useState([]);

  const startRecording = () => {

    const chunks = [];

    mediaRecorderRef.current = new MediaRecorder(mediaStream);

    mediaRecorderRef.current.ondataavailable = (event) => {
      if (event.data.size > 0) {
        chunks.push(event.data);
        setAudioChunks([...chunks]);
      }
    };

    mediaRecorderRef.current.onstop = () => {
      const audioBlob = new Blob(audioChunks, { type: "audio/wav" });

      console.log("Recorded audio blob:", audioBlob);

      if (typeof onStopRecording === "function") {
        console.log("Calling onStopRecording with blob:", audioBlob);
        onStopRecording(audioBlob);
      }

    };

    setTimeout(() => {
      mediaRecorderRef.current.start();
    }, 500); // Start the MediaRecorder after a 500ms delay
};

  const handleStartRecording = async (e) => {
    e.preventDefault();

    if (!mediaStream) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        setMediaStream(stream);
      } catch (error) {
        console.error("Error accessing media devices:", error);
        return;
      }
    }

    setIsRecording(true);

    if (isRecording && mediaStream) {
      startRecording();
    }
  };

  const handleStopRecording = (
) => {
    setIsRecording(false);
  };

  useEffect(() => {
    if (!isRecording || !mediaStream) {
      console.log("Stopping MediaRecorder due to prop changes");
      if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
        mediaRecorderRef.current.stop();
      }

      return;
    }
  }, [isRecording, mediaStream]);


  return (
    <div>
      <button onClick={handleStartRecording} disabled={isRecording}>
        Start Audio Recording
      </button>
      {isRecording && <span>Recording...</span>}
      {isRecording && (
        <button onClick={handleStopRecording}>Stop recording</button>
      )}
    </div>
  );
};

export default AudioRecorder;

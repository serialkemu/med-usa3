import React, { useState, useRef, useEffect } from "react";

const AudioRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [mediaStream, setMediaStream] = useState(null);
  const mediaRecorderRef = useRef(null);
  const [audioChunks, setAudioChunks] = useState([]);

  const handleStartRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setMediaStream(stream);
      setIsRecording(true);
    } catch (error) {
      console.error("Error accessing media devices:", error);
    }
  };

  const handleStopRecording = () => {
    setIsRecording(false);

    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
      mediaRecorderRef.current.stop();
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
      }
    };

    mediaRecorderRef.current.onstop = () => {
      const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
      const audioUrl = URL.createObjectURL(audioBlob);

      // Create a temporary anchor element to trigger the download
      const downloadLink = document.createElement("a");
      downloadLink.href = audioUrl;

      // Specify default filename and directory
      downloadLink.download = "/home/kimunto/projects/Medu/med-usa/Server/Uploads/recorded_audio.wav";
      downloadLink.click();

      // Clean up resources
      URL.revokeObjectURL(audioUrl);
    };

    mediaRecorderRef.current.start();

    return () => {
      if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
        mediaRecorderRef.current.stop();
      }
    };
  }, [isRecording, mediaStream, audioChunks]);

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

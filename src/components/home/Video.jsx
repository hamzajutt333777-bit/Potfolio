
const Video = () => {
  return (
    <div className="w-full h-full">
      <video
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        src="/codingDemoVideo.mp4"
      ></video>
    </div>
  );
};

export default Video;

import ReactPlayer from "react-player/lazy";

const VideoPlayer = (props : {playing?: boolean }) => {
  return (
    <ReactPlayer
      playing={props.playing}
      url="https://www.youtube.com/embed/Te_DTmOt4Xw"
    />
  );
};

export default VideoPlayer;

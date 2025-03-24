import ReactPlayer from "react-player";
import PropTypes from "prop-types";

const VideoPlayer = ({ url }) => {
  if (!url) {
    return null;
  }
  return (
    <div style={{ maxWidth: "100%", aspectRatio: "16/9" }}>
      <ReactPlayer url={url} width="100%" height="100%" controls />
    </div>
  );
};

VideoPlayer.propTypes = {
  url: PropTypes.string,
};

export default VideoPlayer;

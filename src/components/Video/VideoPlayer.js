import React from 'react';

const VideoPlayer = ({ video }) => {
  return (
    <div>
      <h3>{video.title}</h3>
      <p>{video.description}</p>
      <video width="600" controls>
        <source src={`/videos/${video.filename}`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;

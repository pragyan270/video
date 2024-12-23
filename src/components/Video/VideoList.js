import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('/api/videos');
        setVideos(response.data.videos);
      } catch (error) {
        console.error('Failed to fetch videos', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div>
      <h2>Video List</h2>
      <ul>
        {videos.map((video) => (
          <li key={video._id}>
            <h3>{video.title}</h3>
            <p>{video.description}</p>
            <video width="400" controls>
              <source src={`/videos/${video.filename}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VideoList;
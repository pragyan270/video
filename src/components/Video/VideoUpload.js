import React, { useState } from 'react';
import { uploadVideo } from '../../Services/api';

const VideoUpload = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('video', file);

    try {
      const response = await uploadVideo(formData);
      console.log(response.data);
    } catch (error) {
      console.error('Video upload failed', error);
    }
  };

  return (
    <form onSubmit={handleUpload}>
      <h2>Upload Video</h2>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required></textarea>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} accept="video/mp4" required />
      <button type="submit">Upload</button>
    </form>
  );
};

export default VideoUpload;

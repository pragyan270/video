const express = require('express');
const { addVideo, getAllVideos } = require('../controllers/videoController');
const { videoUpload } = require('../middleware/videoUpload');

const router = express.Router();

router.post('/upload', videoUpload.single('video'), addVideo);
router.get('/videos', getAllVideos);

module.exports = router;

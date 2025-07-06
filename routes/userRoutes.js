const express = require('express');
const { signupUser, loginUser } = require('../controllers/userController');
const upload = require('../middlewares/uploadMiddleware');
const { uploadFile } = require('../controllers/fileController');

const router = express.Router();

// ++++++++++++++++++++++ Create user routes +++++++++++++++++++++++

router.post('/signup', signupUser);
router.post('/login', loginUser);

router.post('/upload', upload.single('file'), uploadFile);

module.exports = router;


import express from 'express';
import { signupUser, loginUser } from '../controllers/userController.js';
import upload from '../middlewares/uploadMiddleware.js';
import uploadFile from '../controllers/fileController.js';

const router = express.Router();

// ++++++++++++++++++++++ Create user routes +++++++++++++++++++++++

router.post('/signup', signupUser);
router.post('/login', loginUser);

router.post('/upload', upload.single('file'), uploadFile);

export default router;

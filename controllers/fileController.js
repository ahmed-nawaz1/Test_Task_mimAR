const pdfParse = require('pdf-parse');
const { callGeminiAPI } = require('../services/geminiService');
const { uploadToCloudinary } = require('../utils/fileHelper');

const uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const buffer = req.file.buffer;
    const mimetype = req.file.mimetype;

    // ✅ Upload buffer to Cloudinary (from utils now)
    const result = await uploadToCloudinary(buffer, mimetype);

    let extractedText = '';
    if (mimetype === 'application/pdf') {
      const pdfData = await pdfParse(buffer);
      extractedText = pdfData.text;
    }

    let summarizedText = null;
    if (extractedText) {
      summarizedText = await callGeminiAPI(
        `Summarize this PDF content:\n\n${extractedText}`
      );
    }

    res.status(200).json({
      message: 'File uploaded successfully',
      cloudinaryUrl: result.secure_url,
      summarizedText: summarizedText || 'No text extracted for summarization',
    });
  } catch (error) {
    console.error('Error in uploadFile:', error);
    res.status(500).json({
      message: error.message || 'Server error during file upload',
    });
  }
};

module.exports = { uploadFile };

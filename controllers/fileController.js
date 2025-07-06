const fs = require('fs');
const { uploadToCloudinary } = require('../utils/fileHelper');
const pdfParse = require('pdf-parse');
const { callGeminiAPI } = require('../services/geminiService');

const uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    //  Upload to Cloudinary
    const result = await uploadToCloudinary(req.file.path);

    const localFilePath = req.file.path;

    let extractedText = '';
    if (req.file.mimetype === 'application/pdf') {
      // Extract text from PDF
      const dataBuffer = fs.readFileSync(localFilePath);
      const pdfData = await pdfParse(dataBuffer);
      extractedText = pdfData.text;
    }

    // Delete local file after upload
    fs.unlinkSync(localFilePath);

    let summarizedText = null;
    if (extractedText) {
      //Call Gemini API for summarization
      summarizedText = await callGeminiAPI(
        `Summarize this PDF content:\n\n${extractedText}`
      );
    }

    //Return response
    res.status(200).json({
      message: 'File uploaded successfully',
      cloudinaryUrl: result.secure_url,
      summarizedText: summarizedText || 'No text extracted for summarization'
    });
  } catch (error) {
    console.error('Error in uploadFile:', error);
    res.status(500).json({ message: error.message || 'Server error during file upload' });
  }
};

module.exports = { uploadFile };

const cloudinary = require('../services/cloudinary');

const uploadToCloudinary = async (filePath) => {
  // Validate the file path
  if (!filePath) {
    throw new Error('File path is required for upload');
  }
  try {
    // Upload the file to Cloudinary
    const result = await cloudinary.uploader.upload(filePath, {
      folder: 'mimar',
      resource_type: 'auto'
    });

    return result ;
    
  } catch (error) {
    console.error('Cloudinary upload failed:', error);
    throw new Error('Failed to upload file to Cloudinary');
  }
};

module.exports = { uploadToCloudinary };

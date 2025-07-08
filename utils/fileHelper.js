const { v2: cloudinary } = require('cloudinary');
const streamifier = require('streamifier');

const uploadToCloudinary = (fileBuffer) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: 'mimar',
        resource_type: 'auto',
      },
      (error, result) => {
        if (error) {
          console.error('Cloudinary upload failed:', error);
          return reject(new Error('Failed to upload file to Cloudinary'));
        }
        resolve(result);
      }
    );

    streamifier.createReadStream(fileBuffer).pipe(uploadStream);
  });
};

module.exports = { uploadToCloudinary };

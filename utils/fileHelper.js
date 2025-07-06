import cloudinary from '../services/cloudinaryService.js';

export const uploadToCloudinary = async (filePath) => {

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

        return {
            url: result.secure_url,
            public_id: result.public_id
        };

    } catch (error) {

        throw new Error('Failed to upload file to Cloudinary', error);

    }
};

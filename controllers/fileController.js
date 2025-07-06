import fs from 'fs';
import { uploadToCloudinary } from '../utils/fileHelper.js';


const uploadFile = async (req, res) => {
    try {

        // validation
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        const result = await uploadToCloudinary(req.file.path);

        // delete local file after upload
        fs.unlinkSync(req.file.path);

        // send response
        res.status(200).json({
            message: 'File uploaded successfully',
            file: result
        });

    }
    catch (error) {
        // Handle errors
        res.status(500).json({
            message: 'Server error during file upload',
            error
        });

    }
};

export default uploadFile;

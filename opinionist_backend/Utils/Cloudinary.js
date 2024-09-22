const cloudinary = require("cloudinary");
require("dotenv").config();
cloudinary.v2.config({
  cloud_name: "dyeotd3a0",
  api_key: "457287411398281",
  api_secret: process.env.CLOUDINARY_KEY,
  secure: true,
});

const cloudinaryUploadFn = async (fileBuffer) => {
  try {
    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.v2.uploader
        .upload_stream(
          { resource_type: "video" }, // Use "video" for audio files (Cloudinary treats them similarly)
          (error, result) => {
            if (error) {
              console.error("Cloudinary upload error:", error.message);
              return reject(new Error("Failed to upload audio to Cloudinary"));
            }
            // console.log(result, "Upload Result");
            resolve(result);
          }
        )
        .end(fileBuffer); // End the stream after piping the fileBuffer
    });

    return uploadResult;
  } catch (error) {
    console.error("Error in Cloudinary upload:", error.message);
    throw new Error("Failed to upload audio file to Cloudinary");
  }
};

module.exports = cloudinaryUploadFn;

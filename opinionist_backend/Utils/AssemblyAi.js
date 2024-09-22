const assemblyAi = require("assemblyai");
const axios = require("axios");

const uploadedFile = async (cloudinaryUrl) => {
  try {
    // Step 1: Send the Cloudinary URL to AssemblyAI for transcription
    const response = await axios.post(
      "https://api.assemblyai.com/v2/transcript",
      {
        audio_url: cloudinaryUrl, // Using the Cloudinary URL
      },
      {
        headers: {
          authorization: process.env.ASSEMBLY_AI_API, // Your AssemblyAI API key
          "content-type": "application/json",
        },
      }
    );

    // Log the response which contains the transcription ID
    // console.log("Transcription requested:", response.data);
    return response.data.id;
  } catch (error) {
    console.error("Error requesting transcription:", error.message);
    throw error;
  }
};
const getTranscriptionResult = async (transcriptionId) => {
  const response = await axios({
    method: "get",
    url: `https://api.assemblyai.com/v2/transcript/${transcriptionId}`,
    headers: {
      authorization: process.env.ASSEMBLY_AI_API,
    },
  });

  return response.data;
};

module.exports = { uploadedFile, getTranscriptionResult };

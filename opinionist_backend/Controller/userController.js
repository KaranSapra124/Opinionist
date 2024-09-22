const User = require("../Models/User");
const cloudinaryFn = require("../Utils/Cloudinary");
// const assemblyAi = require("assemblyai");
const { uploadedFile, getTranscriptionResult } = require("../Utils/AssemblyAi");
exports.addFeedback = async (req, res) => {
  console.log(req.file, req.body);
  const uploadedFile = await cloudinaryFn(req.file.buffer);
  //   console.log(uploadedFile,'UPLOADED')
  const item = {
    fullName: req.body.fullName,
    email: req.body.email,
    feedbackFile: uploadedFile?.secure_url,
  };

  const user = await User.create(item);
  return res
    .status(201)
    .send({ message: "Feedback Recorded Successfully!", user });
};
exports.fetchAllUsers = async (req, res) => {
  const users = await User.find();
  return res
    .status(200)
    .send({ message: "Users Fetched Successfully!", users });
};
exports.transcribeFile = async (req, res) => {
  // console.log(req.query);
  const id = await uploadedFile(req.body.mediaFile);
  setTimeout(async () => {
    const result = await getTranscriptionResult(id);
    return res.status(200).send({ message: "Transcribed", text: result?.text });
  }, 10000);
};
// fetchUser();

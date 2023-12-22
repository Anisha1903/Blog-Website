const bcrypt = require('bcrypt');
const userModel = require('../models/user.models')
const jwt = require('jsonwebtoken');
require("dotenv").config();
const jwtSecretKey = process.env.MySecretkey;
const { upload } = require('../middlewares/multer.config')
const multer = require('multer');

const uploadHandler =  async (req, res, next) => {
    upload.single("profile")(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        if (err.code === "LIMIT_FILE_SIZE") {
          return res.status(400).json({
            success: false,
            message: "File size exceeds the limit (2MB).",
          });
        }
        return res.status(400).json({
          success: false,
          message: "Unexpected error while uploading the file.",
        });
      } else if (err) {
        return res.status(400).json({ success: false, message: err.message });
      }
      next();
    });
  }

const registerHandler = async (req, res) => {
    try {
        const { fname, lname, email, password } = req.body

        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'Email already registered',
            });
        }

        // const profile = req.file ? req.file.filename : 'default-profile.png';

        const registrationData = new userModel({ fname, lname, email, password})
        await registrationData.save()

        const token = jwt.sign({ RegId: registrationData._id }, jwtSecretKey);

        res.status(201).json({
            success: true,
            message: 'Registration successful',
            registrationData: registrationData,
            token: token,
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, error: error.message })
    }
}




const loginHandler = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'Email does not exists',
            });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: 'Wrong or Invalid Password',
            });
        }

        const token = jwt.sign({ userId: user._id }, jwtSecretKey);

        res.status(200).json({
            success: true,
            message: 'Authentication successful',
            loginData: user,
            token: token,
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, error: error.message })
    }
}


const userdataHandler = async (req, res) => {
    try {

        const userdata = await userModel.find({_id: req.userId});

        res.status(201).json({
            success: true,
            userdata: userdata,
            token_id: req.userId,
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, error: error.message })
    }
}

const updateHandler = async (req, res) => {
    try {
        // const { fname, lname, email, password, channel } = req.body
        const id = req.body.id;
        const fname = req.body.settingdata.fname;
        const lname = req.body.settingdata.lname;
        const email = req.body.settingdata.email;
        const password = req.body.settingdata.password;
        const channel = req.body.settingdata.channel;
        const profile = req.body.settingdata.profile;
        console.log(req.body)

        // const profile = req.file ? req.file.filename : 'default-profile.png';

        const updateData = await userModel.findByIdAndUpdate(id, { fname, lname, email, password, channel, profile })

        res.status(201).json({
            success: true,
            message: 'Account Updated successfully',
            updateData: updateData
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, error: error.message })
    }
}

module.exports = { uploadHandler, registerHandler, loginHandler, userdataHandler, updateHandler };
const multer = require("multer");
const path = require("path");
const blogimage_path = path.join(__dirname, "../Public/Uploads");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, blogimage_path);
  },
  filename: function (req, file, cb) {
    return cb(null, `${file.originalname}`);
  },
});

const upload = multer({ storage });


module.exports = { upload };
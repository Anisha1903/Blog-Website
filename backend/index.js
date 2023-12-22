const express = require('express');
require('dotenv').config()
const cors = require('cors');
const path = require("path");


const app = express();
const port = process.env.PORT || 7000;
app.use(cors());
app.use(express.static('Public/Uploads'))
const img_path = path.join(__dirname, "src/Public/Uploads");
app.use(express.static(img_path));

// app.use(express.static("frontend"));

// app.use(express.json({ limit: "16kb" }));
app.use(express.json());
// app.use(express.urlencoded({ extended: false, limit: "1024kb" }));
app.use(express.urlencoded({ extended: false}));

const userRouter = require("./src/routes/user.routes")
const blogRouter = require("./src/routes/blog.routes")

app.use("/api/v1/users",userRouter)
app.use("/api/v1/blog",blogRouter)

app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
    res.json({success: true, message: "hello world"})
});


app.listen(port, () => console.log(`listening on http://localhost:${port}`));
require('./src/db/database')
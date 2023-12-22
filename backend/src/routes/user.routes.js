const express = require('express')
const userRouter = express.Router()
const {uploadHandler, registerHandler, loginHandler, userdataHandler, updateHandler} = require('../controllers/user.controllers')
const authenticateToken = require('../middlewares/auth.middlewares')

userRouter.post("/register", registerHandler);
userRouter.post("/login", loginHandler);
userRouter.get("/userdata", authenticateToken, userdataHandler);
userRouter.put("/update", uploadHandler, updateHandler);

module.exports = userRouter;
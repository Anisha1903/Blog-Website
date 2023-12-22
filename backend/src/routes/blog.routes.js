const express = require('express')
const blogRouter = express.Router()
const {createHandler, getHandler, updateHandler, deleteHandler } = require('../controllers/blog.controllers')
const authenticateToken = require('../middlewares/auth.middlewares')
const { upload } = require('../middlewares/file.config')


blogRouter.post("/create", upload.single('blogImage'), createHandler)

blogRouter.get("/read", getHandler);

blogRouter.put("/update/:id", upload.single('blogImage'), authenticateToken, updateHandler);

blogRouter.delete("/delete/:id", authenticateToken, deleteHandler);


module.exports = blogRouter;
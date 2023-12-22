const Blog = require('../models/blog.models')



const createHandler =  async (req, res) => {
    try {
        const { title, category, description, author } = req.body

        // if(!req.file){
        //     blogData = new Blog({ title, category, description, author })
        //     await blogData.save()
        // }else{
        //     blogData = new Blog({ title, category, description, author, blogImage: req.file.filename })
        //     await blogData.save()
        // }

        const blogData = (!req.file) ? await Blog.create({ title, category, description, author }) : await Blog.create({ title, category, description, author })
        // await blogData.save()
        // await Blog.create({ title, category, description, author });


        res.status(201).json({
            success: true,
            message: 'Blog Added Successfully',
            blogData: blogData
        });
    } catch (error) {
        console.error(error)

        res.status(500).json({
            success: false,
            message: 'Failed to create a blog',
            error: error.message,
        });
    }
}

const getHandler = async (req, res) => {
    try {
        // const {
        //     page = 1,
        //     limit = 10,
        //     sortField = 'createdAt',
        //     sortOrder = 'desc',
        //     search = '',
        //     startDate = '',
        //     endDate = '',
        //     author = '',
        //     category = '',
        // } = req.query;

        // const pageNumber = parseInt(page);
        // const limitNumber = parseInt(limit);

        // if (isNaN(pageNumber) || isNaN(limitNumber) || pageNumber < 1 || limitNumber < 1) {
        //     return res.status(400).json({
        //         success: false,
        //         message: 'Invalid pagination parameters',
        //     });
        // }

        // const filter = {};

        // if (search) {
        //     filter.$text = { $search: search };
        // }

        // if (startDate || endDate) {
        //     filter.createdAt = {};
        //     if (startDate) {
        //         filter.createdAt.$gte = new Date(startDate);
        //     }
        //     if (endDate) {
        //         filter.createdAt.$lte = new Date(endDate);
        //     }
        // }

        // if (author) {
        //     filter.author = author;
        // }

        // if (category) {
        //     filter.category = category;
        // }

        // const query = Blog.find(filter)
        //     .skip((pageNumber - 1) * limitNumber)
        //     .limit(limitNumber)
        //     .sort({ [sortField]: sortOrder });

        // const blogposts = await query.exec();


        const blogposts = await Blog.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            message: 'Blog posts retrieved successfully',
            blogposts: blogposts,
        });
    } catch (error) {
        console.error(error)
        res.status(500).json({ success: false, error: error.message })
    }
}

const updateHandler = async (req, res) => {
    try {
        const id = req.params.id
        const title = req.body.title;
        const category = req.body.category;
        const description = req.body.description;
        const author = req.body.author;

        const updatedBlogData = (!req.file) ? await Blog.findByIdAndUpdate(id, {title, category, description, author}, { new: true }) : await Blog.findByIdAndUpdate(id, {title, category, description, author,  blogImage: req.file.filename}, { new: true })

        if (!updatedBlogData) {
            return res.status(404).json({
                success: false,
                message: 'Blog not found',
            });
        }

        res.status(200).json({
            success: true,
            message: 'Blog updated successfully',
            blogData: updatedBlogData,
        });
    } catch (error) {
        console.error(error)
        res.status(500).json({
            success: false,
            message: 'Failed to update the blog',
            error: error.message,
        });
    }
}

const deleteHandler = async (req, res) => {
    try {
        const Id = req.params.id
        const blogpost = await Blog.findByIdAndDelete(Id)

        res.status(200).json({
            success: true,
            message: 'Blog Deleted Successfully',
            blogpost: blogpost
        });
    } catch (error) {
        console.error(error)
        res.status(500).json({
            success: false,
            message: 'Failed to delete the blog',
            error: error.message,
        });
    }
}

module.exports = { createHandler, getHandler, updateHandler, deleteHandler };
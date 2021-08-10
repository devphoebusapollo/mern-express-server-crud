const Post = require('../model/postModel');

const postCtrl = {
    createPost: async (req, res) => {
        try {
            const {title, body, comments, credits} = req.body;

            const newPost = new Post({
                title, body, comments, credits
            });

            await newPost.save();

            res.json({msg: 'New post saved'});
        } catch (error) {
            console.log(error.message);
            return res.status(500).json({msg: error.message});
        }
    },
    getPosts: async (req, res) => {
        try {
            const allPosts = await Post.find();

            res.json(allPosts);
        } catch (error) {
            console.log(error.message);
            return res.status(500).json({msg: error.message});
        }
    },
    updatePost: async (req, res) => {
        try {

            const saveNewComments = await Post.findByIdAndUpdate(req.params.id, {
                comments: req.newComments
            });

            res.json({msg: 'Updated Successfully'});
        } catch (error) {
            return res.status(500).json({msg: error.message});
        }
    },
    deletePost: async (req, res) => {
        try {
            const id = req.params.id;

            const deleteMe = await Post.findByIdAndDelete(id).exec();

            res.json({msg: "Post Deleted Successfully!"});
        } catch (error) {
            return res.status(500).json({msg: error.message});
        }
    }
}

module.exports = postCtrl;
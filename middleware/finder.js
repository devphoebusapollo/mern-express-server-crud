const Post = require('../model/postModel');

const finder = async (req, res, next) => {
    try {
        const id = req.params.id;
        
        const res = await Post.findById(id);

        const existingComments = [...res.comments];

        existingComments.push(req.body.comments);

        console.log(existingComments);
    

        req.newComments = existingComments;

        next()
    } catch (error) {
        console.log(error);
    }
}

module.exports = finder;
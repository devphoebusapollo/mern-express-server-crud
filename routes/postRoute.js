const postRoute = require('../controller/postCtrl');
const router = require('express').Router();
const finder = require('../middleware/finder');

router.post('/post', postRoute.createPost);

router.get('/all_posts', postRoute.getPosts);

router.put('/update/:id', finder, postRoute.updatePost);

router.delete('/delete/:id', postRoute.deletePost);

module.exports = router;
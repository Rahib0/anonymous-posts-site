const express = require('express');
const router = express.Router();
const Post = require('../models/post')

router.get('/', async (req, res) => {
    try {
        const posts = await Post.all
        res.status(200).json(posts)
    } catch(err) {
        res.status(500).json({err})
    }
})

router.post('/', async (req, res) => {
    try {
        const post = await Post.create(req.body);
        res.status(201).json(post)
    } catch (err) {
        res.status(422).json({err})
    }
})

// router.get('/:id', )

module.exports = router
const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

const postRoutes = require('./controller/posts')

server.use('/posts', postRoutes)

server.get('/', (req, res) => res.send('Welcome'))

module.exports = server
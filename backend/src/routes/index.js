const express = require('express');

const postRouter = require('./posts.routes');

const routes = express.Router();

routes.use('/posts', postRouter);

module.exports = routes;

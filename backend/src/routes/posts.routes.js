const express = require('express');

const postsRouter = express.Router();

const DataService = require('../services/DataService');

const FilterUserByGroup = require('../services/FilterUserByGroupService');

const FilterPostsByUser = require('../services/FilterPostsByUserService');

postsRouter.get('/group/:group', (req, res) => {
  const { group } = req.params;
  const usersData = DataService.getUsers();
  const postsData = DataService.getPosts();

  if (!(usersData && postsData)) {
    throw new Error('Database error');
  }
  const posts = [];

  const usersInGroup = FilterUserByGroup(usersData, group);

  usersInGroup.forEach((user) => {
    posts.push(...FilterPostsByUser(postsData, user));
  });

  return res.json(posts);
});

module.exports = postsRouter;

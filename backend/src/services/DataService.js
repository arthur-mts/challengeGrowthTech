const cron = require('node-cron');
const fetch = require('node-fetch');

let users;

let posts;

function updateDatabase() {
  fetch('http://jsonplaceholder.typicode.com/users').then((res) => {
    res.json().then((data) => { users = data; });
  });
  fetch('http://jsonplaceholder.typicode.com/posts').then((res) => {
    res.json().then((data) => { posts = data; });
  });
}


cron.schedule('*/20 * * * *', () => {
  console.log('Updating database...');
  updateDatabase();
  console.log('Finish update');
});

module.exports = {
  updateDatabase,
  getUsers: () => users,
  getPosts: () => posts,
};

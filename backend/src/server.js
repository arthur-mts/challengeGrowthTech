const express = require('express');

const cors = require('cors');

const app = express();

const usersRepository = require('./database/users.json');

const postsRepository = require('./database/posts.json');

app.use(express.json());

app.use(cors());

app.get('/users/:group/posts',(req, res) => {
  const { group } = req.params;
  
  const posts = [];

  usersRepository.forEach((user)=> {
    const groups = user.company.bs.split(' ');
    if(groups.includes(group)){
      posts.push(
        {
          userName: `${user.name}`,
          companyName: `${user.company.name}`,
          posts:  postsRepository.filter((post)=>{
            if(post.userId == user.id)
              return post
          })
      });
    }
  });

  return res.json(posts);

});

app.listen(3333, ()=>{
  console.log('Server on!');
});

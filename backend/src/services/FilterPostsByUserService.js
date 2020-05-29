function execute(posts, user) {
  const postsByUser = [];

  posts.forEach((post) => {
    if (post.userId === user.id) {
      postsByUser.push(
        {
          userName: user.name,
          company: user.company.name,
          post,
        },
      );
    }
  });

  return postsByUser;
}

module.exports = execute;

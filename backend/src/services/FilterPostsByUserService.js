function execute(posts, user) {
  const postsByUser = posts.reduce((postArr, post) => {
    if (post.userId === user.id) {
      postArr.push(
        {
          userName: user.name,
          company: user.company.name,
          post,
        },
      );
    }
    return postArr;
  }, []);

  return postsByUser;
}

module.exports = execute;

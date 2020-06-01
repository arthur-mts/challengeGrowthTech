function execute(users, group) {
  const usersInGroup = users.filter((user) => {
    let userCompany = user.company.name.toLowerCase();

    if (userCompany.includes(' ')) userCompany = userCompany.split(' ');
    else userCompany = userCompany.split('-');

    return userCompany.includes(group.toLowerCase());
  });

  return usersInGroup;
}

module.exports = execute;

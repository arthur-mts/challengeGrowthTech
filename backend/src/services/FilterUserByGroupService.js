function execute(users, group) {
  return users.filter((user) => {
    let userCompany = user.company.name.toLowerCase();

    if (userCompany.includes(' ')) userCompany = userCompany.split(' ');
    else userCompany = userCompany.split('-');

    return userCompany.includes(group.toLowerCase());
  });
}

module.exports = execute;

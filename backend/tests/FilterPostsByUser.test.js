const FilterPostsByUser = require('../src/services/FilterPostsByUserService');

const noPostUser = {
  id: 6,
  name: 'Mrs. Dennis Schulist',
  username: 'Leopoldo_Corkery',
  email: 'Karley_Dach@jasper.info',
  address: {
    street: 'Norberto Crossing',
    suite: 'Apt. 950',
    city: 'South Christy',
    zipcode: '23505-1337',
    geo: {
      lat: '-71.4197',
      lng: '71.7478',
    },
  },
  phone: '1-477-935-8478 x6430',
  website: 'ola.org',
  company: {
    name: 'Considine-Lockman',
    catchPhrase: 'Synchronised bottom-line interface',
    bs: 'e-enable innovative applications',
  },
};

const user3 = {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
    geo: {
      lat: '-37.3159',
      lng: '81.1496',
    },
  },
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
  company: {
    name: 'Romaguera-Crona',
    catchPhrase: 'Multi-layered client-server neural-net',
    bs: 'harness real-time e-markets',
  },
};

const posts = [
  {
    userId: 1,
    id: 1,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
  {
    userId: 1,
    id: 2,
    title: 'qui est esse',
    body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
  },
  {
    userId: 3,
    id: 27,
    title: 'quasi id et eos tenetur aut quo autem',
    body: 'eum sed dolores ipsam sint possimus debitis occaecati\ndebitis qui qui et\nut placeat enim earum aut odit facilis\nconsequatur suscipit necessitatibus rerum sed inventore temporibus consequatur',
  },
  {
    userId: 3,
    id: 28,
    title: 'delectus ullam et corporis nulla voluptas sequi',
    body: 'non et quaerat ex quae ad maiores\nmaiores recusandae totam aut blanditiis mollitia quas illo\nut voluptatibus voluptatem\nsimilique nostrum eum',
  },
  {
    userId: 9,
    id: 90,
    title: 'ad iusto omnis odit dolor voluptatibus',
    body: 'minus omnis soluta quia\nqui sed adipisci voluptates illum ipsam voluptatem\neligendi officia ut in\neos soluta similique molestias praesentium blanditiis',
  },
  {
    userId: 10,
    id: 91,
    title: 'aut amet sed',
    body: 'libero voluptate eveniet aperiam sed\nsunt placeat suscipit molestias\nsimilique fugit nam natus\nexpedita consequatur consequatur dolores quia eos et placeat',
  },
];


describe('filter posts by user id', () => {
  it('should return two posts', () => {
    expect(FilterPostsByUser(posts, user3)).toHaveLength(2);
  });

  it('should return no posts', () => {
    expect(FilterPostsByUser(posts, noPostUser)).toHaveLength(0);
  });
});

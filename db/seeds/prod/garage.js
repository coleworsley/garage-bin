const items = [
  {
    id: 1,
    name: 'Cooler',
    description: 'it cools things',
    cleanliness: 'Sparkling',
  },
  {
    id: 2,
    name: 'Old Paint Cans',
    description: 'Instead of stashing it in the house, you decide to get it out of sight.',
    cleanliness: 'Dusty',
  },
  {
    id: 3,
    name: 'Garden Hose',
    description: 'No matter how you store it, it\'s one of the most useful items you can own',
    cleanliness: 'Sparkling',
  },
  {
    id: 4,
    name: 'Spiders',
    description: 'Yeah... theres lots everywhere',
    cleanliness: 'Rancid',
  },
  {
    id: 5,
    name: 'Dustpan',
    description: 'Really who actually cleans there garage?',
    cleanliness: 'Dusty',
  },
  {
    id: 6,
    name: 'Tools',
    description: 'Yeah like you were going to use them',
    cleanliness: 'Dusty',
  },
]

exports.seed = function(knex, Promise) {
  return knex('garage')
    .del()
    .then(() => {
      return Promise.all(
        items.map(item => knex('garage').insert(item))
      )
    });
};

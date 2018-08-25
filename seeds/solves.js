exports.seed = function (knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {id: 99901, name: 'Ambitious Aardvark', email: 'aardvark@example.org'},
        {id: 99902, name: 'Bamboozled Baboon', email: 'baboon@example.org'},
        {id: 99903, name: 'Curious Capybara', email: 'capybara@example.org'},
        {id: 99904, name: 'Dilapidated Duck', email: 'duck@example.org'},
        {id: 99905, name: 'Exuberant Elephant', email: 'elephant@example.org'},
        {id: 99906, name: 'Fascinated Flying Fox', email: 'flying.fox@example.org'},
        {id: 99907, name: 'Generous Gila Monster', email: 'gila.monster@example.org'},
        {id: 99908, name: 'Hilarious Heron', email: 'heron@example.org'},
        {id: 99909, name: 'Intransigent Impala', email: 'impala@example.org'},
        {id: 99910, name: 'Jocular Jerboa', email: 'jerboa@example.org'}
      ])
    })
}

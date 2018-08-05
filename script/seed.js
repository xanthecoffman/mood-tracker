'use strict'

const db = require('../server/db')
const {User, Result} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  const results = await Promise.all([
    Result.create({
      name: 'Not stressed',
      description:
        'You are not stressed. I am impressed in this high pressure society we live in that you have managed to come out unscathed. Congrats.',
      example:
        'Optimisticaly brainstorming app ideas without any understanding of the pratical implementation details...ignorance is bliss',
      advice: 'Whatever youre doing, keep doing it'
    }),
    Result.create({
      name: 'Mildly stressed',
      description:
        'You are a little stressed, but nothing to worry about just yet. Its more of a nagging feeling than it is anything to worry about...yet',
      example:
        'Realising its lunch time and you havent gotten anything meaningful done all morning',
      advice:
        'Youre probably fine, maybe get some free cereal from the kitchen to make you feel better'
    }),
    Result.create({
      name: 'Medium stress',
      description:
        'Youre kind of stressed. You can probably overcome it quickly, I doubt this kind of stress will linger for more than an hour or so',
      example: 'Attempting to seed a join table',
      advice: 'Deep breaths, its gonna be okay'
    }),
    Result.create({
      name: 'Quite stressed',
      description:
        'Youre quite stressed. People aroud you are probably starting to notice, as the nail chewing and the leg tapping is starting to get distracting',
      example:
        'Travis continuous deployment isnt working and the errors arent meaningful',
      advice:
        'Talk to a friend or trusted colleague. If you dont have either of these things, submit a help ticket'
    }),
    Result.create({
      name: 'Very stressed',
      description:
        'Woah, youre very stressed. Youre probably starting to get a headache from tensing your forehead for so long, and you probably havent even noticed youve been sitting down for 5 hours straight',
      example: 'Debugging a webpack bundle error',
      advice:
        'Get up, go outside. Get a draft latte from La Colombe, theyre great. Put on some Destinys Child and have a bit of a jam sesh. Everythings gonna be okay'
    }),
    Result.create({
      name: 'Extremely stressed',
      description:
        'WOW, just wow. Your mousepad is probably under stress after that. Are you okay?',
      example:
        'Computer mysteriously shuts down before you remembered to save anything',
      advice:
        'You probably need a hug. Dont hug me though, thats weird. Hug a human. Crying is a good option too'
    }),
    Result.create({
      name: 'Youre not okay',
      description: 'I cannot even begin to describe what you must be feeling',
      example: 'I dont even know, cant relate',
      advice:
        'I know I said before that you dont need a therapist, but you probably do'
    })
  ])
  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed

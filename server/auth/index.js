const router = require('express').Router()
const User = require('../db/models/user')
const Score = require('../db/models/scores')

module.exports = router

router.post('/login', async (req, res, next) => {
  try {
    const user = await User.findOne(
      {where: {email: req.body.email}},
      {include: {model: Score}}
    )
    if (!user) {
      console.log('No such user found:', req.body.email)
      res.status(401).send('Wrong username and/or password')
    } else if (!user.correctPassword(req.body.password)) {
      console.log('Incorrect password for user:', req.body.email)
      res.status(401).send('Wrong username and/or password')
    } else {
      req.login(user, err => (err ? next(err) : res.json(user)))
    }
  } catch (err) {
    next(err)
  }
})

router.post('/signup', async (req, res, next) => {
  try {
    const user = await User.create(req.body)
    req.login(user, err => (err ? next(err) : res.json(user)))
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists')
    } else {
      next(err)
    }
  }
})

router.post('/logout', (req, res) => {
  req.logout()
  req.session.destroy()
  res.redirect('/')
})

router.get('/me', async (req, res) => {
  const user = await User.findById(req.user.id, {include: {model: Score}})
  res.json(user)
})

router.use('/google', require('./google'))

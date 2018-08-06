const router = require('express').Router()
const {Score, User} = require('../db/models')
module.exports = router

router.post('/', async (req, res, next) => {
  try {
    console.log('req.body', req.body)
    const score = await Score.create(req.body.score)
    res.status(201).json(score)
  } catch (err) {
    next(err)
  }
})

const router = require('express').Router()
const {Score, User} = require('../db/models')
module.exports = router

router.post('/:id', async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id)
    const previousScores = user.getScores()
    res.json(previousScores)
  } catch (err) {
    next(err)
  }
})

const router = require('express').Router()
const {Result} = require('../db/models')
module.exports = router

router.get('/:id', async (req, res, next) => {
  try {
    const result = await Result.findById(req.params.id)
    res.json(result)
  } catch (err) {
    next(err)
  }
})

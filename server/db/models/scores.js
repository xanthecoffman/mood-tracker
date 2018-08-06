const Sequelize = require('sequelize')
const db = require('../db')

const Score = db.define('scores', {
  result: {
    type: Sequelize.STRING
  }
})

module.exports = Score

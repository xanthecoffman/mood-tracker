const Sequelize = require('sequelize')
const db = require('../db')

const Result = db.define('results', {
  name: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.TEXT
  },
  example: {
    type: Sequelize.TEXT
  },
  advice: {
    type: Sequelize.TEXT
  },
  image: {
    type: Sequelize.TEXT
  }
})

module.exports = Result

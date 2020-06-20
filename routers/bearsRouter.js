const express = require('express');

const knex = require('../data/dbConfig');

const router = express.Router();

function logError(err) {
  console.log('Error: ', err)
}

router.get('/', async (req, res) => {
  try {
    const bears = await knex('bears');
    if (bears) {
      res.status(200).json(bears)
    } else {
      null
    }
  } catch (err) {

  }
})

router.get('/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const bear = await knex('bears').where({id: id}).first()
    if (bear) {
      res.status(201).json(bear)
    } else {
      res.status(404).json({
        errorMessage: 'Invalid id'
      })
    }
  } catch (err) {
    logError(err)
    res.status(500).json({
      errorMessage: 'Could not retrieve bear'
    })
  }
})

module.exports = router;
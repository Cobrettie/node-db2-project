const express = require('express');

const knex = require('./data/dbConfig');

const router = express.Router();

// endpoints here

router.post('/', async (req, res) => {
  if (!req.body.name) {
    res.status(400).json({
      errorMessage: 'Name field required'
    })
  }

  try {
    await knex('zoos').insert(req.body)
      .then(addedZooId => {
        res.status(201).json(addedZooId)
      })
  } catch (err) {
    console.log('Error: ', err);
    res.status(500).json({
      errorMessage: 'Could not add zoo'
    })
  }
})

router.get('/', async (req, res) => {
  try {
    const zoos = await knex('zoos')
    res.status(200).json(zoos)
  } catch (err) {
    console.log('Error: ', err);
    res.status(500).json({
      errorMessage: 'Failed to retrieve zoos'
    })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const zoo = await knex('zoos').where({id: id}).first()
    if (zoo) {
      res.status(201).json(zoo)
    } else {
      res.status(404).json({
        errorMessage: "Invalid ID"
      })
    }
  } catch (err) {
    console.log('Error: ', err);
    res.status(500).json({
      errorMessage: 'Could not retrieve zoo'
    })
  }
})

router.put('/:id', (req, res) => {
  
})

router.delete('/:id', (req, res) => {
  
})

module.exports = router;
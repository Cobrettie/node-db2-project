const express = require('express');

const zoosDB = require('./data/dbConfig');

const router = express.Router();

// endpoints here

router.post('/', (req, res) => {

})

router.get('/', async (req, res) => {
  try {
    const zoos = await zoosDB('zoos')
    res.status(200).json(zoos)
  } catch {
    console.log('Error: ', err);
    res.status(500).json({
      errorMessage: 'Failed to retrieve zoos'
    })
  }
})

router.get('/:id', (req, res) => {
  
})

router.put('/:id', (req, res) => {
  
})

router.delete('/:id', (req, res) => {
  
})

module.exports = router;
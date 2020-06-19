const express = require('express');

const router = express.Router();

// endpoints here

router.post('/', (req, res) => {

})

router.get('/', (req, res) => {
  res.status(200).json({
    message: "Server running"
  })
})

router.get('/:id', (req, res) => {
  
})

router.put('/:id', (req, res) => {
  
})

router.delete('/:id', (req, res) => {
  
})

module.exports = router;
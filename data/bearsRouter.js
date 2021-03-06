const express = require('express');

const knex = require('./dbConfig');
const Bears = require('../data/helpers/bearsModel');

const router = express.Router();

function logError(err) {
  console.log('Error: ', err)
}

router.post('/', async (req, res) => {
  try {
    const postBear = await knex('bears').insert(req.body);
    if (postBear) {
      res.status(201).json(postBear)
    } 
  } catch (err) {
    logError(err);
    res.status(500).json({
      errorMessage: 'Server error, could not add bear'
    })
  }
})

router.get('/:id', async (req, res) => {
  await const bear = Bears.get(req.params.id);
  res.status(200).json({bear})
})

// router.get('/', async (req, res) => {
//   try {
//     const bears = await knex('bears');
//     if (bears) {
//       res.status(200).json(bears)
//     } else {
//       null
//     }
//   } catch (err) {
//     logError(err);
//   }
// })

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
      errorMessage: 'Server error, could not retrieve bear'
    })
  }
})

router.put('/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const updateBear = await knex('bears').where({id: id}).update(req.body);
    if (updateBear) {
      res.status(201).json({
        message: 'Bear updated'
      })
    } else {
      res.status(404).json({
        errorMessage: 'Invalid Id'
      })
    }
  } catch (err) {
    logError(err);
    res.status(500).json({
      errorMessage: 'Server error, could not update bear'
    })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const deleted = await knex('bears').where({id: id}).del()
    if (deleted) {
      res.status(200).json({
        message: 'Deleted bear'
      })
    } else {
      res.status(404).json({
        errorMessage: 'Invalid id'
      })
    }
  } catch (err) {
    logError(err);
    res.status(500).json({
      errorMessage: 'Server error, could not delete bear'
    })
  }
})

module.exports = router;
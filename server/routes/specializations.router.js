const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();



//get route for specializations
router.get('/', (req, res) => {
  const query = `SELECT * FROM "specializations" ORDER BY "id";`; 
  pool
    .query(query)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('ERROR: Get all specializations', err);
      res.sendStatus(500);
    });
});


module.exports = router;
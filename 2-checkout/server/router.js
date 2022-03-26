const express = require('express');
const db = require('./models');

// create router
const router = express.Router();

// defining routes & controllers (request handlers) in same file
router.get('/checkout', (req, res) => {

  db.readData(req.session_id)
    .then(([rows]) => {
      res.json(rows[0]);
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(404);
    });

});

router.post('/checkout', (req, res) => {

  if (Object.keys(req.body).length === 0) { // create session, find a better way
    db.createSession(req.session_id)
      .then(() => {
        res.status(201).send('User session created');
      })
      .catch(err => {
        res.status(200).send('Retrieving existing session data');
      });
  } else { // update existing session entry
    db.postData(req.session_id, req.body)
      .then(() => {
        res.sendStatus(201);
      })
      .catch(err => {
        console.error(err);
        res.status(500).send('The server encountered an error');
      });
  }

});

// export router
module.exports = router;
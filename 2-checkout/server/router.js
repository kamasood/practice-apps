const express = require('express');
const db = require('./models');

// create router
const router = express.Router();

// defining routes & controllers (request handlers) in same file
router.get('/checkout', (req, res) => {

  db.readData(req.session_id)
    .then(([rows]) => {
      res.json(rows);
    })
    .catch(err => console.log(err));

});

router.post('/checkout', (req, res) => {

  if (Object.keys(req.body).length === 0) { // create session, find a better way
    db.createSession(req.session_id)
      .then(() => {
        res.sendStatus(201);
      })
      .catch(err => {
        res.sendStatus(409); // session has already been created in db
      });
  } else { // update existing session entry
    db.postData(req.session_id, req.body)
      .then(() => {
        res.sendStatus(201);
      })
      .catch(err => console.log(err));
  }

});

// export router
module.exports = router;
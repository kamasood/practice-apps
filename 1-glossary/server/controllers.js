// require models file
const models = require('./models.js');

// export glossary request handler functions

module.exports.glossary = {

  get: (req, res) => {
    if (req.query.page) {
      models.readAll(req.query.page, req.query.search)
        .then((words) => {
          res.send(words);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      models.countAll(req.query.search)
        .then((count) => {
          res.send({count})
        });
    }
  },

  post: (req, res) => {
    models.saveWord(req.body.word, req.body.definition)
      .then(() => {
        res.sendStatus(201);
      })
      .catch((error) => {
        console.error(error);
      })
  },

  patch: (req, res) => {
    models.updateWord(req.body.word, req.body.definition)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((error) => {
        console.error(error);
      });
  },

  delete: (req, res) => {
    models.deleteWord(req.body.word)
      .then(({deletedCount}) => {
        res.send(`Deleted ${deletedCount} words from database`);
      })
      .catch((error) => {
        console.error(error);
      });
  },

  options: (req, res) => {
    res.send('OPTIONS request received'); // what do we need to return for OPTIONS?
  }

}


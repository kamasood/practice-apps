// require models file
const models = require('./models.js');

// export glossary request handler functions

module.exports.glossary = {

  get: (req, res) => {
    models.readAll()
      .then((words) => {
        res.send(words);
      })
      .catch((error) => {
        console.error(error);
      });
  },

  post: (req, res) => {
    return models.saveWord(req.body.word, req.body.definition) // might have to change these arguments for Axios requests (set up for Postman now)
      .then(() => {
        res.sendStatus(201); // would we use 202 here?
      })
      .catch((error) => {
        console.error(error);
      })
  },

  patch: (req, res) => {
    return models.updateWord(req.body.word, req.body.definition)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((error) => {
        console.error(error);
      });
  },

  delete: (req, res) => {
    return models.deleteWord(req.body.word)
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

